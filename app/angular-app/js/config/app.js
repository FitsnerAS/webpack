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
                        shopsResolve: function (shopsCatManagementFactory, $localstorage) {
                            return new Promise(function (resolve, reject) {
                                try {

                                    $localstorage.get('shops');
                                    resolve();

                                } catch (e) {
                                    shopsCatManagementFactory.getShops().then(function (data) {
                                        return data.json();
                                    }, function () {
                                        reject();
                                    }).then(function (jsonData) {
                                        $localstorage.set('shops', jsonData);
                                        resolve();
                                    });
                                }
                            });
                        },
                        goodsResolve: function (shopsCatManagementFactory, $localstorage) {
                            return new Promise(function (resolve, reject) {
                                try {

                                    $localstorage.get('goods');
                                    resolve();

                                } catch (e) {
                                    shopsCatManagementFactory.getGoods().then(function (data) {
                                        return data.json();
                                    }, function () {
                                        reject();
                                    }).then(function (jsonData) {
                                        $localstorage.set('goods', jsonData);
                                        resolve();
                                    });
                                }
                            });
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
                    templateUrl: 'angular-app/tmpl/contacts.html'
                })
                .state('app.error', {
                    url: '/error',
                    templateUrl: 'angular-app/tmpl/error-page.html'
                });
    });
};