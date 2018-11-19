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
//ACCEPT RESPONSES START HERE THEY CHANGE THE MESSAGE AND THE VIDEO BACKGROUND AS WELL AS THE CONDITIONTRACKER

    $(".accept").click(function () {
        if (questionState === 0) {
            $(".message-" + questionState).addClass("hide");
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
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
        } else if (questionState === 3) {
            $(".message-" + questionState).addClass("hide");
            $(".accept-response-" + questionState).removeClass("hide");
            questionState++;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + (questionState)).removeClass("hide");
            
            conditionTracker.oxygen = conditionTracker.oxygen + 30;
            conditionTracker.fuel = conditionTracker.fuel + 25;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 15
        } else if (questionState === 4) {
            $(".message-" + questionState).addClass("hide");
            $(".accept-response-" + questionState).removeClass("hide");
            questionState++;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 20;
        } else if (questionState === "4b") {
            $(".message-" + questionState).addClass("hide");
            $(".accept-response-" + questionState).removeClass("hide");
            questionState = parseInt(questionState[0]) + 1;
            
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.food = conditionTracker.food + 25;
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

            conditionTracker.fuel = conditionTracker.fuel - 15;
            conditionTracker.research = conditionTracker.research + 30;
            conditionTracker.alienBlob = conditionTracker.alienBlob + 1;
        } else if (questionState === 6) {
            $(".message-" + questionState).addClass("hide");
            $(".accept-response-" + questionState).removeClass("hide");
            questionState++;
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 10;
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
            $(".message-" + questionState).addClass("hide");
            $(".alt-alien").removeClass("hide");
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
//DECLINE RESPONSES START HERE THEY CHANGE THE MESSAGE AND THE VIDEO BACKGROUND AS WELL AS THE CONDITIONTRACKER
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
            conditionTracker.food = conditionTracker.fuel + 15;
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

            conditionTracker.oxygen = conditionTracker.oxygen - 10;
            conditionTracker.fuel = conditionTracker.fuel - 10;
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

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
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
            $(".message-" + questionState).addClass("hide");
            $(".alt-alien").removeClass("hide");
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
   
//THE CLOSING OF THE POP UP WINDOWS STARTS
    $(".accept-response-button").click(function () {
        if (questionState === 0) {
            $(".end-game").addClass("hide");
        } if (questionState === 2) {
            $(".accept-response-" + (questionState)).addClass("hide");
        } if (questionState === "4b" || questionState === "5b" || questionState === "8b" || questionState === "9b") {
            $(".accept-response-" + (parseInt(questionState[0]))).addClass("hide");
        } if (questionState === 5 || questionState === 6 || questionState === 9 || questionState === 8) {
            $(".accept-response-" + ((questionState - 1) + "b")).addClass("hide");
        }if (questionState === "9bb") {
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
        } if (questionState === 5 || questionState === 6 || questionState === 9 || questionState === 8 ) {
            $(".decline-response-" + ((questionState - 1) + "b")).addClass("hide");
        } else {
            $(".decline-response-" + (questionState - 1)).addClass("hide");
        }
    });
//COLOR CHANGES ON CONDITION TRACKER START HERE

    $(".response-button").click(function() {
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
        if (conditionTracker.research > 65 && conditionTracker.research < 100) {
            $('.research').css(`color`, `#58d35a`);
            conditionTracker = conditionTracker;
            $(".research").html(conditionTracker.research);
        }
        //WIN LOSE CONDITIONS START HERE
        if (conditionTracker.fuel >= 100) {
            $(".max-fuel").removeClass("hide");
            $(".message-" + questionState).addClass("hide");
            questionState = 0;
            $(".message-" + questionState).removeClass("hide");
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
        }
        if (conditionTracker.oxygen >= 100) {
            $(".max-oxygen").removeClass("hide");
            $(".message-" + questionState).addClass("hide");
            questionState = 0;
            $(".message-" + questionState).removeClass("hide");
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
        }
        if (conditionTracker.food >= 100) {
            $(".max-food").removeClass("hide");
            $(".message-" + questionState).addClass("hide");
            questionState = 0;
            $(".message-" + questionState).removeClass("hide");
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
        }
        if (conditionTracker.research >= 100) {
            $(".max-research").removeClass("hide");
            $(".message-" + questionState).addClass("hide");
            questionState = 0;
            $(".message-" + questionState).removeClass("hide");
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
        }
        if (conditionTracker.fuel <= 0) {
            $(".min-fuel").removeClass("hide");
            $(".message-" + questionState).addClass("hide");
            questionState = 0;
            $(".message-" + questionState).removeClass("hide");
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
        }
        if (conditionTracker.oxygen <= 0) {
            $(".min-oxygen").removeClass("hide");
            $(".message-" + questionState).addClass("hide");
            questionState = 0;
            $(".message-" + questionState).removeClass("hide");
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
        }
        if (conditionTracker.food <= 0) {
            $(".min-food").removeClass("hide");
            $(".message-" + questionState).addClass("hide");
            questionState = 0;
            $(".message-" + questionState).removeClass("hide");
            $(".video").attr("src", ("assets/background-video-" + questionState + ".mp4"));
        }
    });
//FUN FACT BUTTON ACTION
    // $(".fun-fact").click(function () {
    //     if (questionState === 0) {
    //         $("fun-fact-content-" + questionState).removeClass("hide");
    //         questionState = 0;
    //         // $("fact-icon").toggleClass("hide");
    //         console.log("click");

    //     } else {
    //         console.log(oops);
    //     }
    // });
});


// THINGS TO FIX BEFORE PORTFOLIO (MAKE THE CONDITIONS RESTART BEFORE THE FIRST RESPONSE BUTTON CLICK, THEY CURRENTLY START THEN SHOWING THE LOSING NUMBERS.)(INCREASE THE DIFFICULTY, I WANTED IT EASY FOR SHOWCASE REASONS)(ALSO ADD IN THE FUN FACT SECTION I DID NOT HAVE TIME TO GET THE JS TO WORK FOR.)