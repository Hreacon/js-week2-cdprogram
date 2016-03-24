import { Component } from 'angular2/core';
import { Cd } from './cd.module';
import { CdComponent } from './cd.component';

@Component({
  selector: 'cart-view',
  inputs: ['cartList'],
  directives: [CdComponent],
  template: `
    <div class="cart">
      <h1> Shopping Cart Total: {{ getPrice() | currency:'USD':true:'1.2' }}</h1>
      <cd-view *ngFor="#cartCd of cartList" [cd]="cartCd" [inCart]="true" (removeFromCart)="removeFromCart($event)"></cd-view>
    </div>
  `
})
export class CartComponent {
  public cartList: Cd[];
  constructor() {

  }
  getPrice(): number {
    var output:number = 0;
    for(var i = 0; i < this.cartList.length;i ++) {
      output += this.cartList[i].price;
    }
    return output;
  }

  removeFromCart(cd: Cd) {
    this.cartList.splice(this.cartList.indexOf(cd), 1);
  }
}
