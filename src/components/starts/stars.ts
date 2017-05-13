import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the Stars component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'stars',
  templateUrl: 'stars.html'
})
export class Stars {
  @Input() rate:any;
  stars: any = [];
  constructor() {

  }
  ngOnInit(){
    let rate =  Math.round(this.rate*5/100);
    for (let i = 0; i < 5; i++) {
      this.stars.push(i<=rate?'star':'star-outline');
    }
  }

}
