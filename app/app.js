var app = angular.module('directivePractice', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider
		.when('/home', {
			templateUrl: 'app/homeTemp.html',
			controller: 'homeCtrl'
		})
		.otherwise({
			redirectTo: '/home'
		})

});

