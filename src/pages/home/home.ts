import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthHttp } from '../../providers/auth-http'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AuthHttp],
})
export class HomePage {
  animes:any;
  constructor(public navCtrl: NavController, http:AuthHttp) {
    this.animes = [];
  	http.get('https://anilist.co/api/browse/anime').then(data=>{
  	  this.animes = data;
  	});
  }
  openAnime(animeId){
    this.navCtrl.push('AnimeDetail', {animeId:animeId});
  }

}
