import { Component } from 'angular2/core';
import { CdListComponent } from './cdList.component';
import { Cd } from './cd.module';

@Component({
  selector: 'my-app',
  directives: [CdListComponent],
  template: `
    <h1>List of Cds</h1>
    <cd-list [cdList]="cds"></cd-list>
  `
})
export class AppComponent {
  public cds: Cd[];
  constructor() {
    this.cds = [
      new Cd("title", "artitst", "genre", 10),
      new Cd("title2", "artitst", "genre", 10)
    ];
    console.log("appcomp", this.cds);
  }
}
