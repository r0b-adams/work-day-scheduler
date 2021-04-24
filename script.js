var allInputs = $("textarea");
var planner;

// call these functions to account for delay in setInterval
displayTime();
colorCheck ();

loadFromLocal();

// time updates every second
setInterval(displayTime, 1000);

// color updates every minute
setInterval(colorCheck, 60000);

$( "i" ).on( "click", saveToLocal);

// sets the jumbotron time
function displayTime () {
    $('#currentDay').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
}

// iterates over textareas and updates styling
function colorCheck () {
    for (i = 0; i < allInputs.length; i++) {

        // recast hour strings as integers
        var currentHour = parseInt(moment().format("H"));
        var plannerHour = parseInt($(allInputs[i]).attr("data-index"));
        
        // if hour is current, textarea is red
        if (currentHour == plannerHour) {
            $(allInputs[i]).removeClass().addClass("form-control bg-danger");
                        
        // else if the hour is past, textarea is gray
        } else if (currentHour > plannerHour) {
            $(allInputs[i]).removeClass().addClass("form-control bg-secondary");
        
        // else textarea is green
        } else {
            $(allInputs[i]).removeClass().addClass("form-control bg-success");
        }
    }
}

// retrieves the planner from local storage
// writes content of planner to textarea
function loadFromLocal () {
    planner = JSON.parse(localStorage.getItem("planner"));

    // if parsing localStorage returns null, assign planner to empty object 
    if (!planner) {
        planner = {};

    // else iterate over keys and assign values to corresponding textarea id    
    } else {
        var keyArray = Object.keys(planner);

        for (i = 0; i < keyArray.length; i++) {
            var textAreaID = keyArray[i];
            var savedTask = planner[textAreaID];
            $("#" + textAreaID).val(savedTask);
        }
    }
}

// saves the content of corresponding textarea to local storage
// iconClicked: event object
function saveToLocal (iconClicked) {

    //  if global var is null, assign planner to empty object
    if (!planner) {
        planner = {};
    } 

    // saves the clicked icon name to use as the planner key
    var saveKey = $(iconClicked.target).attr("data-name");

    // planner key matches corresponding textbox id
    planner[saveKey] = $("#" + saveKey).val();

    // save planner to local storage as JSON string
    localStorage.setItem("planner", JSON.stringify(planner));
}



