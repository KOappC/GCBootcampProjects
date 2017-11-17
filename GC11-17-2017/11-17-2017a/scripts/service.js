(function() {

        // factory method
    function nameService($http) {
        var name = "";
        var redditData = {};
        return {
            setName: setName,
            getName: getName,
            makeRequest: makeRequest
        };

        /*function returnRequest() {
            return redditData;
        }*/


        function makeRequest() {
            return $http({
                method: "GET",
                url: "https://www.reddit.com/r/aww.json"
            }).then(function(response) {
                redditData = response.data;
                console.log(redditData);
                return redditData;
            })

            /*$http({
                method: "GET",
                url: "https://www.reddit.com/r/aww.json"
            }).then(function(response) {
                redditData = response.data;
                console.log(redditData);
                return redditData;
            })*/
        }

        function setName(newName) {
            name = newName;
        }

        function getName() {
            return name;
        }


    }


    /*
        // service method
    function nameService() {
        var name = "";
        this.setName = function(newName) {
            name = newName;
            console.log(name);
        };

        this.getName = function() {
            return name;
        };

    }*/


    angular
        .module("app")
        .service("nameService", nameService);
})();