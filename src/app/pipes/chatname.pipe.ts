import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chatname'
})
export class ChatnamePipe implements PipeTransform {

  transform(value: string): unknown {
    return (value.charAt(0).toUpperCase() + value.slice(1)).replace(/-/g, " ");
  }

}
