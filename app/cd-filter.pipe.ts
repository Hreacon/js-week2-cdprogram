import { Pipe, PipeTransform } from 'angular2/core';
import { Cd } from './cd.module';

@Pipe({
  name:'cdfilter',
  pure: false
})
export class CdFilterPipe {
  transform(input: Cd[], args) {
    var filterType: string = args[0];
    var filterBy: string = args[1];
    var filterTypes: string[] = ["genre", "artist"];
    var filterBys: string[] = ["rock", "opera"];
    for(var i = 0;i<filterTypes.length;i++) {

    }
  }
}
