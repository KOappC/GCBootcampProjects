$(document).ready(function () {
    //3b57aebcf8eb6473


    $("button").on("click", function() {
        var sub = $("#subReddit").val();
        $.get("https://www.reddit.com/r/" + sub + ".json").done(function(data) {
            var postArray = data.data.children;
            postArray.forEach(function(post) {
                //console.log(post);
                $(".responseReddit").append(`
                    <div>
                    <h4>` + post.data.title + `</h4>
                    <p>` + post.data.author + `</p>
                    <img src="` + post.data.thumbnail + `"/>
                    </div>`
                );
            });
        });
    });

}); // Closing of document