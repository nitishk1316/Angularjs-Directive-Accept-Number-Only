Angularjs Directive Accept Number Only
======================================

A angularjs directive which allows only numbers to be typed into a text box .


## FEATURES
--------

* Accepts only numbers.
* Accepts negative number.
* Accepts floating Number


## DEMO
--------

[Accept Number Only](http://demos.nitishkumarsingh.com/angular-directive-accept-number-only/).


## HOW TO USE
---------------
 
 ```
     just add "nks-only-number". 
     <input type="text" nks-only-number ng-model="mynumber"/>
```

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
* Control over Decimal Number - Add only numbers not floating number 
* Control over Negative Number - Can't add negative number


 
