import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gspGender'
})
export class GspCommonGenderPipe implements PipeTransform {

  transform(g: gs.Gender): string {
    switch (g) {
      case 'm':
        return 'male';
      case 'f':
        return 'female';
    }
  }

}
