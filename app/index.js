import angular from 'angular';
import jQuery from 'jquery';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'html5-boilerplate/dist/css/normalize.css';
import 'html5-boilerplate/dist/css/main.css';
import './assets/css/app.css';
import './assets/css/shop-homepage.css';
import 'angular-drag-and-drop-lists';
import 'angular-ui-bootstrap';
import 'angular-ui-router';
import 'ngmap';
import 'angular-toastr/dist/angular-toastr.tpls.js';
import 'angular-toastr/dist/angular-toastr.css';
import 'font-awesome/css/font-awesome.css';

var myApp = angular.module('myApp', [
    'ui.router',
    'ui.bootstrap',
    'ngMap',
    'dndLists',
    'toastr'
]);

require('./angular-app/js/factories/index.js')(myApp);
require('./angular-app/js/config/app.js')(myApp);
require('./angular-app/js/controllers/index.js')(myApp);
require('./angular-app/js/directives/index.js')(myApp);
require('./angular-app/js/filters/index.js')(myApp);


