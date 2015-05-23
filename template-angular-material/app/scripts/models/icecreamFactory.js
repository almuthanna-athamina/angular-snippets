angular.module('webApp')
    .factory('IceCreamFactory', function() {

        /**
         * The factory that will be returned
         */
        var factory = {};

        /**
         * sample data
         */
        factory.flavors = ["butter pecan", "caramel cone", "cherry vanilla", "chocolate chocolate chip"];

        return factory;
    });
