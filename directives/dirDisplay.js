var app = angular.module('directivePractice');


app.directive('dirDisplay', function(){
	return {
		templateUrl: 'directives/dirDisplayTemp.html',
		scope: {
			user: '=',
			setUser:'&'
		},
		link: function(scope, element, attributes){
			// console.log(scope);
			// console.log(element);
			// console.log(attributes);
			element.on('click', function(){
				scope.value = !scope.value;
				scope.setUser({user: scope.user});
				scope.$apply();

			});
		},

	};

});
