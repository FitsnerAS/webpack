module.exports = function (myApp) {
    myApp.factory('$localstorage', function ($window,$filter) {
        return {
            set: function (key, value) {
                $window.localStorage[key] = JSON.stringify($filter('removeHash')(value));
            },
            get: function (key) {
                return JSON.parse($window.localStorage[key]);
            },
            del: function (key) {
                $window.localStorage.removeItem(key);
            }
        };
    });
};