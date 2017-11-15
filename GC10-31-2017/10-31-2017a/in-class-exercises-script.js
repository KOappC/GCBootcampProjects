//first exercise- arrays and calling on items in them

var movies = ["Jurassic Park", "Harry Potter", "Demolition Man"];

function greetStudent() {
    console.log("Greetings, student");
}

var books = ["movies", "The Elephant Vanishes"];

var stuff = [
    "hello",
    movies,
    books,
    greetStudent
];

// strings- movies
console.log(stuff[1][2]);

// strings- books
console.log(stuff[2][1]);

// function- greet student
stuff[3]();

// length of array
console.log(stuff.length);

// example of .length use in a loop
for(var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}

// change values of items in arry
movies[1] = "Lost in Translation";

// add items to array
movies[3] = "The Life Aquatic";

// if adding items to index that doesn't exist, all index between will = undefined
movies[8] = "Bladerunner";

console.log(movies);



//second exercise- objects

var currentUser = {
    name: "Kyle",
    birthday: "July 31, 1987",
    "favorite-pie": "pecan pie"
};

console.log(currentUser.name);
console.log(currentUser.birthday);
console.log(currentUser["favorite-pie"]);

// delete entire property not just the value

delete currentUser["favorite-pie"];

console.log(currentUser);

// add a new property

currentUser.favoriteCoffee = "Brazil Cerrado";

console.log(currentUser);


//third exercise- methods

var foodList = ["pizza", "donuts", "cookies", "salad"];

// removing an item from a specified position, and how many to remove

foodList.splice(1, 1);
console.log(foodList);

// adding items in the middle of an array using .splice()

foodList.splice(2, 0, "burgers", "tacos", "falafel");
console.log(foodList);

//  using .length to remove a specified number of items from a specific point in the array based on it's total length

foodList.splice(foodList.length -2, 1);



// third exercise

var userList = ["Adam", "David", "Yasmine"];

// anonymous function method (better for local scope)

userList.forEach(function(name) {
    console.log(name);
});

userList.push("J-C");

// named function method (can be used globally)

userList.forEach(logUserName);

function logUserName(userName) {
    console.log(userName);
}



// fourth exercise

var userList = [
    { name: "Adam" },
    { name: "Yasmine" },
    { name: "David" }
];

userList.forEach(logUserName);

function logUserName(user) {
    console.log(user.name);
    user.human = true;
    console.log(user.human);
}