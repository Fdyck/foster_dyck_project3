// all my functions layed out here, then called inside the document ready.

//The object that holds the value of the win/lose conditions
const conditionTracker = {
    fuel: 50,
    oxygen: 50,
    food: 50,
    research: 0,
};

let questionState = 0;


//define tracker update function here, then just call at the end of decline/accept

//Document Ready Starts
$(function() {

    $(".accept").click(function () {
        if (questionState === 0) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = 50;
            conditionTracker.food = 50;
            conditionTracker.fuel = 50;
            conditionTracker.research = 0;
        } else if (questionState === 1) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            $(".background").addClass("message-background-" + (questionState));    
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.food - 5;
            alert("You slave to the machine. -10 Fuel, -5 Oxygen");
        } else if (questionState === 2) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            $(".background").addClass("message-background-" + (questionState));    
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 10;
            conditionTracker.fuel = conditionTracker.fuel - 10;
            conditionTracker.food = conditionTracker.food - 10;
            alert("You leave for Mars, I hope you brought some books. -10 Fuel, -10 Food, -10 Oxygen.");
        } else if (questionState === 3) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            $(".background").addClass("message-background-" + (questionState));    
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen + 30;
            conditionTracker.fuel = conditionTracker.fuel + 30;
            conditionTracker.food = conditionTracker.food - 10;
            conditionTracker.research = conditionTracker.research + 10
            alert("SHINEY!!! This comet is really all RTCPeerConnectionIceErrorEvent, you harvest the H2O for fuel and oxygen. +30 Oxygen, +30 Fuel, -10 Food, +10 Research");
        } else if (questionState === 4) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            $(".background").addClass("message-background-" + (questionState));    
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 15;
            alert("Better to be save than sorry! -5 Oxygen, -5 Fuel, -5 Food, +15 Research")
        } else if (questionState === "4b") {
            $(".message-" + questionState).addClass("hide");
            questionState = parseInt(questionState[0]) + 1;
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 25;
            conditionTracker.research = conditionTracker.research + 15;
            alert("While walking around you stumble into a primitive alien society. They revere you as a diety and give gifts. -5 Oxygen, -5 Fuel, +25 Food, +15 Research")
        } else if (questionState === 5) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            $(".background").addClass("message-background-" + (questionState));    
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 20;
            conditionTracker.fuel = conditionTracker.fuel - 20;
            conditionTracker.food = conditionTracker.food - 10;
            conditionTracker.research = conditionTracker.research + 10;
            alert("Not the wisest of choices. Your ship was hit leaking valuables. You did manage to grab some samples on your way through. -20 Fuel, -20 Oxygen, -10 Food, Research + 10")
        } else if (questionState === "5b") {
            $(".message-" + questionState).addClass("hide");
            questionState = parseInt(questionState[0]) + 1;
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.fuel = conditionTracker.fuel - 20;
            conditionTracker.research = conditionTracker.research + 20;
            alert("Congrats! You are the first diplomat from earth. Although it doesn't seem a fair trade. -20 Fuel, -20 Oxygen, -10 Food,  +20 Research")
        } else if (questionState === 6) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            $(".background").addClass("message-background-" + (questionState));    
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 10;
            alert("Better to be save than sorry! - 5 Oxygen, -5 Fuel, -5 Food, +10 Research")
        } else if (questionState === 7) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            $(".background").addClass("message-background-" + (questionState));    
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 10;
            alert("We depart for Saturn, finding many interesting anomalies on the way. -5 Fuel, -5 Oxygen, -5 Food, +10 Research")
        } else if (questionState === 8) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            $(".background").addClass("message-background-" + (questionState));    
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen + 5;
            conditionTracker.fuel = conditionTracker.fuel + 5;
            conditionTracker.food = conditionTracker.food + 5;
            conditionTracker.research = conditionTracker.research + 15;
            alert("The planet is filled with interesting chemicals we can use to continue our search! +5 Oxygen, +5 Fuel, +5 Food, +15 Research")
        } else if (questionState === "8b") {
            alert("Cuz your friends don't dance, and if they they don't dance they ain't no friends of mine. But seriously leaving a space craft without any computer assitance... your dead. YOU LOSE!");
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = 0;
            $(".message-" + questionState).removeClass("hide");
            $(".background").addClass("message-background-" + (questionState));
        } else if (questionState === 9) {
            alert("Good choice, not a hard choice but still a good one. Even a blind squirrel find a nut occationally. YOU WIN!");
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = 0;
            $(".message-" + questionState).removeClass("hide");
            $(".background").addClass("message-background-" + (questionState));
        } else {
            alert("Still drifting");
            questionState = "9b";
        }
    });

    $(".decline").click(function () {
        if (questionState === 0) {
            alert("Wow... NO GAME FOR YOU!");
            questionState = 0;
            conditionTracker.oxygen = 50;
            conditionTracker.food = 50;
            conditionTracker.fuel = 50;
            conditionTracker.research = 0;
        } else if (questionState === 1) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.food = conditionTracker.fuel - 15;
            alert("I also like to live dangerously... your ship leaked fuel on the way out of the atmostphere but you saved some time! -15 fuel -5 Oxygen")
        } else if (questionState === 2) {
            alert("You orbit the earth one time, you lazy bum. -5 Oxygen, -5 Fuel, -5 Food, +5 Research")
            questionState = 2;

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 5;
        } else if (questionState === 3) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 10;
            conditionTracker.fuel = conditionTracker.fuel - 10;
            conditionTracker.food = conditionTracker.food - 10;
            alert("Check out the will power on you. You think your better than me? -10 Food, -10 Fuel, -10 Oxygen")
        } else if (questionState === 4) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = questionState + "b";
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 10;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 10;
            alert("Lets hope that God does protect the foolish. -10 Fuel, -5 Oxygen, -5 Food, +10 Research")
        } else if (questionState === "4b") {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = parseInt(questionState[0]) + 1;
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 10;
            alert("I thought you were brave! I guess it's just another one of my many dissapointments. -5 Food, -5 Fuel, -5 Oxygen, +10 Research")
        } else if (questionState === 5) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = questionState + "b";
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 20;
            conditionTracker.fuel = conditionTracker.fuel - 20;
            conditionTracker.food = conditionTracker.food - 10;
            alert("Safety first! -10 Fuel, -10 Oxygen, -15 Food")
        } else if (questionState === "5b") {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = parseInt(questionState[0]) + 1;
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.research = conditionTracker.research + 5;
            alert("I don't talk to aliens, not now not never. +5 Research.")
        } else if (questionState === 6) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 20;
            conditionTracker.fuel = conditionTracker.fuel - 20;
            conditionTracker.food = conditionTracker.food - 10;
            conditionTracker.research = conditionTracker.research;
            alert("We quell the storms and ride the thunder...but it doesn't go well and we got lost in the planets endless storms. -20 Fuel, -20 Oxygen, -20 Food, +10 Research")
        } else if (questionState === 7) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 10;
            conditionTracker.fuel = conditionTracker.fuel - 10;
            conditionTracker.food = conditionTracker.food - 10;
            conditionTracker.research = conditionTracker.research + 20;
            alert("Under the thick layers of ice there seems to be a murmaid civilization! We stay to study them before heading on to Saturn -10 Fuel, -10 Oxygen, -10 Food, +20 Research")
        } else if (questionState === 8) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = questionState + "b";
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 10;
            alert("We go towards the glitter it seems so attractive, should we go out there? -5 Oxygen, -5 Fuel, -5 Food, +10 Research")
        } else if (questionState === "8b") {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = parseInt(questionState[0]) + 1;
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 5;
            alert("We decide it best to watch the glitter from afar and record notes. Boring. -5 Oxygen, -5 Fuel, -5 Food, +5 Research")
        } else if (questionState === 9) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = questionState + "b";
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
            alert("We continue to venture into space alone, bold, and likely completely %$#!-ed. -5 Oxygen, -5 Fuel, -5 Food, +5 Research")
        } else {
            alert("Still drifting. -5 Oxygen, -5 Fuel, -5 Food");
            questionState = "9b";
            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
        }
    });
});

