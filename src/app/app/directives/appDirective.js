(function () {
	'use strict';
	var appDirective = function () {
		return {
			restrict: 'E',
			templateUrl: 'app/view/home.ejs',
			scope: {},
			controller: 'appController',
			controllerAs: 'appController'
		};
	};

	angular
		.module('myApp')
		.directive('app', appDirective)
		.controller('appController', function() {
		 console.log('toto');
		});
}());
