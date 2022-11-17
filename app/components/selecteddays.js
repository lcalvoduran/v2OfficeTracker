import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

let months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
export default class selecteddaysComponent extends Component {
  @service login;
  constructor() {
    super(...arguments);
  }

  @action saveDates() {
    let keyUser = this.login.retrieveSessionStorage();
    var controllerDates = this.args.arrayDays;
    var dateSelected;
    var arrayDates = [];
    if (controllerDates.length == 0) {
      localStorage.setItem(keyUser, JSON.stringify(controllerDates));
    } else {
      controllerDates = Object.values(controllerDates).forEach((val) => {
        dateSelected = new Date(
          2022,
          months.indexOf(val.month),
          val.number
        ).toDateString(); //2022-10-1
        arrayDates.push(dateSelected);
      });
      for (let i = 0; i < arrayDates.length; i++) {
        localStorage.setItem(keyUser, JSON.stringify(arrayDates));
      }
    }
    window.alert('The changes will be stored in the local Database');
    window.location.reload();
  }
  @action clearDates(number, month) {
    console.log(this.args.arrayDays)
    let findArray = this.args.arrayDays.findIndex(
      (element) => element.number == number && element.month == month
    );
    console.log(findArray);
    //this.selectedDay = this.selectedDay.splice(findArray, 1);
    this.args.arrayDays.splice(findArray, 1);
  }

  get totalSelected() {
    return this.args.arrayDays;
  }
}
