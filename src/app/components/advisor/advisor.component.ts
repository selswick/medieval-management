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
    // this.nextTurnTime = moment.duration(moment(this.nextTurnTimeStamp,"HH:mm:ss").diff(moment(this.darkThroneTime, "HH:mm:ss"),'seconds'));
    
    this.nextTurnTime = moment(this.nextTurnTimeStamp,"DD/MM/YYYY HH:mm:ss")
        .diff(moment(this.darkThroneTime,"DD/MM/YYYY HH:mm:ss"));
    console.log(moment(this.nextTurnTime).seconds);
    
    return this.nextTurnTime;
  }
}
