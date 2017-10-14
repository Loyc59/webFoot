import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sponsors1 = [
    'nordnet.jpg',
    'youtube.png',
    'fretron.jpg'
  ];
  sponsors2 = [
    'logo.jpg',
    'samsung.jpg'
  ];
  index1: number = 0;
  index2: number = 0;
  
  constructor() {
    const timer = Observable.interval(2000);
    timer.subscribe(() => {
      this.index1 = this.index1 === this.sponsors1.length-1 ? 0 : this.index1 + 1;
      this.index2 = this.index2 === this.sponsors2.length-1 ? 0 : this.index2 + 1;
    });
  }
}
