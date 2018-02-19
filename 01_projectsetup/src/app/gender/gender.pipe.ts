import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(g: gs.Gender): string {
    switch (g) {
      case 'MALE':
        return 'male';
      case 'FEMALE':
        return 'female';
    }
  }

}
