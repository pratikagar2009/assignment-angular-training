import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.css']
})
export class StudentMarksComponent implements OnInit {
  order: string = 'info.name';
  reverse: boolean = false;
  studentRecords:{Name:string,Class:number,Section:string,Maths:number,Computer:number}[] = [];
  isFetching = false;
  // sortedCollection: any[];

  // constructor(private http : HttpClient, private orderPipe : OrderPipe) { 
  //   this.sortedCollection = orderPipe.transform(this.studentRecords, 'info.name');
  //   console.log(this.sortedCollection);
  // }

  constructor(private http : HttpClient) { 
   }

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData(){
    this.isFetching = true;
    this.http.get<{Name:string,Class:number,Section:string,Maths:number,Computer:number}[]>('https://assignment-angular-training.firebaseio.com/StudentRecord.json').subscribe(
    (responseData => {
      this.isFetching = false;
      this.studentRecords = responseData;
    })
    );
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
