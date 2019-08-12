import { Pipe, PipeTransform } from '@angular/core';
import { isString } from 'util';

@Pipe({
  name: 'tijd'
})
export class TijdPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(!isString(value)) return value;

    let tijd: string = value.replace(" ", "");
    if (tijd.length == 1){
      return 0 + tijd;
    } else{ 
      return tijd;
    }
  }

}
