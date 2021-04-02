var contents = $("#contents");
var allInputs = $("textarea");
var planner;


displayTime();
colorCheck ();

loadFromLocal();

// time updates every second
setInterval(displayTime, 1000);

// color updates every minute
setInterval(colorCheck, 60000);

// sets the jumbotron time
function displayTime () {
    $('#currentDay').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
}

// iterates over textareas and updates styling
// if the hour is past, textarea is gray
// if hour is current, textarea is red
// else textarea is green
function colorCheck () {
    for (i = 0; i < allInputs.length; i++) {

        // recast hour strings as integers
        var currentHour = parseInt(moment().format("H"));
        var plannerHour = parseInt($(allInputs[i]).attr("data-index"));

        if (currentHour == plannerHour) {
            $(allInputs[i]).css("background-color", "red");
        } else if (currentHour > plannerHour) {
            $(allInputs[i]).css('background-color', "gray");
        } else {
            $(allInputs[i]).css("background-color", "green");
        }
    }
}

// retreives the planner object from local storage
// writes content of planner object to textarea
function loadFromLocal () {
    planner = JSON.parse(localStorage.getItem("planner"));

    // if a planner object exists, iterate over keys
    // and assign values to corresponding textarea
    if (planner != null) {
        var keyArray = Object.keys(planner);

        for (i = 0; i < keyArray.length; i++) {
            var currentKey = keyArray[i];
            $("#" + currentKey).val(planner[currentKey]);
        }
    
    // else initialize planner as an empty object
    } else {
        planner = {};
    }
}

// saves the content of corresponding textareato local storage
$( "i" ).on( "click", function(event) {
    var clickedIcon = $(event.target);

    // saves the button name as a string
    var saveKey = clickedIcon.attr("data-name");

    // key in the planner object matches name of corresponding button name and textbox id
    planner[saveKey] = $("#" + saveKey).val();

    saveToLocal();

  });

  // saves the contents of the planner object to local storage
function saveToLocal () {
    localStorage.setItem("planner", JSON.stringify(planner));
}



