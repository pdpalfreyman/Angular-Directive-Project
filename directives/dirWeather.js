var app = angular.module('directivePractice');


app.directive('dirWeather', function(){
	return {
		templateUrl: 'directives/dirWeatherTemp.html',
		scope: {
 			currentUser: '=',
 			weatherCall: '&'
 		},
 		controller: function($scope){
 			$scope.$watch('currentUser', function(){
				$scope.weatherCall({ city: $scope.currentUser.city }).then(function(results){
 					$scope.newWeather = results;
 					// console.log(results)
 				});
 			});
		}
	}
});