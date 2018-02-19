import { Pipe, PipeTransform } from '@angular/core';
import { Person } from "../../_models/Person";

@Pipe({
  name: 'personHeight'
})
export class PersonHeigtPipe implements PipeTransform {

  transform(p: Person, unit: string = 'cm'): string {
    return `${p.height} ${unit}`;
  }

}
