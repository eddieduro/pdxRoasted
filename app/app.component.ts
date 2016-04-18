import { Component } from 'angular2/core';
import { Roast } from './roast.model';
import { SearchResultComponent } from './search-results.component';

@Component({
  selector: 'my-app',
  directives: [SearchResultComponent],
  template: `
      <h1>PdxRoasted</h1>
      <h3>Lorem</h3>
      <search-results></search-results>
  `
})
export class AppComponent {

}
