(function() {

    function helloWorld() {
        return{
          restrict: "A",
          templateUrl: "./hello-world.html",
          /*template: `
          <div class="container new-div">
           <div id="header">
                <div class="nav">
                    <div class="nav-item active"><a href="/home">Home</a></div>
                    <div class="nav-item"><a href="/about">About</a></div>
                    <div class="nav-item"><a href="/register">Register</a></div>
                    <div class="nav-item"><a href="/settings">Settings</a></div>
                </div>
            </div>
           </div>
            `,*/
          replace: false
        }
    }

    angular
        .module("app")
        .directive("helloWorld", helloWorld)
})();