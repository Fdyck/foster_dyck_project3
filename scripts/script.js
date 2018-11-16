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
            alert("You slave to the machine. -10 Fuel, -5 Oxygen");    
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.food - 5;
        } else if (questionState === 2) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            alert("You leave for Mars, I hope you brought some books. -10 Fuel, -10 Food, -5 Oxygen.");
            $(".background").addClass("message-background-" + (questionState));    
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 10;
            conditionTracker.food = conditionTracker.food - 10;
        } else if (questionState === 3) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            alert("SHINEY!!! This comet is really all RTCPeerConnectionIceErrorEvent, you harvest the H2O for fuel and oxygen. +30 Oxygen, +25 Fuel, -10 Food, +15 Research");
            $(".background").addClass("message-background-" + (questionState));    
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen + 30;
            conditionTracker.fuel = conditionTracker.fuel + 25;
            conditionTracker.food = conditionTracker.food - 10;
            conditionTracker.research = conditionTracker.research + 15
        } else if (questionState === 4) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            alert("Better to be save than sorry! -5 Oxygen, -10 Fuel, -5 Food, +20 Research");
            $(".background").addClass("message-background-" + (questionState));    
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 10;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 20;
        } else if (questionState === "4b") {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = parseInt(questionState[0]) + 1;
            alert("While walking around you stumble into a primitive alien society. They revere you as a diety and give gifts. -10 Oxygen, -5 Fuel, +25 Food, +20 Research");
            $(".background").addClass("message-background-" + (questionState));2
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 10;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 25;
            conditionTracker.research = conditionTracker.research + 20;
        } else if (questionState === 5) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            alert("Not the wisest of choices. Your ship was hit leaking valuables. You did manage to grab some samples on your way through. -20 Fuel, -20 Oxygen, -10 Food, Research + 15");
            $(".background").addClass("message-background-" + (questionState));    
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 20;
            conditionTracker.fuel = conditionTracker.fuel - 20;
            conditionTracker.food = conditionTracker.food - 10;
            conditionTracker.research = conditionTracker.research + 15;
        } else if (questionState === "5b") {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = parseInt(questionState[0]) + 1;
            alert("Congrats! You are the first diplomat from earth. Although it doesn't seem a fair trade. As a gesture of good will they gave you a gift. -20 Fuel,  +30 Research. +1 Alien Blob");
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.fuel = conditionTracker.fuel - 20;
            conditionTracker.research = conditionTracker.research + 30;
            conditionTracker.alienBlob = conditionTracker.alienBlob + 1;
        } else if (questionState === 6) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            alert("Better to be save than sorry! - 10 Oxygen, -5 Fuel, -10 Food, +15 Research");
            $(".background").addClass("message-background-" + (questionState));    
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 10;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 10;
            conditionTracker.research = conditionTracker.research + 15;
        } else if (questionState === 7) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            alert("We depart for Saturn, finding many interesting anomalies on the way. -5 Fuel, -5 Oxygen, -5 Food, +15 Research");
            $(".background").addClass("message-background-" + (questionState));    
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 15;
        } else if (questionState === 8) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            alert("The planet is filled with interesting chemicals we can use to continue our search! +5 Oxygen, +5 Fuel, +5 Food, +15 Research");
            $(".background").addClass("message-background-" + (questionState));    
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen + 5;
            conditionTracker.fuel = conditionTracker.fuel + 5;
            conditionTracker.food = conditionTracker.food + 5;
            conditionTracker.research = conditionTracker.research + 15;
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
        } else if (questionState === "9b") {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = questionState + "b";
            alert("Still drifting. -5 Oxygen, -5 Fuel, -5 Food");
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
        } else if (questionState === "9bb" && conditionTracker.alienBlob === 1) {
            alert("Still drifting");
            alert("Wait someone is coming!")
            alert("The Zarthanians have been tracking you with the Alien Blob they gave. They saw you in trouble and decided to save you. On your way back home they reveal their secrets and finish your research. YOU WIN!")
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = 0;
            $(".message-" + questionState).removeClass("hide");
            $(".background").addClass("message-background-" + (questionState));
        } else {
            alert("Still drifting. -5 Oxygen, -5 Fuel, -5 Food");
            questionState = "9b";
            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
        };
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
            alert("I also like to live dangerously... your ship leaked fuel on the way out of the atmostphere but you saved some time! -15 fuel -5 Oxygen");
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.food = conditionTracker.fuel - 15;
        } else if (questionState === 2) {
            alert("You orbit the earth one time, you lazy bum. -5 Oxygen, -5 Fuel, -5 Food, +10 Research");
            questionState = 2;

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 10;
        } else if (questionState === 3) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            alert("Check out the will power on you. You think your better than me? -5 Food, -5 Fuel, -10 Oxygen");
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 10;
        } else if (questionState === 4) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = questionState + "b";
            alert("Lets hope that God does protect the foolish. -10 Fuel, -5 Oxygen, -5 Food, +15 Research");
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 10;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 15;
        } else if (questionState === "4b") {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = parseInt(questionState[0]) + 1;
            alert("I thought you were brave! I guess it's just another one of my many dissapointments. -5 Food, -5 Fuel, -5 Oxygen, +15 Research");
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + questionState).removeClass("hide");
            
            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 15;
        } else if (questionState === 5) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = questionState + "b";
            alert("Safety first! -10 Fuel, -10 Oxygen, -15 Food");
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 20;
            conditionTracker.fuel = conditionTracker.fuel - 20;
            conditionTracker.food = conditionTracker.food - 10;
        } else if (questionState === "5b") {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = parseInt(questionState[0]) + 1;
            alert("I don't talk to aliens, not now not never. +10 Research.");
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.research = conditionTracker.research + 10;
        } else if (questionState === 6) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            alert("We quell the storms and ride the thunder...but it doesn't go well and we got lost in the planets endless storms. -20 Fuel, -20 Oxygen, -20 Food, +10 Research");
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 20;
            conditionTracker.fuel = conditionTracker.fuel - 20;
            conditionTracker.food = conditionTracker.food - 10;
            conditionTracker.research = conditionTracker.research + 10;
        } else if (questionState === 7) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState++;
            alert("Under the thick layers of ice there seems to be a murmaid civilization! We stay to study them before heading on to Saturn -10 Fuel, -10 Oxygen, -10 Food, +20 Research");
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + (questionState)).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 10;
            conditionTracker.fuel = conditionTracker.fuel - 10;
            conditionTracker.food = conditionTracker.food - 10;
            conditionTracker.research = conditionTracker.research + 20;
        } else if (questionState === 8) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = questionState + "b";
            alert("We go towards the glitter it seems so attractive, should we go out there? -5 Oxygen, -5 Fuel, -5 Food, +10 Research");
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 10;
        } else if (questionState === "8b") {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = parseInt(questionState[0]) + 1;
            alert("We decide it best to watch the glitter from afar and record notes. Boring. -5 Oxygen, -5 Fuel, -5 Food, +5 Research");
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
            conditionTracker.research = conditionTracker.research + 5;
        } else if (questionState === 9) {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = questionState + "b";
            alert("We continue to venture into space alone, bold, and likely completely %$#!-ed. -5 Oxygen, -5 Fuel, -5 Food, +5 Research");
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
        } else if (questionState === "9b") {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = questionState + "b";
            alert("Still drifting. -5 Oxygen, -5 Fuel, -5 Food");
            $(".background").addClass("message-background-" + (questionState));
            $(".message-" + questionState).removeClass("hide");

            conditionTracker.oxygen = conditionTracker.oxygen - 5;
            conditionTracker.fuel = conditionTracker.fuel - 5;
            conditionTracker.food = conditionTracker.food - 5;
        } else if (questionState === "9bb" && conditionTracker.alienBlob === 1) {
            alert("Still drifting");
            alert("Wait someone is coming!")
            alert("The Zarthanians have been tracking you with the Alien Blob they gave. They saw you in trouble and decided to save you. On your way back home they reveal their secrets and finish your research. YOU WIN!")
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = 0;
            $(".message-" + questionState).removeClass("hide");
            $(".background").addClass("message-background-" + (questionState));
        } else {
            $(".message-" + questionState).addClass("hide");
            $(".background").removeClass("message-background-" + questionState);
            questionState = questionState;
            alert("Still drifting. -5 Oxygen, -5 Fuel, -5 Food");
            $(".background").addClass("message-background-" + (questionState));
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
});

