'use strict';

var myApp = angular.module('myApp', []);

angular.module('myApp', []).directive('ngSelect', [
  '$arr',
  '$callback',
  function ($arr, $callback) {
    return {
      restrict: 'A', //A 作为属性名使用
      replace: true,
      transclude: true,
      template: '<span ng-click="openSlect=!openSlect" >请选择...</span>' +
    				'<ul ng-show="openSlect" ng-repeat="item in $arr">' +
      				'<li ng-click="$callback(item.index,item.text)">{{item}}</li>' +
      				'</ul>'
    ,
    };
  }
]);

myApp.controller('showHideController', function ($scope){

	 $scope.items = [
    {index: 1, text: 'desc001'},
    {index: 2, text: 'desc002'},
    {index: 3, text: 'desc003'},        
]

	$scope.openSlect = false;	

	$scope.$callback = function(index,text){
		$scope.index = index;
		$scope.text = text;
	}
});