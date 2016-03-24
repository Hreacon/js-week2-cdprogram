import { Component } from 'angular2/core';
import { Cd } from './cd.module';

@Component({
  selector: 'cd-view',
  inputs: ['cd'],
  template: `
    <div class="cd">
      <h1>{{ cd.title }}</h1>
      <h3>{{ cd.artist }}</h3>
      <p>{{ cd.genre }}</p>
      <p>Price: {{ cd.price | currency:'USD':true:'1.2-2' }}</p>
    </div>
  `
})
export class CdComponent {
  public cd: Cd;
  constructor() {}
}
