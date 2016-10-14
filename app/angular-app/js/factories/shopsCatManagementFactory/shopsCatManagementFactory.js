module.exports = function (myApp) {
    myApp.factory('shopsCatManagementFactory', function ($http, $localstorage, toastr) {
        return{
            getShops: function () {
                return $http({
                    method: 'GET',
                    url: "assets/json/shops.json"
                });
            },
            getStorageShops: function () {
                return JSON.parse($localstorage.get('shops'));
            },
            getGoods: function () {
                return $http({
                    method: 'GET',
                    url: "assets/json/goods.json"
                });
            },
            getShopGoods: function (shop_id) {
                var allGoods = JSON.parse($localstorage.get('goods'));
                return allGoods.filter(function (object) {
                    return object.shop_id === shop_id;
                });
            },
            setUpdatedGood: function (good) {
                var allGoods = JSON.parse($localstorage.get('goods'));
                var newGoodsArr = allGoods.map(function (object) {
                    if (object.saleId === good.saleId) {
                        return good;
                    } else {
                        return object;
                    }
                });

                $localstorage.set('goods',
                        JSON.stringify($filter('removeHash')(newGoodsArr)));

                toastr.success('Done!');
            },
            setNewGood: function (post, shop_id) {

                post.shop_id = shop_id;

                var allGoods = JSON.parse($localstorage.get('goods'));

                allGoods.push(post);

                $localstorage.set('goods', JSON.stringify(allGoods));

                toastr.success('Done!');

            },
            setNewShop: function (newShopParams) {
                var shops = JSON.parse($localstorage.get('shops'));
                var rand = 1 + Math.random() * (99999999 - 1);
                rand = Math.round(rand);
                var newShopData = newShopParams.shop;
                newShopData.id = rand;
                newShopData.lat = newShopParams.lat;
                newShopData.long = newShopParams.long;
                shops.push(newShopData);
                $localstorage.set('shops', JSON.stringify(shops));
                toastr.success('Done!');
            },
            editShop: function (shops) {
                $localstorage.set('shops',
                        JSON.stringify($filter('removeHash')(shops)));
                toastr.success('Done!');
            }
        };
    });
};