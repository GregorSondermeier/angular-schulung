import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FooFormComponent } from './foo-form/foo-form.component';
import { PersonComponent } from './person/person.component';
import { PersonHeigtPipe } from './person/person.height.pipe';
import { PeopleComponent } from './people/people.component';
import {GenderPipe} from "./gender/gender.pipe";

// the second parameter 'fr' is optional
registerLocaleData(localeDe, 'de');

@NgModule({
  declarations: [
    AppComponent,
    GenderPipe,
    FooFormComponent,
    PersonComponent,
    PersonHeigtPipe,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
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
