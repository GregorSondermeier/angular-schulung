import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';


import { AppComponent } from './app.component';
import { GsmCommonModule } from "./common/common.module";
import { GsmHomeModule } from "./home/home.module";
import { GsmPersonModule } from "./person/person.module";

registerLocaleData(localeDe, 'de');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    GsmCommonModule,
    GsmHomeModule,
    GsmPersonModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de-DE'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
