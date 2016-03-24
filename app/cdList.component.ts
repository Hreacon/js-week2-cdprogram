import { Component, EventEmitter } from 'angular2/core';
import { Cd } from './cd.module';
import { CdComponent } from './cd.component';
import { GenrePipe, ArtistPipe } from './cd-filter.pipe';

@Component({
  selector: 'cd-list',
  inputs: ['cdList', 'genreFilter', 'artistFilter'],
  outputs: ['addToCart'],
  pipes: [GenrePipe, ArtistPipe],
  directives: [CdComponent],
  template: `
    <div class="shopping">
      <cd-view *ngFor="#currentCd of cdList | genrePipe:genreFilter | artistPipe:artistFilter" [cd]="currentCd" (addToCart)="passCartItemUp($event)"></cd-view>
    </div>
  `
})
export class CdListComponent {
  public cdList: Cd[];
  public genreFilter: string;
  public artistFilter: string;
  public addToCart: EventEmitter<Cd>;
  constructor() {
    this.addToCart = new EventEmitter();
    console.log('cdlistcomp', this.cdList);
  }

  passCartItemUp(cd: Cd) {
    this.addToCart.emit(cd);
  }
}
