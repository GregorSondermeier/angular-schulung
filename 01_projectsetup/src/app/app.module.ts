import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

import { GscAppComponent } from './app.component';
import { GspCommonGenderPipe } from "./common/gender/common.gender.pipe";
import { GscFooFormComponent } from "./home/foo-form/home.foo-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GspPersonHeigtPipe } from "./person/person.height.pipe";
import { GscPersonCreate } from "./person/create/person.create.component";
import { GspPersonList } from "./person/list/person.list.component";

registerLocaleData(localeDe, 'de');

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de-DE'
    }
  ],
  declarations: [

    // app
    GscAppComponent,

    // common
    GspCommonGenderPipe,

    // home
    GscFooFormComponent,

    // person
    GspPersonHeigtPipe,
    GscPersonCreate,
    GspPersonList
  ],
  bootstrap: [GscAppComponent]
})
export class AppModule { }
