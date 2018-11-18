// all my functions layed out here, then called inside the document ready.

//The object that holds the value of the win/lose conditions
let conditionTracker = {
    fuel: 50,
    oxygen: 50,
    food: 50,
    alienBlob: 0,
    research: 0,
};

let questionState = 0;



//define tracker update function here, then just call at the end of decline/accept

//Document Ready Starts
$(function() {

    $(".accept").click(function () {
        if (questionState === 0) {
            $(".message-" + questionState).addClass("hide");
            $(".accept-response-" + questionState).removeClass("hide");
            questionState++;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4")); 
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = 50;
            conditionTracker.food = 50;
            conditionTracker.fuel = 50;
            conditionTracker.research = 0;
        } else if (questionState === 1) {
            $(".message-" + questionState).addClass("hide");
            $(".accept-response-" + questionState).removeClass("hide");
            questionState++;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));    
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.food - 5;
        } else if (questionState === 2) {
            $(".message-" + questionState).addClass("hide");
            $(".accept-response-" + questionState).removeClass("hide");
            questionState++;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 10;
            conditionTracker.food = conditionTracker.food - 10;
        } else if (questionState === 3) {
            $(".message-" + questionState).addClass("hide");
            $(".accept-response-" + questionState).removeClass("hide");
            questionState++;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + (questionState)).removeClass("hide");
            
            conditionTracker.oxygen = conditionTracker.oxygen + 30;
            conditionTracker.fuel = conditionTracker.fuel + 25;
            conditionTracker.food = conditionTracker.food - 10;
            conditionTracker.research = conditionTracker.research + 15
        } else if (questionState === 4) {
            $(".message-" + questionState).addClass("hide");
            $(".accept-response-" + questionState).removeClass("hide");
            questionState++;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 10;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 20;
        } else if (questionState === "4b") {
            $(".message-" + questionState).addClass("hide");
            $(".accept-response-" + questionState).removeClass("hide");
            questionState = parseInt(questionState[0]) + 1;
            
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 10;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 25;
            conditionTracker.research = conditionTracker.research + 20;
        } else if (questionState === 5) {
            $(".message-" + questionState).addClass("hide");
            $(".accept-response-" + questionState).removeClass("hide");
            questionState++;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 20;
            conditionTracker.fuel = conditionTracker.fuel - 20;
            conditionTracker.food = conditionTracker.food - 10;
            conditionTracker.research = conditionTracker.research + 15;
        } else if (questionState === "5b") {
            $(".message-" + questionState).addClass("hide");
            $(".accept-response-" + questionState).removeClass("hide");
            questionState = parseInt(questionState[0]) + 1;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.fuel = conditionTracker.fuel - 20;
            conditionTracker.research = conditionTracker.research + 30;
            conditionTracker.alienBlob = conditionTracker.alienBlob + 1;
        } else if (questionState === 6) {
            $(".message-" + questionState).addClass("hide");
            $(".accept-response-" + questionState).removeClass("hide");
            questionState++;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 10;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 10;
            conditionTracker.research = conditionTracker.research + 15;
        } else if (questionState === 7) {
            $(".message-" + questionState).addClass("hide");
            $(".accept-response-" + questionState).removeClass("hide");
            questionState++;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 15;
        } else if (questionState === 8) {
            $(".message-" + questionState).addClass("hide");
            $(".accept-response-" + questionState).removeClass("hide");
            questionState++;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen + 5;
            conditionTracker.fuel = conditionTracker.fuel + 5;
            conditionTracker.food = conditionTracker.food + 5;
            conditionTracker.research = conditionTracker.research + 15;
        } else if (questionState === "8b") {
            $(".message-" + questionState).addClass("hide");
            $(".accept-response-" + questionState).removeClass("hide");
            questionState = 0;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + questionState).removeClass("hide");
        } else if (questionState === 9) {
            $(".message-" + questionState).addClass("hide");
            $(".accept-response-" + questionState).removeClass("hide");
            questionState = 0;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + questionState).removeClass("hide");
        } else if (questionState === "9b") {
            $(".message-" + questionState).addClass("hide");
            $(".accept-response-" + questionState).removeClass("hide");
            questionState = questionState + "b";    
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
        } else if (questionState === "9bb" && conditionTracker.alienBlob === 1) {
            alert("Still drifting");
            alert("Wait someone is coming!")
            alert("The Zarthanians have been tracking you with the Alien Blob they gave. They saw you in trouble and decided to save you. On your way back home they reveal their secrets and finish your research. YOU WIN!")
            $(".message-" + questionState).addClass("hide");
            $(".accept-response-" + questionState).removeClass("hide");
            questionState = 0;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + questionState).removeClass("hide");
        } else {
            $(".message-" + questionState).addClass("hide");
            $(".accept-response-" + questionState).removeClass("hide");
            questionState = 0;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + questionState).removeClass("hide");
            
        };
    });

    $(".decline").click(function () {
        if (questionState === 0) {
            $(".decline-response-" + questionState).removeClass("hide");
            questionState = 0;

            conditionTracker.oxygen = 50;
            conditionTracker.food = 50;
            conditionTracker.fuel = 50;
            conditionTracker.research = 0;
        } else if (questionState === 1) {
            $(".message-" + questionState).addClass("hide");
            $(".decline-response-" + questionState).removeClass("hide");
            questionState++;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.food = conditionTracker.fuel - 15;
        } else if (questionState === 2) {
            $(".decline-response-" + questionState).removeClass("hide");
            questionState = 2;

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 5;
        } else if (questionState === 3) {
            $(".message-" + questionState).addClass("hide");
            $(".decline-response-" + questionState).removeClass("hide");
            questionState++;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 10;
        } else if (questionState === 4) {
            $(".message-" + questionState).addClass("hide");
            $(".decline-response-" + questionState).removeClass("hide");
            questionState = questionState + "b";
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 10;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 15;
        } else if (questionState === "4b") {
            $(".message-" + questionState).addClass("hide");
            $(".decline-response-" + questionState).removeClass("hide");
            questionState = parseInt(questionState[0]) + 1;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + questionState).removeClass("hide");
            
            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 15;
        } else if (questionState === 5) {
            $(".message-" + questionState).addClass("hide");
            $(".decline-response-" + questionState).removeClass("hide");
            questionState = questionState + "b";
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 20;
            conditionTracker.fuel = conditionTracker.fuel - 20;
            conditionTracker.food = conditionTracker.food - 10;
        } else if (questionState === "5b") {
            $(".message-" + questionState).addClass("hide");
            $(".decline-response-" + questionState).removeClass("hide");
            questionState = parseInt(questionState[0]) + 1;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.research = conditionTracker.research + 10;
        } else if (questionState === 6) {
            $(".message-" + questionState).addClass("hide");
            $(".decline-response-" + questionState).removeClass("hide");
            questionState++;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 20;
            conditionTracker.fuel = conditionTracker.fuel - 20;
            conditionTracker.food = conditionTracker.food - 10;
            conditionTracker.research = conditionTracker.research + 10;
        } else if (questionState === 7) {
            $(".message-" + questionState).addClass("hide");
            $(".decline-response-" + questionState).removeClass("hide");
            questionState++;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 10;
            conditionTracker.fuel = conditionTracker.fuel - 10;
            conditionTracker.food = conditionTracker.food - 10;
            conditionTracker.research = conditionTracker.research + 20;
        } else if (questionState === 8) {
            $(".message-" + questionState).addClass("hide");
            $(".decline-response-" + questionState).removeClass("hide");
            questionState = questionState + "b";
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 10;
        } else if (questionState === "8b") {
            $(".message-" + questionState).addClass("hide");
            $(".decline-response-" + questionState).removeClass("hide");
            questionState = parseInt(questionState[0]) + 1;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 5;
        } else if (questionState === 9) {
            $(".message-" + questionState).addClass("hide");
            $(".decline-response-" + questionState).removeClass("hide");
            questionState = questionState + "b";
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
        } else if (questionState === "9b") {
            $(".message-" + questionState).addClass("hide");
            $(".decline-response-" + questionState).removeClass("hide");
            questionState = questionState + "b";
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
        } else if (questionState === "9bb" && conditionTracker.alienBlob === 1) {
            alert("Still drifting");
            alert("Wait someone is coming!")
            alert("The Zarthanians have been tracking you with the Alien Blob they gave. They saw you in trouble and decided to save you. On your way back home they reveal their secrets and finish your research. YOU WIN!")
            $(".message-" + questionState).addClass("hide");
            $(".decline-response-" + questionState).removeClass("hide");
            questionState = 0;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + questionState).removeClass("hide");
        } else {
            $(".message-" + questionState).addClass("hide");
            $(".decline-response-" + questionState).removeClass("hide");
            questionState = 0;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + questionState).removeClass("hide");
        } 
    });

    $(".buttons").click(function () {
        if ((conditionTracker.fuel >= 65 && conditionTracker.fuel < 85) || (conditionTracker.fuel > 15 && conditionTracker.fuel <= 35)) {
            $('.fuel').css(`color`, `yellow`);
            conditionTracker = conditionTracker;
            $(".fuel").html(conditionTracker.fuel);
        } 
        if ((conditionTracker.oxygen >= 65 && conditionTracker.oxygen < 85) || (conditionTracker.oxygen > 15 && conditionTracker.oxygen <= 35)) {
            $('.oxygen').css(`color`, `yellow`);
            conditionTracker = conditionTracker;
            $(".oxygen").html(conditionTracker.oxygen);
        } 
        if ((conditionTracker.food >= 65 && conditionTracker.food < 85) || (conditionTracker.food > 15 && conditionTracker.food <= 35)) {
            $('.food').css(`color`, `yellow`);
            conditionTracker = conditionTracker;
            $(".food").html(conditionTracker.food);
        } 
        if (conditionTracker.research > 30 && conditionTracker.research <= 65) {
            $('.research').css(`color`, `yellow`);
            conditionTracker = conditionTracker;
            $(".research").html(conditionTracker.research);
        } 
        if (conditionTracker.fuel >= 85 || (conditionTracker.fuel <= 15 && conditionTracker.fuel > 0)) {
            $('.fuel').css(`color`, `red`);
            conditionTracker = conditionTracker;
            $(".fuel").html(conditionTracker.fuel);
        } 
        if (conditionTracker.oxygen >= 85 || (conditionTracker.oxygen <= 15 && conditionTracker.oxygen > 0)) {
            $('.oxygen').css(`color`, `red`);
            conditionTracker = conditionTracker;
            $(".oxygen").html(conditionTracker.oxygen);
        } 
        if (conditionTracker.food >= 85 || (conditionTracker.food <= 15 && conditionTracker.food > 0)) {
            $('.food').css(`color`, `red`);
            conditionTracker = conditionTracker;
            $(".food").html(conditionTracker.food);
        } 
        if (conditionTracker.research <= 30) {
            $('.research').css(`color`, `red`);
            conditionTracker = conditionTracker;
            $(".research").html(conditionTracker.research);
        } 
        if (conditionTracker.fuel > 35 && conditionTracker.fuel < 65) {
            $('.fuel').css(`color`, `#58d35a`);
            conditionTracker = conditionTracker;
            $(".fuel").html(conditionTracker.fuel);
        } 
        if (conditionTracker.oxygen > 35 && conditionTracker.oxygen < 65) {
            $('.oxygen').css(`color`, `#58d35a`);
            conditionTracker = conditionTracker;
            $(".oxygen").html(conditionTracker.oxygen);
        } 
        if (conditionTracker.food > 35 && conditionTracker.food < 65) {
            $('.food').css(`color`, `#58d35a`);
            conditionTracker = conditionTracker;
            $(".food").html(conditionTracker.food);
        } 
        if (conditionTracker.research > 65 && conditionTracker.research < 100){
            $('.research').css(`color`, `#58d35a`);
            conditionTracker = conditionTracker;
            $(".research").html(conditionTracker.research);
        } 
        // if (conditionTracker.fuel >= 100) {
        //     alert("You are holding way to much fuel. Some nasty aliens find you to be a perfect target and take everything you have... life included. YOU LOSE!");
        //     $(".message-" + questionState).addClass("hide");
        //     $(".background").removeClass("message-background-" + questionState);
        //     questionState = 0;
        //     $(".message-" + questionState).removeClass("hide");
        //     $(".background").addClass("message-background-" + (questionState));
        // }
        // if (conditionTracker.oxygen >= 100) {
        //     alert("Your ship is jam packed with beautiful life giving oxygen. Which explodes and kills you. YOU LOSE!");
        //     $(".message-" + questionState).addClass("hide");
        //     $(".background").removeClass("message-background-" + questionState);
        //     questionState = 0;
        //     $(".message-" + questionState).removeClass("hide");
        //     $(".background").addClass("message-background-" + (questionState));
        // }
        // if (conditionTracker.food >= 100) {
        //     alert("You have filled your belly with so much food you can longer get into your suit or through doors. You slowly drift and die trapped in this tin can. YOU LOSE!");
        //     questionState = 0;
        // }
        // if (conditionTracker.research >= 100) {
        //     alert("You have completed your research and can go home! Kiss your partner everyday.");
        //     $(".message-" + questionState).addClass("hide");
        //     $(".background").removeClass("message-background-" + questionState);
        //     questionState = 0;
        //     $(".message-" + questionState).removeClass("hide");
        //     $(".background").addClass("message-background-" + (questionState));
        // }
        // if (conditionTracker.fuel <= 0) {
        //     alert("Your fuel has fun out. Enjoy the never ending lazy river ride of slow death. YOU LOSE!");
        //     conditionTracker = conditionTracker;
        //     $(".message-" + questionState).addClass("hide");
        //     $(".background").removeClass("message-background-" + questionState);
        //     questionState = 0;
        //     $(".message-" + questionState).removeClass("hide");
        //     $(".background").addClass("message-background-" + (questionState));
        // }
        // if (conditionTracker.oxygen <= 0) {
        //     alert("You are having a very hard time breathing. Very very hard. You suffocate to death. YOU LOSE!");
        //     conditionTracker = conditionTracker;
        //     $(".message-" + questionState).addClass("hide");
        //     $(".background").removeClass("message-background-" + questionState);
        //     questionState = 0;
        //     $(".message-" + questionState).removeClass("hide");
        //     $(".background").addClass("message-background-" + (questionState));
        // }
        // if (conditionTracker.food <= 0) {
        //     alert("You have started trying to eat C.A.M. It was not filling and now you have no way to navigate. Welcome to starvation. YOU LOSE!");
        //     conditionTracker = conditionTracker;
        //     $(".message-" + questionState).addClass("hide");
        //     $(".background").removeClass("message-background-" + questionState);
        //     questionState = 0;
        //     $(".message-" + questionState).removeClass("hide");
        //     $(".background").addClass("message-background-" + (questionState));
        // } 
    });

    $(".accept-response-button").click(function () {
        if (questionState === 0) {
            $(".end-game").addClass("hide");
        } if (questionState === 2) {
            $(".accept-response-" + (questionState)).addClass("hide");
        } if (questionState === "4b" || questionState === "5b" || questionState === "8b") {
            $(".accept-response-" + (parseInt(questionState[0]))).addClass("hide");
        } if (questionState === "9bb") {
            $(".accept-response-" + parseInt(questionState[0]) + "b").addClass("hide");
        } else {
            $(".accept-response-" + (questionState - 1)).addClass("hide");
        }
    });
    
    $(".decline-response-button").click(function () {
        if (questionState === 0) {
            $(".decline-response-" + (questionState)).addClass("hide");
            $(".end-game").addClass("hide");
        } if ( questionState === 2) {
            $(".decline-response-" + (questionState)).addClass("hide");
        } if (questionState === "9bb") {
            $(".decline-response-" + parseInt(questionState[0]) + "b").addClass("hide");
        }if (questionState === "4b" || questionState === "5b" || questionState === "8b" || questionState === "9b") {
            $(".decline-response-" + (parseInt(questionState[0]))).addClass("hide");
        } if (questionState === 5 || questionState === 6 || questionState === 9 ) {
            $(".decline-response-" + ((questionState - 1) + "b")).addClass("hide");
        } else {
            $(".decline-response-" + (questionState - 1)).addClass("hide");
        }
    });
});

//To do: find out how to get the alien ending to happen. add in fun facts. Fix, end game images to not stretch.

//Spell Check copy and clean up SCSS. Make notes in my JS to say what is happening.