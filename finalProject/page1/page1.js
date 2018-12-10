var audio = new Audio('/finalProject/animals/dogBark.wav');/*making the audio file a variable*/

/*when person clicks on image, svg is displayed and visible, audio plays, and svg visibility turned off at approximated time of finish of audio*/
$(".dog").click(function () {
    $(".svg").css("visibility", "visible");
    audio.play();
    setTimeout(function () {
        $(".svg").css("visibility", "hidden")
    }, 500);
});
