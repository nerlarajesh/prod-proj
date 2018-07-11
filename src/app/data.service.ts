import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  cars = ['Bmw', 'Audi', 'Ford'];
  myData() {
    return 'This is my data!';
  }
}
