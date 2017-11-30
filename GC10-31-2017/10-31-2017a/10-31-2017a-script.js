/*
class Person {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log("Nom Nom Nom!");
    }
    speak() {
        console.log(this.name + " says hello!");
    }
}

class Student extends Person {
    constructor (name) {
        super(name);
    }
    speak() {
        console.log("A friendly student named " + this.name + " says hello!");
    }

}

var kyle = new Student("Kyle");
console.log(kyle);
*/







// written as a class...get it?...as a class, things about class?...


class Student {
    constructor(body, name, age, shoes, family, pets) {
        this.body = body;
        this.name = name;
        this.age = age;
        this.shoes = shoes;
        this.family = family;
        this.pets = pets;
    }
    study() {
        console.log("Yay!  We're studying!");
        delete this.body;
    }
}

class FrontEndStudent extends Student {
    constructor(eyes, css, html, javascript, body, name, age, shoes, family, pets) {
        super(body, name, age, shoes, family, pets);
        this.eyes = eyes;
        this.css = css;
        this.html = html;
        this.javascript = javascript;
    }
    eatCandy() {
     console.log("You no longer have eyes.");
     delete this.eyes;
    }
}

var sherif = new FrontEndStudent(true, true, true, false, true, "Sherif", 30, "boots", false, false);
console.log(sherif);


var christianS = new Student(true, "Christian", 22, "Nike", true, true);
console.log(christianS);
var kyle = new Student(true, "Kyle", 30, "Adidas", true, true);
console.log(kyle);

