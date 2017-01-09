import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'example'})
export class ExamplePipe implements PipeTransform {

  transform(name: string, len: boolean) {

    if (len) {
      return name.length;
    } else {
      return 'coucou'
    }

  }

}
