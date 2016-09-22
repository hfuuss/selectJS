var maApp = angular.module('app', []);

maApp.directive('ssngSelect', function(){

    return {
        restrict: 'E',
        scope: {
            items: '=',
            callback: '='
        },
        link: function($scope, element, attrs){
           
        },

        template: '<span ng-click="openSlect=!openSlect" >请选择...</span>' +
            '<ul ng-show="openSlect">' +
            '<table><tr ng-repeat="item in items"><td ng-click="callback(item.index,item.text)">{{ item.index }}:{{ item.text }}</td></tr></table>'+
            '</ul>'
    };
});


maApp.controller('DemoCtrl', function($scope){

 $scope.items = [
    {index: 1, text: 'desc001'},
    {index: 2, text: 'desc002'},
    {index: 3, text: 'desc003'},        
];

  $scope.openSlect = false; 

  $scope.callback = function(index,text){
    $scope.index = index;
    $scope.text = text;
    alert(index);
  }

});