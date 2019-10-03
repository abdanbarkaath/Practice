// $("button").mouseenter(function(){
//     $("h1").toggle();
// });

// $("button").click(function(){
//     $("div").animate({left:250},"slow")
// });

// $("button").click(function(){
//     $("h1").text("Text Changed");
//     $("p").append(" appending new text")
// })

// $("button").click(function(){
//     var p1 = "<p>New P Tag added</p>"
//     $("p").text("hahah");
//     $("body").append(p1);
// })

$("button").click(function(){
    $("h1").before("<p>lol</p>");
})