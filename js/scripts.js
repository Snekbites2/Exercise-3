var on = false;
var i = 0;
var c = 0;
const dialogue = [];
dialogue[i++]= "Hello";
dialogue[i++]= "I'm dog";
dialogue[i++]= "I wave around";
dialogue[i++]= "I can dance";
dialogue[i++]= "I talk alot";
dialogue[i++]= "Even if I'm dog";
dialogue[i++]= "Nice to meet you";
dialogue[i++]= "I come from ground";
dialogue[i++]= "I want meat";
dialogue[i++]= "I'm in box";
dialogue[i++]= "I'm hotdog";
dialogue[i++]= "Dinner pls";
dialogue[i++]= "I want treats";
dialogue[i++]= "Woop";
dialogue[i++]= "I like Hot Dogs";


$("#target").on("click", function() {
    $(this).html("<img src='imgs/cat_3.png' class='targetimg'>");
    $(".conversation").html("<h1 class='conversation' tabindex='0'>"+"BOOP!"+"</h1>");
})
$("#target").on("mousemove", function() {
    $(this).html("<img src='imgs/cat_2.png' class='targetimg'>");
    $(".conversation").html("<h1 class='conversation' tabindex='0'>"+"no, don't touch!"+"</h1>");
})

$("#target").mouseout(function() {
    $(this).html("<img src='imgs/cat_1.png' class='targetimg'>");
    $(".conversation").html(dialogue[c]);
});
$("#target").on("keydown", function() {
    if (on) {
        $(this).html("<img src='imgs/cat_4.png' class='targetimg'>");
        on = !on;
    } else {
        $(this).html("<img src='imgs/cat_5.png' class='targetimg'>");
        on = !on;
    }
    $(".conversation").html(dialogue[c]);
    if (c>=dialogue.length-1) {
        c = 0;
    }
    c++;
});
