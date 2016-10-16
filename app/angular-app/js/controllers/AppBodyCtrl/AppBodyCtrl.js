'use strict'

module.exports = function (myApp) {
    myApp.controller('AppBodyCtrl', function ($localstorage, shopsResolve,
            goodsResolve, $rootScope, $state, $http) {

        if ($localstorage.get('shops') === undefined) {
            $localstorage.set('shops', JSON.stringify(shopsResolve));
        }

        if ($localstorage.get('goods') === undefined) {

//            fetch example
            fetch("assets/json/goods.json").then(
                    function (data) {
                        $localstorage.set('goods', JSON.stringify(data));
                    },
                    function () {
                        $state.go('app.error');
                    }
            );
//            promise example
//            var promise = new Promise(function (resolve, reject) {
//
//                $http({
//                    method: 'GET',
//                    url: "assets/json/goods.json"
//                }).success(function (data) {
//                    resolve(data);
//                }).error(function () {
//                    reject();
//                });
//            });
//
//            promise.then(
//                    function (data) {
//                        $localstorage.set('goods', JSON.stringify(data));
//                    },
//                    function () {
//                        $state.go('app.error');
//                    }
//            );
        }

        $rootScope.$on('$stateChangeError', function () {
            $state.go('app.error');
        });
    });
};
