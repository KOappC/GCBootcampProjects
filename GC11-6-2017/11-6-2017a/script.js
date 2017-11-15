$(document).ready(function(){

/*var myName = $("p");
console.log(myName);


myName.text("Hello friend.  I changed!");

console.log(myName.text());

if (myName.text() === "Hell friend.  I changed!") {
    alert("yes this condition passes");
}



myName
    .css("color", "red")
    .css("font-size", "40px")
    .css("background-color", "green");

myName.attr("first-name", "kyle")
    .attr("favorite-food", "kale and sweet potatoes");


$("p").hide().fadeIn(3000).fadeOut(3000);*/


$(".container").html(`
    <p>Hello Kim</p>
    <div>
        <p>It is almost lunchtime</p>
    </div>
`);

$(".container").before("<p>jQuery is amazing</p>");

$(".container").after("<p>jQuery is still amazing</p>");

/*$(".container").toggleClass("container");*/

$("button").on("click", function() {
    $(".container").slideUp(5000).delay(1000).slideDown(5000);
});



}); // Closing of document