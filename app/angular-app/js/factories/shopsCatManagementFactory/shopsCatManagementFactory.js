module.exports = function (myApp) {
    myApp.factory('shopsCatManagementFactory', function ($localstorage) {
        return{
            getShops: function () {
                return fetch("./assets/json/shops.json");
            },
            getStorageShops: function () {
                return $localstorage.get('shops');
            },
            getGoods: function () {
                return fetch("./assets/json/goods.json");
            },
            getShopGoods: function (shop_id) {
                var allGoods = $localstorage.get('goods');
                return allGoods.filter(function (object) {
                    return object.shop_id === shop_id;
                });
            },
            setUpdatedGood: function (good) {
                var allGoods = $localstorage.get('goods');
                var newGoodsArr = allGoods.map(function (object) {
                    if (object.saleId === good.saleId) {
                        return good;
                    } else {
                        return object;
                    }
                });

                $localstorage.set('goods', newGoodsArr);
            },
            setNewGood: function (post, shop_id) {

                post.shop_id = shop_id;

                var allGoods = $localstorage.get('goods');

                allGoods.push(post);

                $localstorage.set('goods', allGoods);

            },
            setNewShop: function (newShopParams) {
                
                var shops = $localstorage.get('shops');
                var rand = 1 + Math.random() * (99999999 - 1);
                rand = Math.round(rand);
                var newShopData = newShopParams.shop;
                newShopData.id = rand;
                newShopData.lat = newShopParams.lat;
                newShopData.long = newShopParams.long;
                shops.unshift(newShopData);
                $localstorage.set('shops', shops);
            },
            editShop: function (shops) {
                $localstorage.set('shops', shops);
            },
            storageJsonValidation: function () {
                try {
                    $localstorage.get('shops');
                    $localstorage.get('goods');
                    return false;
                } catch (e) {
                    return true;
                }
            }
        }
        ;
    });
};