var app = angular.module('directivePractice');


app.directive('dirDisplay', function(){
	return {
		templateUrl: 'directives/dirDisplayTemp.html',
		link: function(scope, element, attributes){
			// console.log(scope);
			// console.log(element);
			// console.log(attributes);
			element.on('click', function(){
				scope.value = !scope.value;
				scope.$apply();

			});
		}
	};

});
