import {EventEmitter, Component, View, For} from "angular2/angular2";

//Custom component
@Component({
    selector: 'beer',
    events:['openbeer']
})
@View({
	directives:[For],
    templateUrl:"beer.html"
})
class Beer {
	
	//ECMAScript 7 style - no need for constructor
	openbeer = new EventEmitter();

	categories: Array<string>;
	
	constructor(){
		this.categories = ["IPA", "Porter", "Stout"];
	}

	handleClick(){

		this.openbeer.next(); //clicking on the Beer component will invoke the openBeer event - note, no implementation here
		console.log('handleClick()...');
	}
}

export {Beer};