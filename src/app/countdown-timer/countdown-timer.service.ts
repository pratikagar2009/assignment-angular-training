import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountdownTimerService {

  onResetClicked = new EventEmitter<number>();

  onStartPauseClicked = new EventEmitter<boolean>();

  constructor() { }
}
