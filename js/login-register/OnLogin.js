var loginUsername = document.getElementById('log-username')
var loginPassword = document.getElementById('log-password')
loginUsername.addEventListener('keyup', removeLabel)
loginPassword.addEventListener('keyup', removeLabel)
function removeLabel()
{
    
    var label = document.getElementById('label-notify')
    if(label!=null)
        label.style.display='none'
}
document.getElementById('log').onsubmit = function() {
    var users = JSON.parse(localStorage.getItem('users')) || [];

    var username = document.getElementById('log-username').value;
    var password = document.getElementById('log-password').value;

    if(checkLogin(users, username, password)) {
        console.log('check ok')
        var notify =document.getElementById('notify-guest')
        if(notify!=null)
            notify.style.display='none'
            
        setCookie("session", username, 30);
        document.getElementById('log-cancel').click();
        location.reload(true);
    }
    else {
        console.log('check fail')
        var label = document.getElementById('label-notify')
        if(label!=null)
            label.style.display= 'inline'
    }
}

function checkLogin(users, username, password) {
    for(var i=0; i<users.length; i++) {
        if(users[i]['username']===username) {
            if(users[i]['password']===password) {
                return true;
            }
        }
    }
    return false;
}

function setCookie(cookieName, username, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cookieName + '=' + username + ';' + expires + ";path=/";
}
