import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterlist'
})
export class FilterlistPipe implements PipeTransform {
  transform(value: any[], search: string | null, prop?: string, dataSize?: number): any[] {
    const searchText = (search || '').toLowerCase();
    return value.filter((v) => {
      let lowercaseValue;
      if (prop) {
        lowercaseValue = v[prop] ? v[prop].toString().toLowerCase() : '';
        return searchText ? lowercaseValue.includes(searchText) : true;
      } else {
        lowercaseValue = (Object.values(v) as string[]).reduce((a, v) => {
          return (a = v ? v.toString().toLowerCase() : '');
        }, '');
      }

      return searchText && lowercaseValue ? lowercaseValue.includes(searchText) : true;
    });
  }
}
