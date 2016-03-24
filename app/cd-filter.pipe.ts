import { Pipe, PipeTransform } from 'angular2/core';
import { Cd } from './cd.module';

@Pipe({
  name:'genrePipe',
  pure: false
})
export class GenrePipe {
  transform(input: Cd[], args) {
    if(args[0] !== "All")
      return input.filter(function(cd){
        return cd.genre == args[0];
      });
    else return input;
  }
}

@Pipe({
  name:'artistPipe',
  pure: false
})
export class ArtistPipe {
  transform(input: Cd[], args) {
    if(args[0] !== "All")
      return input.filter(function(cd){
        return cd.artist == args[0];
      });
    else return input;
  }
}
