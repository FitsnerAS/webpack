module.exports = function (myApp) {
    myApp.directive('appFooter', function () {
        return {
            restrict: 'E',
            templateUrl: 'angular-app/tmpl/footer.html'
        };
    });
};

