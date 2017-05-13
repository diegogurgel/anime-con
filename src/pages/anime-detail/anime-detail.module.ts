import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimeDetail } from './anime-detail';
import { StartsModule } from '../../components/starts/stars.module';

@NgModule({
  declarations: [
    AnimeDetail,

  ],
  imports: [
    IonicPageModule.forChild(AnimeDetail),
    StartsModule,
  ],
  exports: [
    AnimeDetail
  ]
})
export class AnimeDetailModule {}
