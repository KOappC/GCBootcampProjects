(function() {
    function DogController() {
        var vm = this;
        vm.name = "doge";
        vm.changeName = function(newName) {
            vm.name = newName;
        }
    }

    angular
        .module("app")
        .controller("DogController", DogController);

    function CatController() {
        var vm = this;
        vm.name = "kitty";
        vm.changeName = function(newName) {
            vm.name = newName;
        }
    }

    angular
        .module("app")
        .controller("CatController", CatController);
})();



/*
(function() {
    function nameCtrl(nameService) {
        var vm = this;
        vm.name = "Kyle";
        vm.newInfo = "Old String";
        vm.redditJSON = [];
        vm.changeName = function(newName) {
            vm.name = newName;
            vm.newName = "";
            nameService.setName(vm.name);
        };
        vm.retrieveName = function() {
            vm.newInfo = nameService.getName();
        };
        vm.redditInformation = function() {
            nameService.makeRequest().then(function(info) {
                var placeholder = info;
                vm.redditJSON = placeholder.data.children;
            });
        };
        /!*vm.getRedditStuff = function() {
            var placeholder = redditJSON = nameService.returnRequest();
            vm.redditJSON = placeholder.data.children;
            console.log(redditJSON.data.children);
        };*!/

    }


    angular
        .module("app")
        .controller("nameCtrl", nameCtrl);
})();*/
