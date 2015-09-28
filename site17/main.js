var clock, secondHand, minuteHand, hourHand;

window.onload = function() {

    clock = Snap("#clock");

    Snap.load("clock.svg", function(data) {
        clock.append(data);

        secondHand = clock.select("#second_hand");
        minuteHand = clock.select("#minute_hand");
        hourHand = clock.select("#hour_hand");

        showTime();
    });
    
    var date = new Date();
    var hours = date.getHours() % 12;
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
};

function showTime() {
    secondHand.transform('r180,150,150');
}