import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnimeProvider } from '../../providers/anime-provider'

/**
 * Generated class for the AnimeDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-anime-detail',
  templateUrl: 'anime-detail.html',
  providers:[AnimeProvider],
})
export class AnimeDetail {
  anime:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public animePvd: AnimeProvider) {
    let animeId = navParams.get('animeId');
    this.anime = {};
    animePvd.get(animeId).then(data=>{
      this.anime = data;
      this.anime.genres = this.anime.genres.join(', ');
    });

  }

  ionViewDidLoad() {

  }

}
