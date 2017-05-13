import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Year } from '../pipes/year';
import { StartsModule } from '../components/starts/stars.module';
import { HomePage } from '../pages/home/home';
import { AuthHttp } from '../providers/auth-http'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Year,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StartsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthHttp,
    {
      provide: ErrorHandler, useClass: IonicErrorHandler
    },


  ]
})
export class AppModule {}
