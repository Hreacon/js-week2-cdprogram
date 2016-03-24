import { Component } from 'angular2/core';
import { CdListComponent } from './cdList.component';
import { Cd } from './cd.module';
import { GenreSelectComponent } from './genre-select.component';
import { ArtistSelectComponent } from './artist-select.component';
import { CartComponent } from './cart.component';

@Component({
  selector: 'my-app',
  directives: [CdListComponent, GenreSelectComponent, ArtistSelectComponent, CartComponent],
  template: `
    <h1>List of Cds</h1>
    <genre-select [genreList]="genres" (onGenreSelect)="filterGenre($event)"></genre-select>
    <artist-select [artistList]="artists" (onArtistSelect)="filterArtist($event)"> </artist-select>
    <cd-list [cdList]="cds" [genreFilter]="genreFilter" [artistFilter]="artistFilter" (addToCart)="addToCart($event)"> </cd-list>
    <cart-view [cartList]="cartList"></cart-view>
  `
})
export class AppComponent {
  public cds: Cd[];
  public artists: string[]=[];
  public genres: string[]=[];
  public genreFilter: string = "All";
  public artistFilter: string = "All";
  public cartList: Cd[] = [];
  constructor() {
    this.cds = [
      new Cd("Indestructible", "Disturbed", "rock", 10),
      new Cd("title2", "artitst", "opera", 10),
      new Cd("Album", "Another Artist", "Classic", 10),
      new Cd("Album", "Another Artist", "rock", 10),
      new Cd("Slim Shady LP", "Slim Shady", "rap", 0)
    ];
    this.setFilters();
    this.cartList = [
      new Cd("Slim Shady LP", "Slim Shady", "rap", 0)
    ];
    console.log("appcomp", this.cds);
  }

  filterGenre(genre:string) {
    this.genreFilter = genre;
    this.setFilters();
  }

  filterArtist(artist:string) {
    this.artistFilter = artist;
    this.setFilters();
  }

  addToCart(cd: Cd) {
    if(this.cartList.indexOf(cd) < 0)
      this.cartList.push(cd);
  }

  setFilters() {
    this.artists = [];
    this.genres = [];
    for(var i = 0; i < this.cds.length; i++) {
      if(this.artists.indexOf(this.cds[i].artist) < 0) {
        if(this.genreFilter !== "All") {
          if(this.cds[i].genre == this.genreFilter)
            this.artists.push(this.cds[i].artist);
        } else {
          this.artists.push(this.cds[i].artist);
        }
      }
      if(this.genres.indexOf(this.cds[i].genre) < 0) {
        if(this.artistFilter !== "All") {
          if(this.cds[i].artist == this.artistFilter) {
            this.genres.push(this.cds[i].genre);
          }
        } else {
          this.genres.push(this.cds[i].genre);
        }
      }
    }
  } // end function setFilters
} // end class
