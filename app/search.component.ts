import { Component } from 'angular2/core';



@Component({
  selector: 'search',
  inputs: ['roasts'],
  template: `
  <select>
    <option *ngFor="#roast of roasts" value={{roast.name}}>{{roast.name}}</option>
  </select>
  `
})
export class SearchComponent {
  public roasts: Roasts[];
}
