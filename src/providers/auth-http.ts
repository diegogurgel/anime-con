import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the AuthHttp provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthHttp {
  aniListEndpoint:string;
  constructor(public http: Http) {
    this.aniListEndpoint = 'https://anilist.co/api/auth/access_token';
  }
  get(url){
  	return this.verifyToken()
  	.then(token=>{
	  	let headers = new Headers();
	  	headers.append('Authorization',`Bearer ${localStorage.getItem('token')}`);
	  	return this.http.get(url,{headers:headers}).map(response => response.json());
  	}).then(response=>{
  		return response.toPromise();
  	})
  }
  verifyToken():Promise<string>{
  	return new Promise((resolve, reject)=>{
	  	this.getToken().subscribe(data=>{
	  		localStorage.setItem('token', data.access_token);
	  		resolve(data.access_token);
	  	});
  	})

  }
  getToken(){
  	let search = new URLSearchParams();
  	search.append('grant_type','client_credentials');
  	search.append('client_id', 'dgurgel-08ya9');
  	search.append('client_secret', 'AbWDL9uegWpMP1s3s6P');
  	return this.http.post(this.aniListEndpoint, search).map(response=>response.json());
  }


}
