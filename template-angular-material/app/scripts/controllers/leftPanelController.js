
angular.module('webApp')
    .controller('LeftPanelController', function($scope, $timeout, $mdSidenav, $log) {

        /**
         * For closing the left panel
         */
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
    });

