var app = angular.module('directivePractice');

app.service('weatherService', function($http, $q){

	this.getWeather = function(city){
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url:'http://api.openweathermap.org/data/2.5/weather?q=' + city
		}).then(function(results){
			console.log(results)
			var tempKelv = results.data.main.temp
			var newWeather = {};
			newWeather.description =results.data.weather[0].description
			newWeather.temp = ((tempKelv - 273)*9/5) + 32
			console.log(newWeather)
		})
		return deferred.promise;
	};

});