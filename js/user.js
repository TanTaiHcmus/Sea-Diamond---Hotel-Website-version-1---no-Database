var tabInformation = document.getElementsByClassName('infor-tab')[0]
var tabPassword = document.getElementsByClassName('pwd-tab')[0]
var rightSideInfor = document.getElementsByClassName('on-infor')[0]
var rightSidePwd = document.getElementsByClassName('on-pwd')[0]
var btnChangePhoto = document.getElementsByClassName('btn-change')[0]
var tabHistory = document.getElementsByClassName('history-tab')[0]
var rightSideHistory = document.getElementsByClassName('on-history')[0]
tabInformation.addEventListener('click', showInformationTab)
tabPassword.addEventListener('click', showPasswordTab)
tabHistory.addEventListener('click',showHistoryTab)
var optionMonth = document.getElementById('inputMonthDOB')
optionMonth.addEventListener('change', defineDay, false)
var optionYear = document.getElementById('inputYearDOB')
optionYear.addEventListener('change', defineDay, false)

var newPassword = document.getElementById('inputNewPwd')
var confirmPassword = document.getElementById('inputConfirmNew')
confirmPassword.addEventListener('keyup', validateConfirm)
newPassword.addEventListener('keyup', validatePassword)

function validateConfirm() {
    var labelNotify = document.getElementById('not-match')

    if (confirmPassword.value != newPassword.value) {
        labelNotify.style.display = 'inline'
        // console.log('false confirm')
        return false
    } else labelNotify.style.display = 'none'
    // console.log('true confirm')

    return true

}

function validatePassword() {
    var labelValid = document.getElementById('valid-pwd')
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
    if (newPassword.value.match(re)) {
        labelValid.style.display = 'none'
        // console.log('true pwd')

        return true
    } else {
        labelValid.style.display = 'inline'
        // console.log('false pwd')

        return false
    }
}

function changeNewAvatar() {
    $('#myImage').trigger('click')
        // upload to Server
        // change link avatar
}
btnChangePhoto.addEventListener('click', changeNewAvatar)

var userInformation = {
    name: 'Sea Diamond',
    email: 'example@example.com',
    phone: '0954124758',
    gender: 'male',
    isActivate: true,
    DOB: 8,
    MOB: 8,
    YOB: 1999
}
render()

function render() {
    createOption()
    loadDataFromServer()
    setDataToShow()

}

function createOption() {
    createOptionForDay(31)
    createOptionForYear()
}

function createOptionForDay(nbOfDays) {
    $('#inputDayDOB').find('option').remove().end()
    var optionDay = document.getElementById('inputDayDOB')
    for (i = 1; i <= nbOfDays; ++i) {
        var text = `<option value="${i}">${i}</option>`
        optionDay.insertAdjacentHTML('beforeend', text)
    }
}

function defineDay() {
    var month = optionMonth.value
    if (month == undefined) return 31
    var Days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var year = optionYear.value
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        Days[1] += 1
    createOptionForDay(Days[month - 1])

}

function createOptionForYear() {
    var optionYear = document.getElementById('inputYearDOB')
    for (i = 2020; i >= 1900; --i) {
        var text = `<option value="${i}">${i}</option>`
        optionYear.insertAdjacentHTML('beforeend', text)
    }
}

function loadDataFromServer() {
    // Get data from server and storage in variable: userInformation

}

function selectElement(id, valueToSelect) {
    let element = document.getElementById(id);
    element.value = valueToSelect;
}

function setDataToShow() {
    var customerName = document.getElementById('inputName');
    var customerEmail = document.getElementById('inputEmail');
    var customerPhone = document.getElementById('inputPhone');
    customerName.value = userInformation.name
    customerEmail.value = userInformation.email
    customerPhone.value = userInformation.phone
    selectElement('inputDayDOB', userInformation.DOB.toString())
    selectElement('inputMonthDOB', userInformation.MOB.toString())
    selectElement('inputYearDOB', userInformation.YOB.toString())
    if (userInformation.isActivate)
        customerEmail.parentElement.lastElementChild.style.display = 'none'
}

// /Listener
function showInformationTab() {

    if (!tabInformation.classList.contains('on-showing')) {
        tabInformation.classList.add('on-showing')

    }
    if (tabPassword.classList.contains('on-showing')) {
        tabPassword.classList.remove('on-showing')
    }
    if (tabHistory.classList.contains('on-showing')) {
        tabHistory.classList.remove('on-showing')
    }
    if (!rightSidePwd.classList.contains('not-show')) {
        // rightSideInfor.classList.remove('not-show')
        $('.on-pwd').fadeOut('slow', function() {
            rightSidePwd.classList.add('not-show')
        })
    }
    if (!rightSideHistory.classList.contains('not-show')) {
        // rightSideInfor.classList.remove('not-show')
        $('.on-history').fadeOut('slow', function() {
            rightSideHistory.classList.add('not-show')
        })
    }
    if (rightSideInfor.classList.contains('not-show')) {
        // rightSidePwd.classList.add('not-show')
        $('.on-infor').fadeIn('slow', function() {
            rightSideInfor.classList.remove('not-show')

        })
    }
    newPassword.value = ''
    confirmPassword.value = ''
    // validatePassword()
}

function showPasswordTab() {

    if (!tabPassword.classList.contains('on-showing')) {
        tabPassword.classList.add('on-showing')
    }
    if (tabInformation.classList.contains('on-showing')) {
        tabInformation.classList.remove('on-showing')
    }
    if (tabHistory.classList.contains('on-showing')) {
        tabHistory.classList.remove('on-showing')
    }
    if (!rightSideInfor.classList.contains('not-show')) {
        $('.on-infor').fadeOut('slow', function() {
            // console.log('b')
            rightSideInfor.classList.add('not-show')
        })
    }
    if (!rightSideHistory.classList.contains('not-show')) {
        $('.on-history').fadeOut('slow', function() {
            // console.log('b')
            rightSideHistory.classList.add('not-show')
        })
    }
    if (rightSidePwd.classList.contains('not-show')) {
        // rightSideInfor.classList.add('not-show')
        $('.on-pwd').fadeIn('slow', function() {
            rightSidePwd.classList.remove('not-show')
        })
    }
   
}
function showHistoryTab(){
    if (!tabHistory.classList.contains('on-showing')) {
        tabHistory.classList.add('on-showing')
    }
    if (tabInformation.classList.contains('on-showing')) {
        tabInformation.classList.remove('on-showing')
    }
    if (tabPassword.classList.contains('on-showing')) {
        tabPassword.classList.remove('on-showing')
    }
    if (!rightSidePwd.classList.contains('not-show')) {
        $('.on-pwd').fadeOut('slow', function() {
            // console.log('b')
            rightSidePwd.classList.add('not-show')
        })
    }
    if (!rightSideInfor.classList.contains('not-show')) {
        $('.on-infor').fadeOut('slow', function() {
            // console.log('b')
            rightSideInfor.classList.add('not-show')
        })
    }

    if (rightSideHistory.classList.contains('not-show')) {
        // rightSideInfor.classList.add('not-show')
        $('.on-history').fadeIn('slow', function() {
            rightSideHistory.classList.remove('not-show')
        })
    }
}
var usernameData = document.getElementById('inputName')
usernameData.addEventListener('keyup', function() {
    if (!usernameData.value)
        usernameData.parentElement.lastElementChild.style.display = 'inline'
    else
        usernameData.parentElement.lastElementChild.style.display = 'none'
})

var buttonUpdate = document.getElementsByClassName('btn-update-inf')[0]
buttonUpdate.addEventListener('click', updateUserInformation)
var buttonChangePwd = document.getElementsByClassName('btn-change-pwd')[0]
buttonChangePwd.addEventListener('click', changePassword)

function updateUserInformation() {
    console.log('btn update clicked')

    // send to server

    // if ok
    $("#notifyUpdate").modal({ show: true });


}

function changePassword() {
    console.log('btn update clicked')

    // send to server

    //if ok
    if (validateConfirm() && validatePassword()) {
        newPassword.value = ''
        confirmPassword.value = ''
        $("#notifyChangePwd").modal({ show: true });
    }
}