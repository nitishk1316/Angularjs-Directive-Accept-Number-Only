Angularjs Directive Accept Number Only
======================================

A angularjs directive which allows only numbers to be typed into a text box .


## FEATURES
--------

* Accepts only numbers.
* Accepts negative number.
* Accepts floating Number
* Control over Decimal Number - Add only numbers not floating number 
* Control over Negative Number - Can't add negative number
* Decimal place upto


## DEMO
--------

[Accept Number Only](http://www.nitishkumarsingh.com/demos/angular-directive-accept-number-only/).


## HOW TO USE
---------------
 
 ```
     just add "nks-only-number" and also include required parameter. 

     <input type="text" nks-only-number ng-model="mynumber" />

     <input type="text" nks-only-number ng-model="mynumber" decimal-upto="2" />

     <input type="text" nks-only-number ng-model="mynumber" decimal-upto="2" allow-negative="false" />

     <input type="text" nks-only-number ng-model="mynumber" allow-decimal="false" />
```


## PARAMETERS
---------------

* decimal-upto="2" //value will be number. -- Restrict decimal upto
* allow-negative="false" // if donot want negative number put false as value otherwise donot include it
* allow-decimal="false" // if donot want decimal number put false as value otherwise donot include it 



#### Directive Code
--------------------

```
    Add this directive in your application.
		
		app.directive('nksOnlyNumber', function () {
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

```

#### Next Version will include:
-----------------------------------

* Min-Max for number


 
