var clock, secondHand, minuteHand, hourHand;

window.onload = function() {

    clock = Snap("#clock");

    Snap.load("clock.svg", function(data) {
        clock.append(data);

        secondHand = clock.select("#second_hand");
        minuteHand = clock.select("#minute_hand");
        hourHand = clock.select("#hour_hand");
        
        var timer = setInterval(showTime, 1000);
    });
};

function showTime() {
    var date = new Date();
    var hours = date.getHours() % 12 * 30;
    var minutes = date.getMinutes() * 6;
    var seconds = date.getSeconds() * 6;
    
    secondHand.animate({transform: "r" + seconds + ",150,150"}, 1000);

    minuteHand.transform("r" + minutes + ",150,150");
    hourHand.transform("r" + hours + ",150,150");
}