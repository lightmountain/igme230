/*the same as page 1 but used on all images and svgs*/

let roosterAudio = new Audio('/finalProject/animals/rooster.wav');
$(".roosterImg").click(function () {
    $(".roosterSvg").css("visibility", "visible");
    roosterAudio.play();
    setTimeout(function () {
        $(".roosterSvg").css("visibility", "hidden")
    }, 2250);
});

let catAudio = new Audio('/finalProject/animals/catMeow.wav');
$(".catImg").click(function () {
    $(".catSvg").css("visibility", "visible");
    catAudio.play();
    setTimeout(function () {
        $(".catSvg").css("visibility", "hidden")
    }, 1000);
});

let monkeyAudio = new Audio('/finalProject/animals/monkey.wav');
$(".monkeyImg").click(function () {
    $(".monkeySvg").css("visibility", "visible");
    monkeyAudio.play();
    setTimeout(function () {
        $(".monkeySvg").css("visibility", "hidden")
    }, 1000);
});

let bearAudio = new Audio('/finalProject/animals/bearRoar.mp3');
$(".bearImg").click(function () {
    $(".bearSvg").css("visibility", "visible");
    bearAudio.play();
    setTimeout(function () {
        $(".bearSvg").css("visibility", "hidden")
    }, 1250);
});

let pigAudio = new Audio('/finalProject/animals/pigOink.wav');
$(".pigImg").click(function () {
    $(".pigSvg").css("visibility", "visible");
    pigAudio.play();
    setTimeout(function () {
        $(".pigSvg").css("visibility", "hidden")
    }, 900);
});
