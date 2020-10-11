import { Component} from '@angular/core';

import { CountdownTimerService } from '../countdown-timer.service';

@Component({
  selector: 'app-display-countdown',
  templateUrl: './display-countdown.component.html',
  styleUrls: ['./display-countdown.component.css']
})
export class DisplayCountdownComponent {

  // counterValue : Observable<number>;

 
  limit: number;
  interval;

  constructor(private countdownTimerservice : CountdownTimerService) {
    // this.counterValue = timer(0,1000).pipe(take(this.limit),map(() => --this.limit));
    this.countdownTimerservice.onResetClicked.subscribe(
      (timelimit : number) => this.limit = timelimit
    );

    this.countdownTimerservice.onStartPauseClicked.subscribe(
      ( isStart : boolean ) => this.checkbutton(isStart)
    );
  }

  checkbutton(val : boolean){
    if(val){
      this.startTimer();
    }
    else{
      this.pauseTimer();
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.limit > 0) {
        this.limit--;
      } 
      else {
        this.limit = 0;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}
