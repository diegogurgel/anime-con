import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the Year pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'year',
})
export class Year implements PipeTransform {
  transform(value: Number) {
    let date = value.toString();
    return date.substring(0, date.length-4);
  }
}
