var myObj = {
    name: "Kyle",
    age: "30",
    favFood: "sweet potato",
    hello: function() {
        console.log("Yo!");
    }
};

var francisco = {
    name : "Francisco",
    age: 25,
    favFood: "strawberries",
    hello: function() {
        console.log("Sup");
    }
};

module.exports.friend = francisco;
module.exports.me = myObj;