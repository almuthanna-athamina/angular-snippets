describe('MainController', function() {

    var controllerScope;

    beforeEach(module("webApp"));

    beforeEach(inject(function($controller, $rootScope) {
        controllerScope = $rootScope.$new();
        $controller('MainController', {
            $scope: controllerScope
        });
    }));

    it('has an initial greeting', function() {

        expect(controllerScope.greeting).toEqual("Hello Angular");
    });

    it('has a collection of three phones', function() {

        expect(controllerScope.phones.length).toBe(3);
    });
});