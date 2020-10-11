import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-div-display',
  templateUrl: './div-display.component.html',
  styleUrls: ['./div-display.component.css']
})
export class DivDisplayComponent implements OnInit {

  @Output() clickMe = new EventEmitter<number>();

  @Input() id : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(){
    this.clickMe.emit(this.id);
  }

}