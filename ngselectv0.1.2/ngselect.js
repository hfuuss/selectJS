(function(){
var maApp = angular.module('app', []);

maApp.directive('ssngSelect', function(){

    return {
        restrict: 'A',

        link: function(scope, element, attrs){

          scope.datas =  scope[attrs['ssngSelect']];
         
                     scope.openSlect = false; 
                                 
                                    
                     scope.callback = function(index,text){
                      scope.index = index;
                      scope.text = text;
                      alert(index);
                    }
           
        },

        template: '<span ng-click="openSlect=!openSlect" >请选择...</span>' +
            '<ul ng-show="openSlect">' +
            '<table><tr ng-repeat="item in datas"><td ng-click="callback(item.index,item.text)">{{ item.index }}:{{ item.text }}</td></tr></table>'+
            '</ul>'
    };
});


maApp.controller('DemoCtrl', function($scope){

  $scope.items = items;


});


maApp.controller('DemoCtrl2', function($scope){


  $scope.items2 = items2;

});
}());