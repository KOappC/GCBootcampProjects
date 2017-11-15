(function() {
    function ListController() {
        var vm = this;
        vm.name = "Kyle";
        vm.food = ["donuts", "tacos", "nachos", "pizza", "steak", "brussel sprouts", "sweet potato"];
        vm.goToLunch = function() {
            vm.name = "Let's go eat!";
        };

    }


    angular
        .module("app")
        .controller("ListControler", ListController);

})();