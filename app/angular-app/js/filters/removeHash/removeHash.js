module.exports = function (myApp) {
    myApp.filter('removeHash', function () {
        return function (arr) {
            for (var i = 0; i < arr.length; i++) {
                delete arr[i].$$hashKey;
            }
            return arr;
        };
    });
};