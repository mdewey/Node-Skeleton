var app = angular.module("homeApp", []);


app.controller("homeController", function($scope) {
	$scope.Loading = false;
	$scope.Error = false;
	$scope.ErrorMessages = [];
});