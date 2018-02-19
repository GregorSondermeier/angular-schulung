import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { GscFooFormComponent } from "./foo-form/home.foo-form.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    GscFooFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class GsmHomeModule { }
