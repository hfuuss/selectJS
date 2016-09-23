(function(){


angular.module('ssngSelect', []).directive('ssngSelect', function(){

    return {
        restrict: 'A',
        scope:{},
        link: function(scope, element, attrs){

          scope.datas =  scope.$parent[attrs['ssngSelect']];
         
                     scope.openSlect = false; 
                                 
                                    
                     scope.callback = function(index,text){
                      scope.index = index+1;
                      scope.text = text;
                      alert("你选择了第"+scope.index+"个选项");
                                                           }
           
                                              },

        template: 
            '<span ng-click="openSlect=!openSlect" >请选择...</span>' +
            '<ul ng-show="openSlect">' +
            '<table><tr ng-repeat="item in datas"><td ng-click="callback($index,item.text)">{{ $index }}:{{ item.text }}</td></tr></table>'+
            '</ul>'

             };
                                                                    });

}());