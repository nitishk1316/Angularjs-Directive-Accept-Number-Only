
angular.module('mainApp', [])
  .directive('nksOnlyNumber', function () {
    return {
      restrict: 'EA',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {   
           scope.$watch(attrs.ngModel, function(newValue, oldValue) {
              var spiltArray = String(newValue).split("");
              
              if(attrs.allowNegative == "false") {
                if(spiltArray[0] == '-') {
                  newValue = newValue.replace("-", "");
                  ngModel.$setViewValue(newValue);
                  ngModel.$render();
                }
              }

              if(attrs.allowDecimal == "false") {
                  newValue = parseInt(newValue);
                  ngModel.$setViewValue(newValue);
                  ngModel.$render();
              }

              if(attrs.allowDecimal != "false") {
                if(attrs.decimalUpto) {
                   var n = String(newValue).split(".");
                   if(n[1]) {
                      var n2 = n[1].slice(0, attrs.decimalUpto);
                      newValue = [n[0], n2].join(".");
                      ngModel.$setViewValue(newValue);
                      ngModel.$render();
                   }
                }
              }
              
              if (attrs.min && !isNaN(attrs.min) && newValue) {
                if (newValue < attrs.min) {
                  ngModel.$setValidity("min", false);
                } else {
                  ngModel.$setValidity("min", true);
                }
              } else {
                ngModel.$setValidity("min", true);
              }

              if (attrs.max && !isNaN(attrs.max) && newValue) {
                if (newValue > attrs.max) {
                  ngModel.$setValidity("max", false);
                } else {
                  ngModel.$setValidity("max", true);
                }
              } else {
                ngModel.$setValidity("max", true);
              }
             
              if (spiltArray.length === 0) return;
              if (spiltArray.length === 1 && (spiltArray[0] == '-' || spiltArray[0] === '.' )) return;
              if (spiltArray.length === 2 && newValue === '-.') return;
              
                /*Check it is number or not.*/
                if (isNaN(newValue)) {
                  ngModel.$setViewValue(oldValue || '');
                  ngModel.$render();
                }
            });
        }
    };
});
