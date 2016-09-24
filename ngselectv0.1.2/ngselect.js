(function() {


    angular.module('ssngSelect', []).directive('ssngSelect', function() {

        return {
          restrict: 'A',
          scope: {},
          link: function(scope, element, attrs) {

            scope.datas = scope.$parent[attrs['ssngSelect']];

            scope.openSlecte = false;


            scope.callback = function(index, text) {

            
            scope.index = index + 1;
            scope.text = text;
            alert("你选择了第" + scope.index + "个选项");
            }

           },

        template:
          '<span ng-click="openSlecte=!openSlecte" >请选择...</span>' +
          '<ul ng-show="openSlect">' +
          '<table><tr ng-repeat="item in datas"><td ng-click="callback($index,item)">{{ $index }}:{{ item }}</td></tr></table>' +
          '</ul>'

      };
    });

}());