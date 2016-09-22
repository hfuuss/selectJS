(function(){
var maApp = angular.module('app', []);

maApp.directive('ssngSelect', function(){

    return {
        restrict: 'A',

        link: function(scope, element, attrs){

          
                
                     scope.openSlect = false; 

                     scope.items = items;

                     console.log(items[0]);
                  
                  
                     scope.callback = function(index,text){
                      scope.index = index;
                      scope.text = text;
                      alert(index);
                    }
           
        },

        template: '<span ng-click="openSlect=!openSlect" >请选择...</span>' +
            '<ul ng-show="openSlect">' +
            '<table><tr ng-repeat="item in items"><td ng-click="callback(item.index,item.text)">{{ item.index }}:{{ item.text }}</td></tr></table>'+
            '</ul>'
    };
});


maApp.controller('DemoCtrl', function($scope){

 // $scope.items = items;

});

}());