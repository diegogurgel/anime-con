import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthHttp } from '../../providers/auth-http'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AuthHttp],
})
export class HomePage {

  constructor(public navCtrl: NavController, http:AuthHttp) {
  	http.get('https://anilist.co/api/anime/search/Onegai').then(data=>{
  		console.log(data);
  	});
  }

}
