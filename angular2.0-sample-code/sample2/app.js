
//ES6 deconstruction pattern to fetch from the angular2 file
import {Component, View, bootstrap} from "angular2/angular2";

//Declare a custom component
@Component({
    selector: 'beer'
})
@View({
    template:"<div>{{categories}}</div>"
})
class Beer{
    constructor() {
        this.categories = ["IPA", "Stout", "Porter", "Lager", "Pale Ale"];
    }
}

//App component
@Component({
    selector: 'my-app'
})
@View({
    directives:[Beer],
    template: `
        <div>
            <h1>Hello {{name}}</h1>
            <beer></beer>
        </div>
        `
})
class MyApp{
    name: string;
    constructor(){
        this.name = "Angular 2";
    }
}

bootstrap(MyApp);
