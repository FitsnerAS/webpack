module.exports = function (myApp) {
    myApp.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/app/shops');
        $stateProvider
                .state('app', {
                    abstract: true,
                    url: '/app',
                    templateUrl: 'angular-app/tmpl/app-body.html',
                    controller: 'AppBodyCtrl',
                    resolve: {
                        shopsResolve: function (shopsCatManagementFactory, $q) {
                            var defer = $q.defer();
                            shopsCatManagementFactory.getShops().success(function (data) {
                                defer.resolve(data);
                            }).error(function (data) {
                                console.log(data);
                                defer.reject();
                            });
                            return defer.promise;
                        },
                        goodsResolve: function (shopsCatManagementFactory, $q) {
                            var defer = $q.defer();
                            shopsCatManagementFactory.getGoods().success(function (data) {
                                defer.resolve(data.catalogCardsData);
                            }).error(function (data) {
                                console.log(data);
                                defer.reject();
                            });
                            return defer.promise;
                        }
                    }
                })
                .state('app.shops', {
                    url: '/shops',
                    templateUrl: 'angular-app/tmpl/shops.html',
                    controller: 'ShopsCtrl'
                })
                .state('app.shops.goods', {
                    url: '/{id}/goods',
                    templateUrl: 'angular-app/tmpl/goods.html',
                    controller: 'GoodsCtrl'
                })
                .state('app.contacts', {
                    url: '/contacts',
                    templateUrl: 'angular-app/tmpl/contacts.html',
                })
                .state('app.error', {
                    url: '/error',
                    templateUrl: 'angular-app/tmpl/error-page.html',
                })


    });
}