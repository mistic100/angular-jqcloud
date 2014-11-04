/*!
 * Angular jQCloud
 * For jQCloud 2 (https://github.com/mistic100/jQCloud) 
 * Copyright 2014 Damien "Mistic" Sorel (http://www.strangeplanet.fr)
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

angular.module('angular-jqcloud', []).directive('jqcloud', ['$parse', '$timeout', function($parse, $timeout) {
  // get existing options
  var defaults = jQuery.fn.jQCloud.defaults.get(),
      jqcOptions = [];
  
  for (var opt in defaults) {
    if (defaults.hasOwnProperty(opt)) {
      jqcOptions.push(opt);
    }
  }
  
  return {
    restrict: 'E',
    template: '<div></div>',
    replace: true,
    scope: {
      words: '=words'
    },
    link: function($scope, $elem, $attr) {
      var options = {};
      
      for (var i=0, l=jqcOptions.length; i<l; i++) {
        var opt = jqcOptions[i];
        if ($attr[opt]!=undefined) {
          options[opt] = $parse($attr[opt])();
        }
      }
      
      $elem.jQCloud($scope.words, options);
      
      $scope.$watch('words', function() {
        if ($scope.words !== undefined)
        $timeout(function() {
          $elem.jQCloud('update', $scope.words);
        }, 0);
      });
    
      $elem.bind('$destroy', function() {
        $elem.jQCloud('destroy');
      });
    }
  };
}]);