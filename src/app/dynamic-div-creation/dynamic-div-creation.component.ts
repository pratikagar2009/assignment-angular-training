import { Component, OnInit, HostListener, ComponentFactoryResolver, ViewChild, Output, EventEmitter } from '@angular/core';
import { DivDisplayComponent } from './div-display/div-display.component';
import { PlaceholderDirective } from '../placeholder.directive';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-dynamic-div-creation',
  templateUrl: './dynamic-div-creation.component.html',
  styleUrls: ['./dynamic-div-creation.component.css']
})
export class DynamicDivCreationComponent implements OnInit {
  @ViewChild(PlaceholderDirective) divHost : PlaceholderDirective;
  countDiv : number = 1; 
  private closeSub : Subscription

  constructor(private componentFactoryResolver : ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

// @HostListener('window:scroll', ['$event'])
// onScroll(event) {
//  console.log(event);
//  console.log("scrolling");
// }
@HostListener('window:scroll', ['$event'])
showDivEle(){
  const divCompFactory = this.componentFactoryResolver.resolveComponentFactory(DivDisplayComponent);

const hostViewContainerRef = this.divHost.viewContainerRef;
// hostViewContainerRef.clear();

const componentRef = hostViewContainerRef.createComponent(divCompFactory);
componentRef.instance.id = this.countDiv++;

this.closeSub = componentRef.instance.clickMe.subscribe(
  (id) => { alert("Button of Div Numer : "+id+ " is Clicked.") ;
  this.closeSub.unsubscribe();
}

);
}
}
