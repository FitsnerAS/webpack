module.exports = function (myApp) {
    myApp.controller('AppBodyCtrl', function ($localstorage, shopsResolve,
            goodsResolve, $rootScope, $state) {

        if ($localstorage.get('shops') === undefined) {
            $localstorage.set('shops', JSON.stringify(shopsResolve));
        }

        if ($localstorage.get('goods') === undefined) {
            $localstorage.set('goods', JSON.stringify(goodsResolve));
        }
        
        $rootScope.$on('$stateChangeError', function () {
            $state.go('app.error');
        });
    });
};
