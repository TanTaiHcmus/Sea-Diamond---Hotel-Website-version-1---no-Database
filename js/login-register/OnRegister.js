var registerPassword = document.getElementById("reg-password");
var registerConfirm = document.getElementById("reg-confirm");
registerPassword.addEventListener("keyup", validatePassword);
registerConfirm.addEventListener("keyup", validateConfirm);

var registerMail = document.getElementById("reg-email");
registerMail.addEventListener("keyup", function () {
  // console.log('reg mail')
  var labelInvalidMail = document.getElementById("label-email-wrong");
  if (registerMail.value.length == 0)
    setDisplayElement(labelInvalidMail, "none");
  else {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (registerMail.value.match(mailFormat))
      setDisplayElement(labelInvalidMail, "none");
    else {
      setDisplayElement(labelInvalidMail, "inline");
    }
  }
});

function validateConfirm() {
  var labelNotify = document.getElementById("not-match-form");
  if(registerConfirm.value.length==0)
    setDisplayElement(labelNotify, "none");
  if (registerConfirm.value != registerPassword.value ) {
    setDisplayElement(labelNotify, "inline");
    return false;
  } else {
    setDisplayElement(labelNotify, "none");
  }
  return true;
}

function validatePassword() {
  var labelValid = document.getElementById("valid-pwd-form");
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;

  if (registerPassword.value.match(re) || registerPassword.value.length==0) {
    setDisplayElement(labelValid, "none");
    return true;
  } else {
    setDisplayElement(labelValid, "inline");
    return false;
  }
}

document.getElementById("reg").onsubmit = function () {
  var users = JSON.parse(localStorage.getItem("users")) || [];

  var email = document.getElementById("reg-email").value;
  var username = document.getElementById("reg-username").value;
  var password = document.getElementById("reg-password").value;
  // var confirm = document.getElementById('reg-confirm').value;

  if (checkRegister(users, email, username)) {
    var user = {
      email: email,
      username: username,
      password: password,
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("bk-to-lg").click();
  }
};

function checkRegister(users, email, username) {
  for (var i = 0; i < users.length; i++) {
    if (users[i]["email"] === email) {
      var labelEmail = document.getElementById("label-email");
      setDisplayElement(labelEmail, "inline");
      return false;
    } else if (users[i]["username"] === username) {
      var labelUser = document.getElementById("label-username");
      setDisplayElement(labelUser, "inline");
      return false;
    }
  }

  return true;
}

function setDisplayElement(element, property) {
  element.style.display = property;
}
function setHeightElement(element, height) {
  var heightInPx = height + "px";
  element.style.height = heightInPx;
}
