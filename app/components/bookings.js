import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class bookingsComponent extends Component {
  @service login;
  @tracked arrayDays = [];
  @tracked selectedDay ;

  constructor() {
    super(...arguments);
    this.selectedDay = this.retrieveDaysFromLocalStorage();
  }  

  @action updateArray(daysMarkeds, dateFormatted, month, marked) {
    let salvaGuarda = this.selectedDay;
    this.arrayDays.push(daysMarkeds);
    this.arrayDays = this.arrayDays.flat(1);
    this.selectedDay = this.arrayDays.filter(estado => estado.marked == true);
    
    const createHash = oneObject => {
      const keys = Object.keys(oneObject).sort().join("")
      const values = Object.values(oneObject).sort().join("")
      return `${keys}${values}`
    }    
    const remueveObjetosDuplicados = someArray => {
      const history = {};
      const newDeduplicatedArray = [];    
      for (let i = 0; i < someArray.length; i += 1) {
        const hash = createHash(someArray[i])    
        if (!history?.[hash]) {
          newDeduplicatedArray.push(someArray[i])
          history[hash] = true
        }
      }
      return newDeduplicatedArray;
    }
    this.selectedDay = remueveObjetosDuplicados(this.selectedDay);
    if(salvaGuarda != null){
    this.selectedDay = [...this.selectedDay, ...salvaGuarda];
    this.selectedDay = remueveObjetosDuplicados(this.selectedDay);
  }
  }


  retrieveDaysFromLocalStorage(){
    let variable = this.login.retrieveSessionStorage();
    let daysLocal = JSON.parse(localStorage.getItem(variable));
    if (variable){
      var day, month, number;
      var arrayLocal = [];
      //Convertiremos el string a objeto me retornará un daysLocal
      if(daysLocal == null){}else{
      daysLocal = Object.values(daysLocal)
      .forEach(val => {
          day = val.split(' ')[0]; month = val.split(' ')[1]; number = val.split(' ')[2];
          arrayLocal.push({'day': day, 'month': month, 'number': number});
        }
      );
      daysLocal = arrayLocal;
      return daysLocal;
    }

    }else{
    }
  }
}