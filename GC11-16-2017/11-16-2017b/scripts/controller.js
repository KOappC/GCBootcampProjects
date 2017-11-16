(function() {
    function appController() {
        var vm = this;
        vm.randoSelection = null;
        vm.randoSelectionColor = null;
        vm.words = ["bake", "deadly", "confine", "dirty", "love", "pain", "hear", "absolute", "sodium", "dribble", "conscious", "vision", "exposure"];
        vm.phrase = ["beat a dead horse", "go for broke", "birds of a feather, flock together", "cry wolf", "cut to the chase", "lickety split", "right out of the gate", "what goes up, must come down"];
        vm.backgroundColors = ["blue", "red", "yellow", "pink", "purple", "orange", "green", "grey"];
        vm.addWords = function() {
            var randoWord = vm.words[Math.floor(Math.random() * vm.words.length)];
            vm.randoSelection = randoWord;
        };
        vm.addPhrase = function() {
            var randoPhrase = vm.phrase[Math.floor(Math.random() * vm.phrase.length)];
            vm.randoSelection = randoPhrase;

        };
        vm.decoWords = function() {
            var randoColorWords = vm.backgroundColors[Math.floor(Math.random() * vm.backgroundColors.length)];
            vm.randoSelectionColor = randoColorWords;
            console.log(randoColorWords);

        };
        vm.decoPhrase = function() {
            var randoColorPhrase = vm.backgroundColors[Math.floor(Math.random() * vm.backgroundColors.length)];
            vm.randoSelectionColor = randoColorPhrase;
            console.log(randoColorPhrase);

        };


    }

    angular
        .module("app")
        .controller("appController", appController)
})();