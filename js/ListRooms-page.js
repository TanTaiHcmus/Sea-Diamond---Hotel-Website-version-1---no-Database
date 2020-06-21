var date_in = document.getElementById("date-in");
var date_out = document.getElementById("date-out");
var month_in = document.getElementById("month-in");
var month_out = document.getElementById("month-out");
var count_guests = document.getElementById("count-guests");
var count_nights = document.getElementById("count-nights");

const arrMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dateOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var divMonth;

$(document).click(function(e) {
    var container = $(".month");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $("#table-month").hide();
    } else {
        $("#table-month").show();
        var monthType = e.target.getAttribute("id");
        divMonth = document.getElementById(monthType);
    }
});

function changePositionMonthTable() {
    var size = window.innerWidth;
    var percent;
    if (size < 768) {
        percent = "23%";
    } else if (size < 992) {
        percent = "30%";
    } else if (size < 1200) {
        percent = "2%";
    } else {
        percent = "4.5%";
    }
    $("#table-month").css("left", percent);
}

$("#table-month div").click(function(e) {
    divMonth.innerHTML = e.target.innerHTML;
})

$(document).ready(function() {
    var date = new Date();
    date_in.innerHTML = date.getDate();
    date_out.innerHTML = date.getDate();
    month_in.innerHTML = arrMonth[date.getMonth()];
    month_out.innerHTML = arrMonth[date.getMonth()];
    $("#table-month").hide();
    changePositionMonthTable();
})

function upNumber(element) {
    var object = element.parentElement;
    var number = object.getElementsByClassName("number");
    var dataDate = number[0].innerHTML;
    if (dataDate > 0) {
        number[0].innerHTML = dataDate - 1;
    }
}

function downNumber(element) {
    var object = element.parentElement;
    var number = object.getElementsByClassName("number");
    var dataDate = number[0].innerHTML;
    dataDate++;
    var month = object.getElementsByClassName("month");
    if (month.length > 0) {
        var dataMonth = arrMonth.indexOf(month[0].innerHTML);
        if (dataDate > dateOfMonth[dataMonth]) {
            dataDate = 1;
            dataMonth++;
            if (dataMonth > 11) {
                dataMonth = 0;
            }
        }
        month[0].innerHTML = arrMonth[dataMonth];
    }
    number[0].innerHTML = dataDate;
}

function toRoomDetail() {
    window.location = "../pages/RoomDetail.html";
}

$(window).resize(function() {
    changePositionMonthTable();
})