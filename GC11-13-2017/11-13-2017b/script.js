$(document).ready(function() {
    //3b57aebcf8eb6473

    $("button").on("click", function() {
        var nameOfState = $("#state").val();
        var nameOfCity = $("#city").val();
        $.get("http://api.wunderground.com/api/3b57aebcf8eb6473/conditions/q/" + nameOfState + "/" + nameOfCity + ".json").done(function(response) {
            console.log(response);
            $("body").append(response);
        });
        $.get("http://api.wunderground.com/api/3b57aebcf8eb6473/satellite/q/" + nameOfState + "/" + nameOfCity + ".json").done(function(response) {
            $("body").append(response);
        });
        $.get("http://api.wunderground.com/api/3b57aebcf8eb6473/hourly/q/" + nameOfState + "/" + nameOfCity + ".json").done(function(response) {
            $("body").append(response);
        });
    });





}); // Closing of document