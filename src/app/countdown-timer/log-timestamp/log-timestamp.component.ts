import { Component, OnInit } from '@angular/core';
import { CountdownTimerService } from '../countdown-timer.service';

@Component({
  selector: 'app-log-timestamp',
  templateUrl: './log-timestamp.component.html',
  styleUrls: ['./log-timestamp.component.css']
})
export class LogTimestampComponent implements OnInit {

  timeStamp = [{
    status : 'Page Loaded',
    date : new Date()
  }];

constructor(private countdownTimerservice: CountdownTimerService){
  this.countdownTimerservice.onStartPauseClicked.subscribe(
    (isStart :  boolean) => this.checkStat(isStart)
  );
}

checkStat(status : boolean){
  if(status){
    this.timeStamp.push({status : 'Started', date : new Date()});
  }
  else{
    this.timeStamp.push({status : 'Paused', date : new Date()});
  }
}

  ngOnInit(): void {
  }

}
