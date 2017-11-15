function collect() {
    var inputs = document.querySelectorAll("input");
    var userObj = {
        name: inputs[0].value,
        email: inputs[1].value,
        address: inputs[2].value,
        city: inputs[3].value,
        state: inputs[4].value
    };

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";

    }
    console.log(userObj);

}






