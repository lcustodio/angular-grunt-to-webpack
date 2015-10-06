/*jshint browser:true */
'use strict';

require('./vendor.js')();

//Define the application
var appModule = require('./app');
console.log(appModule.name);

//require('../index.html');
require('../styles/main.scss');

require('./controllers/about');
require('./controllers/main');
require('./suggestion/suggestion.module');
require('./suggestion/suggestion.directive');


//if (MODE.production) { // jshint ignore:line
//    require('./config/production')(appModule);
//}

angular.element(document).ready(function() {
    angular.bootstrap(document, [appModule.name]);
});