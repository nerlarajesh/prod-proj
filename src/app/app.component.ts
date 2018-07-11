import { Component } from '@angular/core';
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
}
