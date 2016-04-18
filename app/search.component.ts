import { Component} from 'angular2/core';
import { Roast } from './roast.model';

@Component({
  selector: 'search',
  inputs: ['roasts'],
  template: `
  <button (click)="getFlavorList()">click</button>
  <select>
    <option *ngFor="#roast of roasts" value={{roast.name}}>{{roast.name}}</option>
  </select>
  `
})
export class SearchComponent{
  public roasts: Roast[];
  // public flavors: ["cherry", "vanilla", "honey", "almond", "caramel", "chocolate", "rose", "apple"];
  // logAllTheThings() {
  //   console.log(this.roasts);
  //   console.log(this.flavors);
  // }
  getFlavorList() {
    var roasts = this.roasts;
    var flavors = [];
    roasts.forEach(function(roast){
      var roast_flavors = roast.flavors;
      roast_flavors.forEach(function(flavor){
        if(flavors.indexOf(flavor) < 0){
          flavors.push(flavor)
        }
      });
    });
    console.log(flavors);
  }
}
