var date_in = document.getElementById("date-in");
var date_out = document.getElementById("date-out");
var month_in = document.getElementById("month-in");
var month_out = document.getElementById("month-out");
var count_guests = document.getElementById("count-guests");
var count_nights = document.getElementById("count-nights");
var room_detail_1 = document.getElementById("room-detail-1");
var room_detail_2 = document.getElementById("room-detail-2");
var list_tab = document.querySelectorAll("#menu .nav-item .nav-link");
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

$("#table-month div").click(function(e) {
    divMonth.innerHTML = e.target.innerHTML;
})

$(document).ready(function() {
    changeMenuStyle();
    var date = new Date();
    date_in.innerHTML = date.getDate();
    date_out.innerHTML = date.getDate();
    month_in.innerHTML = arrMonth[date.getMonth()];
    month_out.innerHTML = arrMonth[date.getMonth()];
    $("#table-month").hide();
    changePositionMonthTable();
})

$(window).resize(function() {
    changeMenuStyle();
    changePositionMonthTable();
})

function changeMenuStyle() {
    var object = document.getElementById("list-tab-room-detail");
    var nav_item = document.getElementById("menu").getElementsByClassName("nav-item");
    var size = window.innerWidth;
    if (size <= 992) {
        object.style.display = "inline-block";
        for (i = 1; i < nav_item.length; i++)
            nav_item[i].style.display = "none";
    } else {
        object.style.display = "none";
        for (i = 1; i < nav_item.length; i++)
            nav_item[i].style.display = "inline-block";
    }
}

function changePositionMonthTable() {
    var size = window.innerWidth;
    var left;
    var top;
    if (size < 576) {
        left = "21%";
        top = "1790px";
    } else if (size < 768) {
        left = "21%";
        top = "1630px";

    } else if (size < 992) {
        left = "30%";
        top = "1630px";
    } else if (size < 1200) {
        left = "64%";
        top = "730px";
    } else {
        left = "67%";
        top = "730px";
    }
    $("#table-month").css({ "left": left, "top": top });
}

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

function changeTabRoomDetail(element) {
    var content = element.innerHTML;
    for (i = 1; i < list_tab.length; i++) {
        if (list_tab[i].innerHTML != content) {
            list_tab[i].setAttribute("class", "nav-link");
        } else {
            list_tab[i].setAttribute("class", "nav-link active");
        }
    }
    if (element.innerHTML == "ROOM REVIEW") {
        room_detail_1.style.display = "none";
        room_detail_2.style.display = "block";
    } else {
        room_detail_1.style.display = "block";
        room_detail_2.style.display = "none";
    }
}

function toBooking() {
    window.location = "../pages/Booking.html";
}

function toOtherRoom() {
    window.location = "#";
}

function likeComment(element) {
    if (element.getAttribute("style") == "font-weight: bold")
        element.setAttribute("style", "");
    else
        element.setAttribute("style", "font-weight: bold");
}

function replyComment(element) {
    var parentNode = element.parentElement.parentElement;
    var comment = parentNode.querySelector("input");
    comment.focus();
}

function fillStar(element) {
    $(element).attr("class", "button icon-star fas fa-star");
    $(element).prevAll().attr("class", "button icon-star fas fa-star");
    $(element).nextAll().attr("class", "button icon-star far fa-star");
}