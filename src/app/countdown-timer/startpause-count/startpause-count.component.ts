import { Component, OnInit } from '@angular/core';
import { CountdownTimerService } from '../countdown-timer.service';

@Component({
  selector: 'app-startpause-count',
  templateUrl: './startpause-count.component.html',
  styleUrls: ['./startpause-count.component.css']
})
export class StartpauseCountComponent implements OnInit {
  start : number = 0;
  pause : number = 0;

  constructor(private countdownTimerservice : CountdownTimerService) { 
    this.countdownTimerservice.onStartPauseClicked.subscribe(
      (isStart : boolean) => this.checkButton(isStart)
    );
  }

  checkButton(val : boolean){
    if(val){
      this.start++;

    }else{
      this.pause++;
    }
  }
  ngOnInit(): void {
  }

}
