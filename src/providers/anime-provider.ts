import { Injectable } from '@angular/core';
import { AuthHttp } from './auth-http'
import 'rxjs/add/operator/map';

/*
  Generated class for the AnimeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AnimeProvider {
  apiUrl: String = 'https://anilist.co/api';
  constructor(public http: AuthHttp) {

  }
  browse(){
    return this.http.get(`${this.apiUrl}/browse/anime`);
  }
  get(animeId){
    return this.http.get(`${this.apiUrl}/anime/${animeId}`);
  }

}
