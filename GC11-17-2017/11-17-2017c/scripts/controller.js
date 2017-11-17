(function() {
    function displayController() {
        var vm = this;

    }

    angular
        .module("app")
        .controller("displayController", displayController);

    function formController() {
        var vm = this;
        vm.chooseTime = function(timeOfDay) {
        };
        vm.choosePet = function(typeOfPet) {
        };
        vm.chooseItem = function(nonFood) {
        };
        vm.chooseFood = function(typeOfFood) {
        };
        vm.chooseMorningAction = function(morningAction) {
        };
        vm.chooseRoom = function(roomInHouse) {
        };
        vm.choosePetAction = function(petAction) {
        };
    }

    angular
        .module("app")
        .controller("formController", formController);
})();