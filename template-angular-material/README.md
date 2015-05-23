Angular JS Template
=============================================

####Description

A ___simple___ and ___lean___ template for scaffolding an AngularJS web application with:

* __Angular Material__ - for supporting a responsive/mobile web UI
* __Karma__ - the Test Runner by the AngularJS team
* __Jasmine__ - for supporting Unit Testing
* __Protractor__ - for supporting End-to-End Testing
 
####Prerequisites

__Step 1__.  Install [Node](http://nodejs.org) if you don't have it.

__Step 2__.  Install [Bower](http://bower.io) if you don't have it.

	$ npm install -g bower

__Step 3__.  Install [Protractor](http://angular.github.io/protractor/#/) if you don't have it.
	
	$ npm install -g protractor
	
	$ webdriver-manager update
	
####Using the Template

__Step 1__. Clone the repo then cd into the project root.

__Step 2__. To add the [Angular JS](https://angularjs.org) library and the [Angular-Bootstrap](http://angular-ui.github.io/bootstrap/) native directives to your project simply execute ...

	$ bower install
	
	//see bower.json file for details

__Step 3__. To add the [Karma Test Runner](http://karma-runner.github.io/0.12/intro/installation.html) and the [Jasmine Testing Framework](http://jasmine.github.io) to  your project simply execute ...

	$ npm install

	//see package.json file for details
	
__That's it!__  You can run the app and start customizing it with your own application-specific controllers, services, directives, view templates, Jasmine unit tests, etc.

####Project Structure Overview

Below is a screenshot of the scaffolding provided by this template.  

![project structure icon](https://s3-us-west-1.amazonaws.com/app-static-assets/images/ang-found-karma-jasmine-protractor-structure.png)

* app (___the root of your application___)
	* scripts
		* controllers (___each controller class has its own file___)
		* directives (___each directive class has its own file___) not shown
		* filters (___each filter class has its own file___) not shown
		* services (___each service class has its own file___)
		* app.js (___the application module___)
	* styles (___each controller's view template file has its own css file___)
	* views (___each controllers has an individual view template___)
	* index.html (___the parent html file that Angular view templates are added to___)
* bower_components (___used for fetching third party libraries - can be ignored___)
* node_modules (___used for fetching third party node modules - can be ignored___)
* test (___the root for all tests___)
	* spec (___the root for all Unit Tests___)
		* controllers (___each controller has its own test suite___)
		* directives (___each directive has its own test suite___) not shown
		* filters (___each filter has its own test suite___) not shown
		* services (___each service chas its own test suite___)
	* e2e (___the root for all End-to-End tests___)
	* karma.conf.js (___configuration for the Unit Tests___)
	* protractor.conf.js (___configuration for the End-to-End Tests___)
	
####Running Unit Tests
    
Write some unit tests to confirm the behaviors and responsibilities of each Angular module.  Sample unit tests (using Karma-Jasmine) have been provided in test/spec/... so that you can quickly confirm all the 'plumbing and setup' are working correctly. 

In Terminal, run the sample test suites by executing ...

	./node_modules/karma/bin/karma start

Alternatively, if you use Webstorm, right-click karma.conf.js and choose __Run 'karma.conf.js__'

![project structure icon](https://s3-us-west-1.amazonaws.com/app-static-assets/images/ang_found_karma_jasmine_tests.png)

####Running End-to-End Tests

Write some end-to-end tests to confirm the user's perspective of the feature implementation. A sample end-to-end test (using Protractor-Jasmine) has been provided in test/e2e/... so that you can quickly confirm all the 'plumbing and setup' are working correctly.

Before running, first open test/protractor.conf.js and change the 'baseUrl' parameter to be the Url of your app.  

Note, this can be __localhost:port__ when dev-ing on your machine.  It can also be a remote test or production server - so you can continue running your end-to-end test suites as it is moved between different servers (thats really cool).

````
exports.config = {

    ...
    baseUrl:'http://host:port/some.html' //<---CHANGE ME HERE
};
````

Dedicate a new Terminal window to run the Selenium Server (note, you get this for free with installing Protractor!) by executing ...

	webdriver-manager start
	
In the Terminal (pointing in your project directory), run your end-to-end tests by executing ...

	cd test
	
	protractor protractor.conf.js

####References

[Angular Material Design](https://material.angularjs.org/#/)

[Unit Testing Angular JS Applications](https://docs.angularjs.org/guide/unit-testing)

[Karma Test Runner](http://karma-runner.github.io/0.12/intro/installation.html)

[Jasmine Testing Framework](http://jasmine.github.io/)

[End-to-End Testing Agular JS Apps with Protractor](http://angular.github.io/protractor)
