(function() {
    function favBandsController() {
        var vm = this;
        vm.namesOfBands = ["Purity Ring", "Papertwin", "Negative Gemini", "Yung Lean", "Bladee", "Neon Indian"];
        vm.addBand = function(index) {
            vm.namesOfBands.push(index);

        }
    }

    angular
        .module("favBands")
        .controller("favBandsController", favBandsController);
})();