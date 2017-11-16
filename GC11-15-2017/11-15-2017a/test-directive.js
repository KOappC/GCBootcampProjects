(function() {
    function testDirective() {
        return {
          restrict: "A",
          link: function($scope, $element, $attrs) {
              $element.on("click", function() {
                  $scope.$apply(function() {
                      $scope.test.favFood = "pizza";
                  });
              });
              $element.on("mouseover", function() {
                  $element.css("font-family", "monospace").css("color", "pink");
              });
              $element.on("mouseleave", function() {
                  $element.css("font-family", "papyrus").css("color", "black");
              });
          }
        };
    }


    angular
        .module("app")
        .directive("testDirective", testDirective);

})();