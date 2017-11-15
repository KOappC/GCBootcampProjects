var bands = {
    names: ["Purity Ring", "Neon Indian", "Labrynth Ear", "Negative Gemini"]
};

var ul = document.createElement("ul");
ul.className = "bandInfo";
ul.style.border = "10px dashed orange";
ul.style.textAlign = "center";

document.body.appendChild(ul);

bands.names.forEach(function(items) {
    var li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = items;
    li.style.fontSize = "20px";
});






/*

Exercise 1

//DONE  1.) put a list of band names from your .js file onto the page
//DONE  2.) give the list a border with the color orange, 10px, and dashed
//DONE  3.) give the font a size of 20px
//DONE  4.) center the text

 */







/*

        SEARCH FOR THINGS IN THE DOM


// gets title of the document

console.log(document.title);

// gets img tags on the page

console.log(document.getElementsByTagName("img")[1]);

// find number of <p> tags

console.log(document.getElementsByTagName("p").length);

// find number of <link> tags

console.log(document.getElementsByTagName("a").length);

// innerHTML of the first <link>

console.log(document.getElementsByTagName("a")[0].innerHTML);

// find date and time last updated

console.log(document.lastModified);

*/