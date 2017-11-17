(function() {
    angular
        .module("app", ["ngRoute"])
        .config(function($routeProvider) {
            $routeProvider
                .when("/cat", {
                    template: `
                    <p>{{ cat.name }}</p>
                    <input ng-model="cat.newName">
                    <button type="button" ng-click="cat.changeName(cat.newName);">Change the cat's name</button>
                    `,
                    controller: "CatController as cat"
                })
                .when("/dog", {
                    template: `
                    <p>{{ dog.name }}</p>
                    <input ng-model="dog.newName">
                    <button type="button" ng-click="dog.changeName(dog.newName);">Change the dog's name</button>
                    `,
                    controller: "DogController as dog"
                })
        });
})();