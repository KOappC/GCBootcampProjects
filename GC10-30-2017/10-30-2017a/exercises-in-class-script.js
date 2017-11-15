// first exercise

function doThings(first) {
    var otherThings = function(second) {
        return second + " and " + first + ".";
    }
    return otherThings;
}

var fruit = doThings("apples");
console.log(fruit("pears"));

var vege = doThings("carrots");
console.log(vege("peas"));

var drinks = doThings("beer");
console.log(drinks("wine"));


// second exercise

function makeCounter(start) {
    return function() {
        console.log(start);
        start++;
    }
}

var counterA = makeCounter(0);
var counterB = makeCounter(5);

counterA();
counterA();
counterB();
counterB();
counterA();
