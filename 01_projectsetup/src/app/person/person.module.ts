import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { GsmCommonModule } from "../common/common.module";

import { GscPersonCreate } from "./create/person.create.component";
import { GspPersonHeigtPipe } from "./person.height.pipe";
import { GspPersonList } from "./list/person.list.component";

@NgModule({
  declarations: [
    GspPersonHeigtPipe,
    GscPersonCreate,
    GspPersonList
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GsmCommonModule
  ],
  providers: [],
  bootstrap: []
})
export class GsmPersonModule { }
