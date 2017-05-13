import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnimeProvider } from '../../providers/anime-provider'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AnimeProvider],
})
export class HomePage {
  animes:any;
  constructor(public navCtrl: NavController, animePvd:AnimeProvider) {
    this.animes = [];
    animePvd.browse().then(data=> this.animes = data);
  }
  openAnime(animeId){
    this.navCtrl.push('AnimeDetail', {animeId:animeId});
  }

}
