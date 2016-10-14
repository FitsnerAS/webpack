var angular = require('angular');
var jQuery = require('jquery');
require('bootstrap/dist/js/bootstrap.js');
require('bootstrap/dist/css/bootstrap.min.css');
require('html5-boilerplate/dist/css/normalize.css');
require('html5-boilerplate/dist/css/main.css');
require('./assets/css/app.css');
require('./assets/css/shop-homepage.css');
require('angular-drag-and-drop-lists');
require('angular-ui-bootstrap');
require('angular-ui-router');
require('ngmap');
require('angular-toastr');
require('font-awesome/css/font-awesome.css');

var myApp = angular.module('myApp', [
    'ui.router',
    'ui.bootstrap',
    'ngMap',
    'dndLists',
    'toastr'
]);

require('./angular-app/js/config/app.js')(myApp);
require('./angular-app/js/controllers/index.js')(myApp);
require('./angular-app/js/directives/index.js')(myApp);
require('./angular-app/js/factories/index.js')(myApp);
require('./angular-app/js/filters/index.js')(myApp);


