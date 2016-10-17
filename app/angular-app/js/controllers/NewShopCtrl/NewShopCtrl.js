module.exports = function (myApp) {
    myApp.controller('NewShopCtrl', function (NgMap, $scope,
            shopsCatManagementFactory, toastr) {

        $scope.newShop = {};

        NgMap.getMap({id: 'we'}).then(function (map) {
            console.log(map.getCenter());
            google.maps.event.trigger($scope.map, 'resize');
            console.log('markers', map.markers);
            console.log('shapes', map.shapes);
        });

        var marker;

        $scope.addMarker = function (map) {
            if (marker !== undefined) {
                marker.setMap(null);
            }
            $scope.lat = map.latLng.lat();
            $scope.long = map.latLng.lng();
            marker = new google.maps.Marker({
                position: {lat: $scope.lat, lng: $scope.long},
                map: $scope.map,
                title: $scope.newShop.link
            });
        };

        $scope.AddNewShop = function (shop) {

            $scope.newShopParams = {
                shop: shop,
                lat: $scope.lat,
                long: $scope.long
            };

            shopsCatManagementFactory.setNewShop($scope.newShopParams);

            $scope.shops.unshift(shop);

            $scope.openAddShopModal.dismiss();

            if (marker !== undefined) {
                marker.setMap(null);
            }

            $scope.pagination.totalItems = $scope.shops.length;
            
            toastr.success('Done!');
        };

        $scope.dismiss = function () {
            $scope.openAddShopModal.dismiss();
            if (marker !== undefined) {
                marker.setMap(null);
            }
        };
    });
};
