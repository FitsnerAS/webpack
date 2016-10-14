module.exports = function (myApp) {
    myApp.directive('appHeader', function () {
        return {
            restrict: 'E',
            templateUrl: 'angular-app/tmpl/header.html'
        };
    });
};
