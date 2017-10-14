import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sponsors1: Array<string> = [
    'nordnet.jpg',
    'youtube.png',
    'fretron.jpg'
  ];
  sponsors2: Array<string> = [
    'logo.jpg',
    'samsung.jpg'
  ];
  indexSponsor1: number = 0;
  indexSponsor2: number = 0;
  indexRouting: number = 0;
  
  constructor(private router: Router) {
    //Initialize first ranking
    this.router.navigate([this.router.config[this.indexRouting].path]);

    //Switch sponsor images
    const sponsorTimer = Observable.interval(2000);
    sponsorTimer.subscribe(() => {
      this.indexSponsor1 = this.indexSponsor1 === this.sponsors1.length-1 ? 0 : this.indexSponsor1 + 1;
      this.indexSponsor2 = this.indexSponsor2 === this.sponsors2.length-1 ? 0 : this.indexSponsor2 + 1;
    });

    //Switch ranking via routing
    const rankingTimer = Observable.interval(12000);
    rankingTimer.subscribe(() => {
      this.indexRouting = this.indexRouting === this.router.config.length-1 ? 0 : this.indexRouting + 1;
      this.router.navigate([this.router.config[this.indexRouting].path]);
    });
  }
}
