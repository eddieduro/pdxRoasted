import { Component } from 'angular2/core';

@Component({
  selector: 'search-results',
  template: `
  <ul>
    <li *ngFor="#roast of roasts">
    {{roast.name}} </li>
  </ul>
  `
})
export class SearchResultComponent {

}
