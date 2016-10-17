module.exports = function (myApp) {
    myApp.controller('AppBodyCtrl',
            function ($rootScope, $state) {
                $rootScope.$on('$stateChangeError', function () {
                    $state.go('app.error');
                });
            });
};
