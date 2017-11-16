(function() {
    var buttonComponent = {
        controller: "appController",
        template: `
            <button type="button" ng-click="$ctrl.addWords()">add word</button>
            <button type="button" ng-click="$ctrl.addPhrase()">add phrase</button>
            <button type="button" ng-click="$ctrl.addWords() + $ctrl.decoWords()">add fancy word</button>
            <button type="button" ng-click="$ctrl.addPhrase() + $ctrl.decoPhrase()">add fancy phrase</button>
            <p> {{ $ctrl.randoSelection }} </p>
        `
    };




    angular
        .module("app")
        .component("buttonComponent", buttonComponent)
})();