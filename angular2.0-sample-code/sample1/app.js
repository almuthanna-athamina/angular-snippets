//ECMAScript 6 style importing
import {Component, View, bootstrap} from "angular2/angular2";

@Component({ //Declare Component decorator 
    selector: 'my-app'
})
@View({ //Declare View decorator - note ECMAScript 6 multi-line strings for view template
    template: ` 
    	<div>
    		<h1>Hello {{name}}</h1>
    	</div>
    `
})
class MyApp{ //Declare app component class - note ECMAScript 6 Class syntax

    name: string; 

    constructor(){ 

        this.name = "Angular 2.0"
    }
}

bootstrap(MyApp);