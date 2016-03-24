import { Component, EventEmitter } from 'angular2/core';
import { Cd } from './cd.module';

@Component({
  selector: 'cd-view',
  inputs: ['cd', 'inCart'],
  outputs: ['addToCart', 'removeFromCart'],
  template: `
    <div class="cd">
      <h1>{{ cd.title }}</h1>
      <h3>{{ cd.artist }}</h3>
      <p>{{ cd.genre }}</p>
      <p>Price: {{ cd.price | currency:'USD':true:'1.2-2' }}</p>
      <button *ngIf="!inCart" (click)="cdSelected()">Add to Cart</button>
      <button *ngIf="inCart" (click)="unselectCd()">Remove From Cart</button>
    </div>
  `
})
export class CdComponent {
  public cd: Cd;
  public inCart: boolean;
  public addToCart: EventEmitter<Cd>;
  public removeFromCart: EventEmitter<Cd>;
  constructor() {
    this.addToCart = new EventEmitter();
    this.removeFromCart = new EventEmitter();
  }

  cdSelected() {
    this.addToCart.emit(this.cd);
  }

  unselectCd() {
    this.removeFromCart.emit(this.cd);
  }
}
