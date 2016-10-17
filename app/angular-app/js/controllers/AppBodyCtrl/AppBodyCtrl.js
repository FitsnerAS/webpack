module.exports = function (myApp) {
    myApp.controller('AppBodyCtrl', function ($localstorage, shopsResolve,
            goodsResolve, $rootScope, $state, shopsCatManagementFactory) {

        if (shopsCatManagementFactory.storageJsonValidation()) {
            
            $localstorage.set('shops', shopsResolve);

            $localstorage.set('goods', goodsResolve);

        }

        $rootScope.$on('$stateChangeError', function () {

            $state.go('app.error');

        });
    });
};
