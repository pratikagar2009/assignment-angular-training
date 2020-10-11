import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

  order: string = 'price';
  reverse: boolean = false;

  isGrid = true;

  books = [
    {
      title : "Think Like a Monk",
      author : "Jay Shetty",
      price :  388.00
  },
  {
    title : "The 10 Rules of Successful Nations",
    author : "Ruchir Sharma",
    price :  269.00
  },
{
  title : "One Arranged Murder",
  author : "Chetan Bhagat",
  price :  175.00
},
{
  title : "The Ickabog",
  author : "J.K. Rowling",
  price :  1039.00
},
{
  title : "Singing in the Dark",
  author : "K. Satchidanandan",
  price :  449.00
},
{
  title : "The theory of Everything",
  author : "Stephan Hawking",
  price :  169.00
},
{
  title : "Mahatma Gandhi Autobiography",
  author : "Mahatma Gandhi",
  price :  139.00
},
{
  title : "The Cave",
  author : "Alok Kejriwal",
  price :  310.00
},
{
  title : "The Gopi Diaries : Coming Home",
  author : "Sudha Murty",
  price :  176.00
},
{
  title : "The Kite Runner",
  author : "Khaled Hosseini",
  price :  269.00
},
{
  title : "Richest Man in Babylon",
  author : "George S",
  price :  139.00
},
{
  title : "The Silent Patient",
  author : "Alex M",
  price :  287.00
},
{
  title : "Chosen Spirits",
  author : "Sumit Basu",
  price :  372.00
},
{
  title : "Moustache",
  author : "S Hareesh",
  price :  384.00
},
{
  title : "Prelude to a Riot: Novel",
  author : "Annie Zaidi",
  price :  341.00
},
{
  title : "Bottle of lies",
  author : "Katherine Eban",
  price :  423.00
}
];

  constructor() { }

  ngOnInit(): void {
  }

  isGridClicked(){
    this.isGrid = true;
  }
  isListClicked(){
    this.isGrid = false;
  }


  setOrder(value: boolean) {
      this.reverse = value;
    }

}
