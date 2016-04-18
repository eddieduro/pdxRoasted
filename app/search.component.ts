import { Component} from 'angular2/core';
import { Roast } from './roast.model';

@Component({
  selector: 'search',
  inputs: ['roasts'],
  template: `
  <button (click)="logAll()">click</button>
  <select>
    <option default>Choose a flavor</option>
    <option *ngFor="#flavor of flavors" value={{flavor}}>{{flavor}}</option>
  </select>

  `
})
export class SearchComponent{
  public roasts: Roast[];
  public flavors: string[];
  constructor(){
    this.flavors = ["cherry", "vanilla", "honey", "almond", "caramel", "chocolate", "rose", "apple"];
  }
  logAll() {
    console.log(this.roasts);
    console.log(this.flavors);
  }
  getFlavorList() {
    var roasts = this.roasts;
    var flavorsArr = [];
    roasts.forEach(function(roast){
      var roast_flavors = roast.flavors;
      roast_flavors.forEach(function(flavor){
        if(flavors.indexOf(flavor) < 0){
          flavors.push(flavor)
        }
      });
    });
    this.flavors = flavorsArr;
  }
}
