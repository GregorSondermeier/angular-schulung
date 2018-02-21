import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

import {UIRouterModule} from "@uirouter/angular";

import { routes } from "./app.routes";

import { GscAppComponent } from './app.component';
import { GspCommonGenderPipe } from "./common/gender/common-gender.pipe";
import { GscGlobalHeader } from "./global/header/global-header.component";
import { GscHome } from "./home/home.component";
import { GscFoo } from "./foo/foo.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GspPersonHeigtPipe } from "./person/person.pipes";
import { GssPersonService } from "./person/person.service";
import { GscPerson } from "./person/person.component";
import { GscPersonForm } from "./person/form/person-form.component";
import { GscPersonCreate } from "./person/create/person-create.component";
import { GscPersonList } from "./person/list/person-list.component";
import { GscPersonEdit } from "./person/edit/person-edit.component";

registerLocaleData(localeDe, 'de');

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    UIRouterModule.forRoot({
      states: routes,
      useHash: true
    })
  ],
  providers: [
    GssPersonService,
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

    // global
    GscGlobalHeader,

    // home
    GscHome,

    // foo
    GscFoo,

    // person
    GspPersonHeigtPipe,
    GscPerson,
    GscPersonForm,
    GscPersonCreate,
    GscPersonEdit,
    GscPersonList
  ],
  bootstrap: [
    GscAppComponent
  ]
})
export class AppModule { }
