var dropDownHTML = '';
// console.log(window.location.pathname)
window.onload = function() {
    if(checkCookie()) {
        document.getElementById('login-btn').innerHTML = dropDownHTML;
        // For booking page
        var notify =document.getElementById('notify-guest')
        if(notify!=null)
            notify.style.display='none'
        
        document.getElementById('logout-btn').addEventListener('click', function() {
            document.cookie = 'session=' + ';' + 'expires=' + ";path=/";
            var pathLocation = (window.location).toString();
            if(pathLocation.includes('User.html')==true){
                pathLocation= pathLocation.replace('User.html','Home-page.html')
                window.location.replace(pathLocation)
            }
            else location.reload();
        });
    }
    else{
        // For user page
        // if not login
        var pathLocation = (window.location).toString();
        if(pathLocation.includes('User.html')==true){
            pathLocation= pathLocation.replace('User.html','Home-page.html')
            window.location.replace(pathLocation)
        }
    }
}

function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("session");
    if(user != "") {
        dropDownHTML = createDropDown(user);
        return true;
    }

    return false;
}

function createDropDown(username) {
    var userDropDown = '<div class="btn-group">\
        <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + username +'</button>\
        <div class="dropdown-menu">\
        <a class="dropdown-item" href="../pages/User.html">Profile</a>\
        <a class="dropdown-item" href="#">Booking history</a>\
        <div class="dropdown-divider"></div>\
        <button id="logout-btn" class="dropdown-item" href="#">Log out</button>\
        </div>\
        </div>';
    
    return userDropDown;
}


window.onscroll = function() {
    setNavbarFixed();
};


var navbar = document.getElementById('content');
var sticky = navbar.offsetTop;

function setNavbarFixed() {
    if(window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        document.getElementsByClassName("main-content")[0].style.marginTop = `${navbar.clientHeight}px`;
        document.getElementById("content").style.boxShadow = '-1px 14px 37px -4px rgba(18,38,58,1)'
    }
    else {
        navbar.classList.remove("sticky");
        document.getElementsByClassName("main-content")[0].style.marginTop = '0px';
        document.getElementById("content").style.boxShadow = 'none'
    }
}