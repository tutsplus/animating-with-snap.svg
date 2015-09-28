var clock,
    secondHand,
    minuteHand,
    hourHand,
    secondCounter,
    minuteCounter,
    hourCounter;

window.onload = function() {

    clock = Snap("#clock");

    Snap.load("clock.svg", function(data) {
        clock.append(data);

        secondHand = clock.select("#second_hand");
        minuteHand = clock.select("#minute_hand");
        hourHand = clock.select("#hour_hand");
        
        initialTime();
        
        var timer = setInterval(showTime, 1000);
        secondCounter = minuteCounter = hourCounter = 0;
    });
};

function initialTime() {
    var date = new Date(),
        hours = date.getHours() % 12,
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        hourRotation = hours * 30,
        minuteRotation = minutes * 6,
        secondRotation = seconds * 6;
    
    hourRotation += minutes * 0.5;
    
    secondHand.transform("r" + secondRotation + ",150,150");
    minuteHand.transform("r" + minuteRotation + ",150,150");
    hourHand.transform("r" + hourRotation + ",150,150");
}

function showTime() {
    var date = new Date(),
        hours = date.getHours() % 12,
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        hourRotation = hours * 30,
        minuteRotation = minutes * 6,
        secondRotation = seconds * 6;
    
    hourRotation += minutes * 0.5;
    
    if (seconds == 0) secondCounter++;
    if (minutes == 0 && seconds == 0) minuteCounter++;
    if (hours == 0 && minutes == 0 && seconds == 0) hourCounter++;
    secondHand.animate({transform: "r" + (secondCounter * 360 + secondRotation) + ",150,150"}, 1000);
    minuteHand.animate({transform: "r" + (minuteCounter * 360 + minuteRotation) + ",150,150"}, 200, mina.elastic);
    hourHand.animate({transform: "r" + (hourCounter * 360 + hourRotation) + ",150,150"}, 1000);
}