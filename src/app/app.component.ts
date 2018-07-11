/* import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  template: `
  <p>{{ someProperty }}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  someProperty = '';
  constructor(private myservice: DataService) {
    this.someProperty = this.myservice.myData();
  }
} */

import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  template:
  `<h1 [ngStyle]="titleStyles">Hello</h1>
  <h1 [style. color]=" toggleStyle ? 'green' : 'pink' ">Hello</h1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggleStyle = true;
  titleStyles = {
  'color': 'red',
  'font-size': '4em'
  };
}

/* import { Component } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
@Component({
  selector: 'app-root',
  template: `
    <p [@myAwesomeAnimation]='state' (click)="animateMe()">I will animate</p>
  `,
  styles: [`
    p {
      width:200px;
      margin:100px auto;
      text-align:center;
      background:lightgray;
      padding:20px;
      font-size: 1.5 em
    }
  `],
  animations: [
    trigger('myAwesomeAnimation', [

      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      transition('small <=> large', animate('300ms ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(35px)', offset: .5}),
          style({opacity: 1, transform: 'translateY(0)', offset: 1}),
      ])),
    ]),
  ]
})
export class AppComponent {
  state = '';

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
} */

