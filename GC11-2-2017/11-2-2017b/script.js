function addItem() {
    var input = document.querySelectorAll("input");
    var userObj = {
        "item name": input[0].value,
        "item price": input[1].value
    };

    for (var i = 0; i < input.length; i++) {
        input[i].value = "";

    }
    var itemName = document.getElementById("itemName");
    itemName.innerText = userObj["item name"];
    var itemPrice = document.getElementById("itemPrice");
    itemPrice.innerText = userObj["item price"];

}





/*

//DONE  1. Set up a basic HTML page.
//DONE  2. Append the items and their prices from the shopping cart to the page.
3. Show the total somewhere on the page.
4. You can and should still use CSS  les to style the
list.

 */