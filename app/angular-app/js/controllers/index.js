module.exports = function(myApp){
    require('./AppBodyCtrl/AppBodyCtrl.js')(myApp);
    require('./GoodsCtrl/GoodsCtrl.js')(myApp);
    require('./NewShopCtrl/NewShopCtrl.js')(myApp);
    require('./ShopsCtrl/ShopsCtrl.js')(myApp);
};

