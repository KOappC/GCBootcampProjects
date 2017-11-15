$(document).ready(function() {

    $("li").hover(function() {
        $(this).fadeTo(500, 0.25);
    }, function() {
        $(this).fadeTo(500, 1);
    });

    $("li").click(function() {
        $(this).css("background-color", "red");
        $(this).text("Clicked!");
    });

// Q:   How to get ^^ to come back to normal?    A:  "event parameter"


}); // Closing of document

/*
    //DONE  1.)  Your navigation should be in the form of an unordered list.
    //DONE  2.)  Style the list items so that they have a width of at least 200px and a height of at least 50px
    //DONE  3.)  Each <li> should fade to 0.25 opacity when the user hovers over it, and return to full opacity when they remove the cursor.
    //DONE  4.)  Each <li> should change background colors when clicked on.
    //DONE  5.)  When the user clicks on a <li> the word 'Clicked!' should appear inside it.
*/