ng-color-utils
=================


Utils for manage color
- hex2rgba

<h4>Installing</h4>
```
bower install ng-color-utils
```
```javascript
angular('yourAngularApp',['ngColorUtils']);
```

<h4>Usage/Example</h4>
```javascript
app.controller('modalNotifyCtrl', ['$scope', 'hex2rgba', 'ngDialog', 'modalNotifyObj', function ($scope, hex2rgba, ngDialog, modalNotifyObj) {

    hex2rgba.get('#000000', 0.5);

}]);
```
