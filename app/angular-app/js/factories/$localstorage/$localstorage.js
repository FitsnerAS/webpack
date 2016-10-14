module.exports = function (myApp) {
    myApp.factory('$localstorage', function ($window) {
        return {
            set: function (key, value) {
                $window.localStorage[key] = value;
            },
            get: function (key) {
                return $window.localStorage[key];
            },
            del: function (key) {
                $window.localStorage.removeItem(key);
            }
        };
    });
};