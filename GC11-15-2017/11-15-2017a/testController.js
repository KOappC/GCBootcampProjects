(function() {
    function testController() {
        var vm = this;
        vm.name = "Kyle";
        vm.favFood = "sweet potato fries";
    }

    angular
        .module("app")
        .controller("testController", testController);
})();