'use strict';

describe('Controller: LeftSidebarCntrl', function(){

    //load the controller's module
    beforeEach(module('webApp'));

    //this is your controller under test
    var controllerUnderTest;

    //this is the scope of your controller under test to be used by assertions
    var scope;

    beforeEach(inject(function ($controller, $rootScope){

        scope = $rootScope.$new();

        controllerUnderTest = $controller('LeftSidebarCntrl', {
            $scope:scope
        });
    }));

    //unit tests start here here...

    it('is composed of model - which is an array of items', function(){

        expect(scope.items.length).toBeGreaterThan(0);
    });
});