$(document).ready(function () {

$("button").on("click", function(event) {
    $("p").append("You touched the butt-on! ");
    console.log(event.target);
});

}); // Closing of document