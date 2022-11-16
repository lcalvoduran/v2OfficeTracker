import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class bookingsComponent extends Component {
  @service login;
  @tracked arrayDays = [];
  @tracked selectedDay;

  constructor() {
    super(...arguments);
    this.arrayDays = this.retrieveDaysFromLocalStorage();
  }

  @action updateArray(daysMarkeds, dateFormatted, month, marked) {
    var salvaGuarda = this.retrieveDaysFromLocalStorage();
    this.arrayDays.push(daysMarkeds);
    var flateado = this.arrayDays = this.arrayDays.flat(1).slice(-7);
    var filtradisimo = flateado.filter((estado) => estado.marked == true);
    if (filtradisimo != null) {      
      console.log(filtradisimo);
      console.log(salvaGuarda);
      return this.arrayDays = filtradisimo;      
    }else{
      return this.arrayDays = [];
    }
  }



  retrieveDaysFromLocalStorage() {
    let variable = this.login.retrieveSessionStorage();
    let daysLocal = JSON.parse(localStorage.getItem(variable));
    if (variable) {
      var day, month, number;
      var arrayLocal = [];
      if (daysLocal == null) {
        return this.arrayDays = [];
      } else {
        daysLocal = Object.values(daysLocal).forEach((val) => {
          day = val.split(' ')[0];
          month = val.split(' ')[1];
          number = val.split(' ')[2];
          arrayLocal.push({ day: day, month: month, number: number });
        });
        daysLocal = arrayLocal;
        return daysLocal;
      }
    } else {
    }
  }
}
