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
    'ad.jpg',
    'apadeloo.jpg',
    'art_et_eau.jpg',
    'bubblebump.jpg',
    'clotures_melantois.jpg',
    'credit_mutuel.jpg',
    'decathlon.jpg',
    'delices_pevele.jpg',
    'domaine_funquerel.jpg',
    'ecopevele.jpg',
    'espe.jpg',
    'ferme_acquette.jpg',
    'funbridge.jpg',
    'gojantes.jpg',
    'guy_brunet.jpg',
    'idimmobilier.jpg',
    'jadeo.jpg',
    'lacaleche.jpg'
  ];
  sponsors2: Array<string> = [
    'logo_losc.jpg',
    'lou_coiffure.jpg',
    'matylight.jpg',
    'max_garage.jpg',
    'mdweb.jpg',
    'metropole_couverture.jpg',
    'olympiades.jpg',
    'patapata.jpg',
    'perfect_deco.jpg',
    'piraino.jpg',
    'proprete.jpg',
    'sd.jpg',
    'sligec.jpg',
    'terenvi.jpg',
    'texaco.jpg',
    'vaillant.jpg',
    'xxl.jpg',
    'zcars.jpg'
  ];
  indexSponsor1: number = 0;
  indexSponsor2: number = 0;
  indexRouting: number = 0;
  
  constructor(private router: Router) {
    //Initialize first ranking
    this.router.navigate([this.router.config[this.indexRouting].path]);

    //Switch sponsor images
    const sponsorTimer = Observable.interval(3000);
    sponsorTimer.subscribe(() => {
      this.indexSponsor1 = this.indexSponsor1 === this.sponsors1.length-1 ? 0 : this.indexSponsor1 + 1;
      this.indexSponsor2 = this.indexSponsor2 === this.sponsors2.length-1 ? 0 : this.indexSponsor2 + 1;
    });

    //Switch ranking via routing
    const rankingTimer = Observable.interval(15000);
    rankingTimer.subscribe(() => {
      this.indexRouting = this.indexRouting === this.router.config.length-1 ? 0 : this.indexRouting + 1;
      this.router.navigate([this.router.config[this.indexRouting].path]);
    });
  }
}
