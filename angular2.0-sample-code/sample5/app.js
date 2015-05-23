
import {Component, View, bootstrap} from "angular2/angular2";
//importing custom external component
import {Beer} from "beer";

@Component({
    selector: 'my-app'
})
@View({
    directives:[Beer],
    template: `
        <h1>Hello {{name}}</h1>
        <br/>
        <beer (openbeer)="handleOpeningBeer()"></beer>
    `
})
class MyApp{

    name: string;
    constructor(){
        this.name = "Angular 2"
    }

    //here we implement the openBeer event from the beer component
    handleOpeningBeer(){
        console.log('successfully implemented openbeer event');
    }
}

bootstrap(MyApp);
