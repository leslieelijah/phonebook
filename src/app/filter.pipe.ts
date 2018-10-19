import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(searchText: any, args?: any): any {

    if (!searchText) { return null; }
    if (!args) {return searchText; }

    args = args.toLowerCase();

    return searchText.filter(function(item) {
      return JSON.stringify(item).toLowerCase().includes(args);
    });
  }
}
