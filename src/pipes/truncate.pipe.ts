import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number): any {
    if (value == null) {
      return;
    };
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}

@Pipe({
  name: 'naValue'
})
export class NaValuePipe implements PipeTransform {
  transform(value: any) {
    debugger;
    if (value == '' || value == null || value == undefined) {
      return 'NA'
    } else {
      return value;
    }
    throw new Error('Method not implemented.');
  }

}
