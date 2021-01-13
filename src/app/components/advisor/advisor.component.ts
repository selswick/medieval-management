import {
  Component,
  OnInit
} from '@angular/core';
import * as moment from 'moment';
import {
  AnonymousSubject
} from 'rxjs/internal/Subject';

@Component({
  selector: 'app-advisor',
  templateUrl: './advisor.component.html',
  styleUrls: ['./advisor.component.scss']
})
export class AdvisorComponent implements OnInit {

  darkThroneTime: any;
  nextTurnTime: any;
  nextTurnTimeStamp: any;

  constructor() {
    setInterval(() => {
      this.getTime()
    }, 1);
    setInterval(() => {
      this.getTurnTime()
    }, 1);

  }

  ngOnInit(): void {

  }

  getTime() {
    this.darkThroneTime = moment();

    return this.darkThroneTime;
  }

  getTurnTime() {
    //get next turn timestamp
    if (this.darkThroneTime.minutes() < 30) {
      this.nextTurnTimeStamp = moment().set('minute', 30);
    } else {
      this.nextTurnTimeStamp = moment().set('minute', 60);
    }

    //convert to minutes left
    let nextTurnMin = moment(moment(this.nextTurnTimeStamp,"DD/MM/YYYY HH:mm:ss")
        .diff(moment(this.darkThroneTime,"DD/MM/YYYY HH:mm:ss"))).subtract('minute',1).format('mm');
    let nextTurnSec = 59 - this.darkThroneTime.seconds();
    if(nextTurnSec < 10) {
      this.nextTurnTime = nextTurnMin + ":0" + nextTurnSec;
    } else {
      this.nextTurnTime = nextTurnMin + ":" + nextTurnSec;
    }

    return this.nextTurnTime;
  }
}
