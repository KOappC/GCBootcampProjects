(function() {
    var testComponent = {
        controller: "TestController",
        template: `
        <h1>Yooo</h1>
        <p>This is a template.</p>
        <p>I am going to go home and feed {{ $ctrl.name }}</p>
        <button type="button" ng-click="$ctrl.sayHello();">Click Me!</button>
        `
    };


    angular
        .module("app")
        .component("testComponent", testComponent);
})();