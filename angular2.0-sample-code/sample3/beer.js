import {Component, View, bootstrap} from "angular2/angular2";

//Custom component
@Component({
    selector: 'beer'
})
@View({
    templateUrl:"beer.html"
})
class Beer {
	constructor(){
		this.categories = ["IPA", "Porter", "Stout"];
	}
}

export {Beer};