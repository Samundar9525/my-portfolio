import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() cardsArray = [
    {
      title: 'Angular',
      imgsrc:'assets/angular.png',
      description:''

    },
    {
      title: 'Django',
      imgsrc:'assets/django.png',
      description:''

    },
    {
      title: 'python',
      imgsrc:'assets/python.png',
      description:''

    },
    {
      title: 'Postgres',
      imgsrc:'assets/postgresql.png',
      description:''
    },
    {
      title: 'Mongo DB',
      imgsrc:'assets/mongodb.png',
      description:''
    }
]
  constructor(){

  }

}
