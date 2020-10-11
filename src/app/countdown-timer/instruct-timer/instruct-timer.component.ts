import { Component, OnInit} from '@angular/core';
import { Event } from '@angular/router';
import { CountdownTimerService } from '../countdown-timer.service';

@Component({
  selector: 'app-instruct-timer',
  templateUrl: './instruct-timer.component.html',
  styleUrls: ['./instruct-timer.component.css']
})
export class InstructTimerComponent implements OnInit{

  // @Output() onStartPauseEventClicked = new EventEmitter<Event>();
  // @Output() onResetEventClicked = new EventEmitter<Event>();
  timerLimit : number;
  isStart : boolean = true;

  constructor(private countdownTimerservice : CountdownTimerService) {
    
   }

  ngOnInit(): void {
  
  }

  onStartPauseClick(){
      if(this.isStart){
        this.isStart = false;
        this.countdownTimerservice.onStartPauseClicked.emit(true);
      }else {
        this.isStart = true;
        this.countdownTimerservice.onStartPauseClicked.emit(false);
      }
  }

  onResetClick(timerLimit : number){
    this.countdownTimerservice.onResetClicked.emit(timerLimit);
  }
}
