var typeOfEvent = prompt("What kind of event is it? (Casual, semi-formal, or formal?)").toLowerCase();
var temperature = prompt("What is the temperature outside? (As a number)").toLowerCase();

function event(type, temp) {
    if (type === "casual") {
        typeOfEvent = " you should wear something comfy";
    } else if (type === "semi-formal") {
        typeOfEvent = " you should wear a polo";
    } else if (type === "formal") {
        typeOfEvent = " you should wear a suit";
    }
    if (temp > 70) {
        temperature = " and no jacket";
    } else if (temp < 70 && temp > 54) {
        temperature = " and a jacket";
    } else if (temp < 54) {
        temperature = " and a coat";
    }
    console.log(typeOfEvent + temperature);
}

event(typeOfEvent, temperature);