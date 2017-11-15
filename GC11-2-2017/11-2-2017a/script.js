// exercise one

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

num.forEach(function(num) {
    console.log(num);
});

// exercise two

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

num.forEach(function(num) {
    if (num < 10) {
        console.log(num);
    };
});

// exercise three

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (var i = 0; i < num.length; i++) {
    console.log(i);
}

// exercise four

function hello(name) {
    console.log("Hello " + name);
}
hello("Kyle");

// exercise five

var names = [
    {
        name: "jim",
        age: 15
    },
    {
        name: "bob",
        age: 16
    }
];

names.forEach(function(person) {
    console.log(person.age);
});

// exercise six

var newP = document.createElement("p");
newP.innerText = "Cool";
document.body.appendChild(newP);

// exercise seven

function checkName(name) {
    if (name === "Snoopy") {
        console.log("Success");
    } else if (name !== "Snoopy") {
        console.log("sorry")
    }
}

checkName("Adam");

// exercise eleven

function checkClick() {
    var input = document.getElementsByTagName("input");
    var text = input[0].value;
    console.log(text);
}