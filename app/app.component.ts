import { Component } from 'angular2/core';
import { Roast } from './roast.model';
import { SearchResultComponent } from './search-results.component';
import { SearchComponent } from './search.component';

@Component({
  selector: 'my-app',
  directives: [SearchComponent],
  template: `
      <h1>PdxRoasted</h1>
      <h3>Lorem</h3>
      <search [roasts]="roasts"></search>
  `
})
export class AppComponent {
  public roasts: Roast[];
  constructor(){
    this.roasts = [
      new Roast("Blue Roast", ['cherry', 'vanilla', 'honey']),
      new Roast("Red Roast", ['almond', 'caramel', 'chocolate']),
      new Roast("Black Roast", ['cherry', 'rose', 'apple'])
    ]
  }
  // constructor(){
  //   this.roasts = [
  //     new Roast({"country":"usa", "farm": "farm1", "region": "pnw"}, "hair bender", "stumptown", "drum", ["cherry", "toffee", "chocolate"], "hdajs", " ahsjkd", "http://www.manchesterpubnyc.com/wp-content/uploads/2011/01/stumptown-coffee-beans-300x225.jpg", "thisisaurl.com", "spring"),
  //     new Roast({"country":"usa", "farm": "farm1", "region": "pnw"}, "hair bender2", "stumptown", "drum", ["cherry", "toffee", "chocolate"], "hdajs", " ahsjkd", "http://www.manchesterpubnyc.com/wp-content/uploads/2011/01/stumptown-coffee-beans-300x225.jpg", "thisisaurl.com", "spring"),
  //     new Roast({"country":"usa", "farm": "farm1", "region": "pnw"}, "hair bender3", "stumptown", "drum", ["cherry", "toffee", "chocolate"], "hdajs", " ahsjkd", "http://www.manchesterpubnyc.com/wp-content/uploads/2011/01/stumptown-coffee-beans-300x225.jpg", "thisisaurl.com", "spring")
  //   ];
  // }
  // public roasts : [{name: 'Black Roast', flavors: ['cherry', 'vanilla', 'honey']}, {name: 'Red Roast', flavors: ['almond', 'caramel', 'chocolate']}, {name: 'Blue Roast', flavors: ['cherry', 'rose', 'apple']}];
  // public flavors : ['cherry', 'vanilla', 'honey', 'almond', 'caramel', 'chocolate', 'rose', 'apple'];
}
