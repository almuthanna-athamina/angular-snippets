
angular.module('webApp')
    .controller('MainToolbarController', function($scope, $mdSidenav) {

        /**
         * For toggling the left panel
         */
        $scope.toggleLeftPanel = function() {

            $mdSidenav('left').toggle();
        };

        $scope.toggleRightPanel = function() {
            $mdSidenav('right').toggle();
        };


    });