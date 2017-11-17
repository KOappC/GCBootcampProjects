(function() {
    angular
        .module("app", ["ngRoute"])
        .config(function($routeProvider) {
            $routeProvider
                .when("./form", {
                    templateUrl: "./partials/form.html",
                    controller: "formController"
                })
                .when("./display", {
                    templateUrl: "./partials/display.html",
                    controller: "madLibsController"
                })
        });
})();