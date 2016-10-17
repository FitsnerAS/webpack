module.exports = function (myApp) {
    myApp.controller('ShopsCtrl', function ($scope, $uibModal, NgMap,
            shopsCatManagementFactory, toastr) {
        $scope.shops = [];
        $scope.pagination = {};
        $scope.pagination.itemPerPage = 5;
        $scope.pagination.currentPage = 1;

        $scope.shops = shopsCatManagementFactory.getStorageShops();
        $scope.pagination.totalItems = $scope.shops.length;

        NgMap.getMap('all').then(function (map) {
            console.log(map.getCenter());
            console.log('markers', map.markers);
            console.log('shapes', map.shapes);
        });

        $scope.editShopeModal = function (currentShop) {

            $scope.editShop = currentShop;

            $scope.openEditShopModal = $uibModal.open({
                templateUrl: 'angular-app/tmpl/edit-shop.html',
                size: 'lg',
                scope: $scope
            });
        };

        $scope.editCurrentShop = function () {
            shopsCatManagementFactory.editShop($scope.shops);
            $scope.openEditShopModal.dismiss();
            toastr.success('Done!');
        };

        $scope.addShop = function () {
            $scope.openAddShopModal = $uibModal.open({
                templateUrl: 'angular-app/tmpl/add-shop.html',
                size: 'lg',
                scope: $scope,
                controller: 'NewShopCtrl'
            });
        };
    });
};


