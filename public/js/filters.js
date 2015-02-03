angular.module('hs.filters', []).filter('startFrom', function() {
    return function(input, start) {
        if (!input) {
            return;
        }
        start = +start; //parse to int
        return input.slice(start);
    }
}).filter('min', function() {
    return function(numOne, numTwo) {
      return Math.min(+numOne, +numTwo);
    }
});