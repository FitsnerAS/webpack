module.exports = function(myApp){
    require('./removeHash/removeHash.js')(myApp);
    require('./startFrom/startFrom.js')(myApp);
};


