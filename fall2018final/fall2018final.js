let menu1 = $(".top:first");
let menu2 = $(".top").next();
let menu3 = $(".top").next().next();

let sub1 = $(".list:first");
let sub2 = $(".list:first").next();
let sub3 = $(".list:first").next().next();

$(".list").hide();

menu1.click(function () {
            sub1.slideToggle("slow");
        });

menu2.click(function () {
            sub2.slideToggle("slow");
        });

menu3.click(function () {
            sub3.slideToggle("slow");
        });
$("input").value("article1.txt").click(function() {

})
