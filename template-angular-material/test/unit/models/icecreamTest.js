describe('IceCreamFactory', function() {

    beforeEach(module("webApp"));

    //the factory under test to assert against
    var factoryUnderTest;

    beforeEach(inject(function(IceCreamFactory){

        factoryUnderTest = IceCreamFactory
    }));

    //assertions ....

    it('has flavors defined', function(){

        expect(factoryUnderTest.flavors).toBeDefined();
    });

    it('has more than one flavor', function() {

        expect(factoryUnderTest.flavors.length).toBeGreaterThan(0);
    });

    it('has four flavors by default', function(){

        expect(factoryUnderTest.flavors.length).toBe(4);
    });
});