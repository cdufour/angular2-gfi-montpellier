import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {

  transform(in: any) {
    return 'ok';
  }

}
