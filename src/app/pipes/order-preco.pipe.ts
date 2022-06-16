import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderPreco'
})
export class OrderPrecoPipe implements PipeTransform {

  transform(array: any[], search: string,): any[] {
    return array;
  }

}
