angular.module('webApp')
    .controller('MainController', function($scope, IceCreamFactory){

        $scope.greeting = "Hello Angular";

        $scope.handleButtonClick = function() {

            $scope.greeting = "Hello Bootstrap";
        };

        $scope.phones = [
            {
                "name":"G1"
            },
            {
                "name":"Nexus One"
            },
            {
                "name":"iPhone"
            }
        ];

        $scope.flavors = IceCreamFactory.flavors;
    });
