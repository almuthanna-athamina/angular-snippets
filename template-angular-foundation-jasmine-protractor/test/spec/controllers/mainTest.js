'use strict';

describe('Controller: MainCntrl', function(){

    //load the controller's module
    beforeEach(module('webApp'));

    //this is your controller under test
    var controllerUnderTest;

    //this is the scope of your controller under test to be used by assertions
    var scope;

    beforeEach(inject(function ($controller, $rootScope){

        scope = $rootScope.$new();

        controllerUnderTest = $controller('MainCntrl', {
            $scope:scope
        });
    }));

    //unit tests start here here...

    it('should fail', function() {

        expect(true).toBe(true)
    })
});