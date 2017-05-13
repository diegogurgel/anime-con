import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Stars } from './stars';

@NgModule({
  declarations: [
    Stars,
  ],
  imports: [
    IonicPageModule.forChild(Stars),
  ],
  exports: [
    Stars
  ]
})
export class StartsModule {}
