module.exports = function(myApp){
    require('./shopsCatManagementFactory/shopsCatManagementFactory.js')(myApp);
    require('./$localstorage/$localstorage.js')(myApp);
};


