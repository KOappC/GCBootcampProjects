(function() {
    function catController() {
        var vm = this;
    }

    angular
        .module("app")
        .controller("catController", catController);

    function dogController() {
        var vm = this;
    }

    angular
        .module("app")
        .controller("dogController", dogController);
})();