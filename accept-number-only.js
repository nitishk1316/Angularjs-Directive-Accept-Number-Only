
angular.module('mainApp', [])
  .directive('nksOnlyNumber', function () {
    return {
      restrict: 'EA',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {   
          scope.$watch(attrs.ngModel, function(newValue, oldValue) {
              var spiltArray = String(newValue).split("");
                if (spiltArray.length === 0) return;
                if (spiltArray.length === 1 && (spiltArray[0] == '-' || spiltArray[0] === '.' )) return;
                if (spiltArray.length === 2 && newValue === '-.') return;
               
                /*Check it is number or not.*/
                if (isNaN(newValue)) {
                  ngModel.$setViewValue(oldValue);
                  ngModel.$render();
                }
            });
        }
    };
});