# AngularJS jQCloud

[![Bower version](https://badge.fury.io/bo/angular-jqcloud.svg)](http://badge.fury.io/bo/angular-jqcloud)

Simple AngularJS directive for [jQCloud](https://github.com/mistic100/jQCloud), a beautiful words cloud generator.

## Usage

```html
<jqcloud words="words" width="500" height="350" steps="7"></jqcloud>

<script>
  var app = angular.module('app', [
    'angular-jqcloud'
  ]);

  app.controller('controller', function($scope) {
    $scope.words = [/* ... */];
  });
</script>
```

Consult [jQCloud documentation](http://mistic100.github.io/jQCloud) for full options.
