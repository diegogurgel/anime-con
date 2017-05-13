import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthHttp } from '../../providers/auth-http';

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
  providers:[AuthHttp],
})
export class AnimeDetail {
  anime:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: AuthHttp) {
    let animeId = navParams.get('animeId');
    this.anime = {};
    http.get(`https://anilist.co/api/anime/${animeId}`).then(data=>{
      this.anime = data;
      this.anime.genres = this.anime.genres.join(', ');
    });
  }

  ionViewDidLoad() {

  }

}
