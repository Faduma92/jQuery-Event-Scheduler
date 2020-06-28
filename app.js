$( document ).ready(function() {
    


document.getElementById("9").value = localStorage.getItem("server");    
document.getElementById("10").value = localStorage.getItem("server2"); 
document.getElementById("11").value = localStorage.getItem("server3");     
document.getElementById("12").value = localStorage.getItem("server4");   
document.getElementById("13").value = localStorage.getItem("server5");   
document.getElementById("14").value = localStorage.getItem("server6");   
document.getElementById("15").value = localStorage.getItem("server7");   
document.getElementById("16").value = localStorage.getItem("server8");   
document.getElementById("17").value = localStorage.getItem("server9");   

}); 

moment();

// Displaying Current Time on jumbotron
$(".currentTime").text("Current date: " + moment().format('dddd MMMM Do YYYY, h:mm:ss a'));

// Displaying Current Day on Table Header
$(".currentDay").text(moment().format('dddd'));

var currentTime = moment().format('dddd MMMM Do YYYY, h:mm:ss a')

// Making event Handler for "Save" function
$(".btn-save1").on("click", function () {
    var currentSaveBtn = $(this).attr("data-number")
    input = $("#" + currentSaveBtn)
    console.log(input.val())
    localStorage.setItem("server", input.val());
    console.log(currentTime)
})

$(".btn-save2").on("click", function () {
    var currentSaveBtn = $(this).attr("data-number")
    input = $("#" + currentSaveBtn)
    console.log(input.val())
    localStorage.setItem("server2", input.val());
    console.log(currentTime)
})

$(".btn-save3").on("click", function () {
    var currentSaveBtn = $(this).attr("data-number")
    input = $("#" + currentSaveBtn)
    console.log(input.val())
    localStorage.setItem("server3", input.val());
    console.log(currentTime)
})

$(".btn-save4").on("click", function () {
    var currentSaveBtn = $(this).attr("data-number")
    input = $("#" + currentSaveBtn)
    console.log(input.val())
    localStorage.setItem("server4", input.val());
    console.log(currentTime)
})
$(".btn-save5").on("click", function () {
    var currentSaveBtn = $(this).attr("data-number")
    input = $("#" + currentSaveBtn)
    console.log(input.val())
    localStorage.setItem("server5", input.val());
    console.log(currentTime)
})
$(".btn-save6").on("click", function () {
    var currentSaveBtn = $(this).attr("data-number")
    input = $("#" + currentSaveBtn)
    console.log(input.val())
    localStorage.setItem("server6", input.val());
    console.log(currentTime)
})

$(".btn-save7").on("click", function () {
    var currentSaveBtn = $(this).attr("data-number")
    input = $("#" + currentSaveBtn)
    console.log(input.val())
    localStorage.setItem("server7", input.val());
    console.log(currentTime)
})
$(".btn-save8").on("click", function () {
    var currentSaveBtn = $(this).attr("data-number")
    input = $("#" + currentSaveBtn)
    console.log(input.val())
    localStorage.setItem("server8", input.val());
    console.log(currentTime)
})
$(".btn-save9").on("click", function () {
    var currentSaveBtn = $(this).attr("data-number")
    input = $("#" + currentSaveBtn)
    console.log(input.val())
    console.log(currentTime)
    localStorage.setItem("server9", input.val());
})

// Making event Handler for "Remove" Function

$(".btn-remove1").on("click", function () {
    var currentRemoveBtn = $(this).attr("data-number")
    var clearInput = $("#" + currentRemoveBtn)
    localStorage.removeItem('server')
    clearInput.val(" ")
})

$(".btn-remove2").on("click", function () {
    var currentRemoveBtn = $(this).attr("data-number")
    var clearInput = $("#" + currentRemoveBtn)
    localStorage.removeItem('server2')
    clearInput.val(" ")
})

$(".btn-remove3").on("click", function () {
    var currentRemoveBtn = $(this).attr("data-number")
    var clearInput = $("#" + currentRemoveBtn)
    localStorage.removeItem('server3')
    clearInput.val(" ")
})

$(".btn-remove4").on("click", function () {
    var currentRemoveBtn = $(this).attr("data-number")
    var clearInput = $("#" + currentRemoveBtn)
    localStorage.removeItem('server4')
    clearInput.val(" ")
})

$(".btn-remove5").on("click", function () {
    var currentRemoveBtn = $(this).attr("data-number")
    var clearInput = $("#" + currentRemoveBtn)
    localStorage.removeItem('server5')
    clearInput.val(" ")
})

$(".btn-remove6").on("click", function () {
    var currentRemoveBtn = $(this).attr("data-number")
    var clearInput = $("#" + currentRemoveBtn)
    localStorage.removeItem('server6')
    clearInput.val(" ")
})

$(".btn-remove7").on("click", function () {
    var currentRemoveBtn = $(this).attr("data-number")
    var clearInput = $("#" + currentRemoveBtn)
    localStorage.removeItem('server7')
    clearInput.val(" ")
})

$(".btn-remove8").on("click", function () {
    var currentRemoveBtn = $(this).attr("data-number")
    var clearInput = $("#" + currentRemoveBtn)
    localStorage.removeItem('server8')
    clearInput.val(" ")
})

$(".btn-remove9").on("click", function () {
    var currentRemoveBtn = $(this).attr("data-number")
    var clearInput = $("#" + currentRemoveBtn)
    localStorage.removeItem('server9')
    clearInput.val(" ")
})


// Making a var for the current hour
currentHour = moment().format('H');
console.log(currentHour)

// Make a var for each Hour

var number1 = $("#9").attr("id")
var number2 = $("#10").attr("id")
var number3 = $("#11").attr("id")
var number4 = $("#12").attr("id")
var number5 = $("#13").attr("id")
var number6 = $("#14").attr("id")
var number7 = $("#15").attr("id")
var number8 = $("#16").attr("id")
var number9 = $("#17").attr("id")

// If Hour is Past current time change colour to Red
// Else If hour is equal to current time change colour to blue
// Else If hour is ahead of current time change colour to green



if ( number1 < currentHour ) {
    $("#9").attr("style", "background-color: rgba(0, 200, 0, 0.5)");
}
else if (number1 == currentHour) {
    $("#9").attr("style", "background-color: rgba(82, 155, 255, 0.5)");
}
else if(number1 > currentHour) {
    $("#9").attr("style", "background-color: rgba(0, 200, 0, 0.5)")
}


if (number2 < currentHour) {
    $("#10").attr("style", "background-color: rgba(200, 0, 0, 0.5)");
}
else if (number2 == currentHour) {
    $("#10").attr("style", "background-color: rgba(82, 155, 255, 0.5)");
}
else {
    $("#10").attr("style", "background-color: rgba(0, 200, 0, 0.5)")
}



if (number3 < currentHour) {
    $("#11").attr("style", "background-color: rgba(200, 0, 0, 0.5)");
}
if (number3 == currentHour) {
    $("#11").attr("style", "background-color: rgba(82, 155, 255, 0.5)");
}
else {
    $("#11").attr("style", "background-color: rgba(0, 200, 0, 0.5)");
}



if (number4 < currentHour) {
    $("#12").attr("style", "background-color: rgba(200, 0, 0, 0.5)");
}
else if (number4 == currentHour) {
    $("#12").attr("style", "background-color: rgba(82, 155, 255, 0.5)");
}
else if (number4> currentHour) {
    $("#12").attr("style", "background-color: rgba(0, 200, 0, 0.5)");
}



if (number5 < currentHour) {
    $("#13").attr("style", "background-color: rgba(200, 0, 0, 0.5)");
}
else if (number5 == currentHour) {
    $("#13").attr("style", "background-color: rgba(82, 155, 255, 0.5)");
}
else if (number5 > currentHour) {
    $("#13").attr("style", "background-color: rgba(0, 200, 0, 0.5)");
}



if (number6 < currentHour) {
    $("#14").attr("style", "background-color: rgba(200, 0, 0, 0.5)");
}
else if (number6 == currentHour) {
    $("#14").attr("style", "background-color: rgba(82, 155, 255, 0.5)");
}
else if (number6 > currentHour) {
    $("#14").attr("style", "background-color: rgba(0, 200, 0, 0.5)");
}



if (number7 < currentHour) {
    $("#15").attr("style", "background-color: rgba(200, 0, 0, 0.5)");
}
else if (number7 == currentHour) {
    $("#15").attr("style", "background-color: rgba(82, 155, 255, 0.5)");
}
else if (number7 > currentHour) {
    $("#15").attr("style", "background-color: rgba(0, 200, 0, 0.5)");
}



if (number8 < currentHour) {
    $("#16").attr("style", "background-color: rgba(200, 0, 0, 0.5)");
}
else if (number8 == currentHour) {
    $("#16").attr("style", "background-color: rgba(82, 155, 255, 0.5)");
}
else if (number8 > currentHour) {
    $("#16").attr("style", "background-color: rgba(0, 200, 0, 0.5)");
}



if (number9 < currentHour) {
    $("#17").attr("style", "background-color: rgba(200, 0, 0, 0.5)");
}
else if (number9 == currentHour) {
    $("#17").attr("style", "background-color: rgba(82, 155, 255, 0.5)");
}
else if (number9 > currentHour) {
    $("#17").attr("style", "background-color: rgba(0, 200, 0, 0.5)");
}



