window.onload = function() {

    var clock = Snap("#clock");

    Snap.load("clock.svg", function(data) {
        clock.append(data);

        var secondHand = clock.select("#second_hand");
        var minuteHand = clock.select("#minute_hand");
        var hourHand = clock.select("#hour_hand");

        secondHand.transform('r45,150,150');
        minuteHand.transform('r205,150,150');
        hourHand.transform('r180,150,150');
    });
    
    var date = new Date();
    var hours = date.getHours() % 12;
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    window.alert(hours + ":" + minutes + ":" + seconds);
};