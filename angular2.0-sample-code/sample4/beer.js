import {Component, View, For, If} from "angular2/angular2";

//Custom component
@Component({
    selector: 'beer'
})
@View({
	directives:[For, If],
    templateUrl:"beer.html"
})
class Beer {
	categories: Array<string>;
	constructor(){
		this.categories = ["IPA", "Porter", "Stout"];
	}
	handleClick() {
		console.log('User clicked');
	}
}

export {Beer};