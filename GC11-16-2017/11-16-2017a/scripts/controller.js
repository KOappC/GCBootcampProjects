(function() {
    function TestController() {
        var vm = this;
        vm.name = "Baby Cat and Kiki";
        vm.bestLanguageEver = "JavaScript";
        vm.sayHello = function() {
            console.log("Hello");
        };
    }


    angular
        .module("app")
        .controller("TestController", TestController);
})();