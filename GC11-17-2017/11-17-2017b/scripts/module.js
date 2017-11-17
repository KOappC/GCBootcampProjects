(function() {
    angular
        .module("app",["ngRoute"])
        .config(function($routeProvider) {
            $routeProvider
                .when("/cat", {
                    templateUrl: "./partials/cat.html",
                    controller: "catController"
                })
                .when("/dog", {
                    templateUrl: "./partials/dog.html",
                    controller: "dogController"
                })
        });
})();