import { Component } from 'angular2/core';
import { Cd } from './cd.module';
import { CdComponent } from './cd.component';

@Component({
  selector: 'cd-list',
  inputs: ['cdList'],
  directives: [CdComponent],
  template: `
    <cd-view *ngFor="#currentCd of cdList" [cd]="currentCd"></cd-view>
  `
})
export class CdListComponent {
  public cdList: Cd[];
  constructor() {
    console.log('cdlistcomp', this.cdList);
  }
}
