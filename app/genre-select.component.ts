import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'genre-select',
  inputs: ['genreList'],
  outputs: ['onGenreSelect'],
  template: `
    <select (change)="changeGenre($event.target.value)">
      <option>All</option>
      <option *ngFor="#currentGenre of genreList">{{ currentGenre }}</option>
    </select>
  `
})
export class GenreSelectComponent {
  public genreList: string[];
  public onGenreSelect: EventEmitter<string>;
  constructor(){
    this.onGenreSelect = new EventEmitter();
  }
  changeGenre(genre: string) {
    console.log('genre-select emit', genre);
    this.onGenreSelect.emit(genre);
  }
}
