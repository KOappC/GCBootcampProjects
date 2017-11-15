(function() {
    function lunchTime() {
        return {
            restrict: "E",
            template: `
            <p>Eyyy I'm in a directive</p>
            <p> {{ list.name }} </p>
            <button type="button" ng-click="list.goToLunch()">Let's Eat!</button>
            `,
            replace: false
        };
    }

    angular
        .module("app")
        .directive("lunchTime", lunchTime);
})();