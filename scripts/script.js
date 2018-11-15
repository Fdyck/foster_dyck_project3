// all my functions layed out here, then called inside the document ready.

//The object that holds the value of the win/lose conditions
const conditionTracker = {
    fuel: 50,
    oxygen: 50,
    food: 50,
    research: 0,
};

let questionState = 0;

if (conditionTracker.fuel <= 25) {
    
}


//Document Ready Starts
$(function() {
    // on button click 
        // add class of hide to message-0
        // remove class of hide from message-1
        // add 1 to questionState
    $(".accept").click(function () {
        if (questionState === "4b" || questionState === "5b") {
            $(".message-" + questionState).addClass("hide");
            questionState = parseInt(questionState[0]) + 1;
            $(".message-" + questionState).removeClass("hide");
        } else if (questionState === "8b") {
            alert("Cuz your friends don't dance, and if they they don't dance they ain't no friends of mine. But seriously leaving a space craft without any computer assitance... your dead. YOU LOSE!");
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = 0;
            $(".message-" + questionState).removeClass("hide");
            $(".background").addClass("message-background-" + (questionState));
        } else if (questionState === 9){
            alert("Good choice, I guess even a blind squirrel find a nut occationally. YOU WIN!");
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = 0;
            $(".message-" + questionState).removeClass("hide");
            $(".background").addClass("message-background-" + (questionState));
        } else if (questionState === "9b") {
            alert("Still drifting");
            questionState = "9b";
        } else {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            $(".background").addClass("message-background-" + (questionState));    
            $(".message-" + (questionState)).removeClass("hide");
        }   
    });
    
    $(".decline").click(function () {
        if (questionState === 0) {
            alert("Wow... NO GAME FOR YOU!");
            questionState = 0;
        } else if (questionState === 2) {
            alert("You orbit the earth one time.")
            questionState = 2;
        } else if (questionState === 4 || questionState === 5 || questionState === 8 || questionState === 9) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = questionState + "b";
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + questionState).removeClass("hide"); 
        } else if (questionState === "4b" || questionState === "5b" || questionState === "8b") {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = parseInt(questionState[0]) + 1;
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + questionState).removeClass("hide");
        } else if (questionState === "9b") {
            alert("Still drifting");
            questionState = "9b";
        } else {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + (questionState)).removeClass("hide");
        };
    });
});


// STEP ONE: if yes is clicked than alert with response and adjust settings uniquely
    //STEP ONE B: check to see if any values reach 0 or 100, if so alert unique end of game, if not adjust colors of categories to display green, yellow, red depending on new value.
        //STEP ONE C: check to see if work = 100, if so game is won.
// STEP TWO: remove current text
// STEP THREE: add new question
// STEP FOUR: change background
// STEP FIVE: reset yes/no value to new values with new alerts 
// STEP SIX: do again for no values, sometime having the same next card but not always?