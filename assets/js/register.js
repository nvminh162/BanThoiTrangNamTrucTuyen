// PASSWORD SHOW
var st1 = false;
function showHint_1() {
    if (st1) {
        document.getElementById("pwd_1").setAttribute('type', 'password');
        document.querySelector('.icon_input-account--pwd_1').style.color = 'black';
        st1 = false;
    }
    else {
        document.getElementById("pwd_1").setAttribute('type', 'text');
        document.querySelector('.icon_input-account--pwd_1').style.color = 'white';
        st1 = true;
    }
}
// 
var st2 = false;
function showHint_2() {
    if (st2) {
        document.getElementById("pwd_2").setAttribute('type', 'password');
        document.querySelector('.icon_input-account--pwd_2').style.color = 'black';
        st2 = false;
    }
    else {
        document.getElementById("pwd_2").setAttribute('type', 'text');
        document.querySelector('.icon_input-account--pwd_2').style.color = 'white';
        st2 = true;
    }
}
// ****************************************************
// Valid data

//alert message
const alertPlaceholder = document.querySelector('.liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
    setTimeout(() => {
        wrapper.style.display = 'none';
    }, 3000);
}

// regex area
function checkUsername() {
    var value = document.getElementById("username").value
    var regex = /^[a-zA-Z0-9_]{4,16}$/;
    var validText = 'Username: chỉ chứa các chữ cái và số và phải dài từ 6 đến 16 ký tự! (VD : admin)'

    if (!regex.test(value)) {
        document.querySelector('.validData-username').innerHTML = validText
        appendAlert(validText, 'danger')
        return false;
    } else {
        document.querySelector('.validData-username').innerHTML = '';
        return true;
    }
}

function checkPassword1() {
    var value = document.getElementById("pwd_1").value
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var validText = 'Mật khẩu: Tối thiểu 8 ký tự, ít nhất một chữ cái và một số! (VD : admin123)'

    if (!regex.test(value)) {
        document.querySelector('.validData-password1').innerHTML = validText
        appendAlert(validText, 'danger')
        return false;
    } else {
        document.querySelector('.validData-password1').innerHTML = '';
        return true;
    }
}

function checkPassword2() {
    var value = document.getElementById("pwd_1").value
    var value2 = document.getElementById("pwd_2").value
    var validText = 'Xác nhận mật khẩu: Mật khẩu không trùng nhau!'

    if (value !== value2) {
        document.querySelector('.validData-password2').innerHTML = validText
        appendAlert(validText, 'danger')
        return false;
    } else {
        document.querySelector('.validData-password2').innerHTML = '';
        return true;
    }
}

function checkName() {
    var value = document.getElementById("name").value
    var regex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/;
    var validText = 'Họ và tên: Vui lòng nhập tên không dấu (VD : Nguyen Van Minh)'

    if (!regex.test(value)) {
        document.querySelector('.validData-name').innerHTML = validText
        appendAlert(validText, 'danger')
        return false;
    } else {
        document.querySelector('.validData-name').innerHTML = '';
        return true;
    }
}

function checkPhoneNumber() {
    var value = document.getElementById("telephone").value
    var regex = /^(0\d{9})$/;
    var validText = 'Số điện thoại: Số điện thoại không hợp lệ (VD : 0353999798)'

    if (!regex.test(value)) {
        document.querySelector('.validData-phoneNumber').innerHTML = validText
        appendAlert(validText, 'danger')
        return false;
    } else {
        document.querySelector('.validData-phoneNumber').innerHTML = '';
        return true;
    }
}

function checkEmail() {
    var value = document.getElementById("email").value
    var regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$/;
    var validText = 'Email: Email không hợp lệ (VD : nvminh162@gmail.com)'

    if (!regex.test(value)) {
        document.querySelector('.validData-email').innerHTML = validText
        appendAlert(validText, 'danger')
        return false;
    } else {
        document.querySelector('.validData-email').innerHTML = '';
        return true;
    }
}

function checkBirthDate() {
    var value = document.getElementById("birthdate").value
    var validText = 'Ngày sinh: Ngày sinh không hợp lệ trên (18+)'

    if (!value) {
        document.querySelector('.validData-birthdate').innerHTML = validText
        appendAlert(validText, 'danger')
        return false;
    }

    var inputDate = new Date(value);
    var today = new Date();
    today.setFullYear(today.getFullYear() - 18);


    if (inputDate >= today) {
        document.querySelector('.validData-birthdate').innerHTML = validText
        appendAlert(validText, 'danger')
        return false;
    } else {
        document.querySelector('.validData-birthdate').innerHTML = '';
        return true;
    }
}

function checkAddress() {
    var value = document.getElementById("address").value
    var regex = /^[a-zA-Z0-9\s,/'-]+$/;
    var validText = 'Địa chỉ: Address không hợp lệ (12 Nguyen Van Bao P4 GV HCM)'

    if (!regex.test(value)) {
        document.querySelector('.validData-address').innerHTML = validText
        appendAlert(validText, 'danger')
        return false;
    } else {
        document.querySelector('.validData-address').innerHTML = '';
        return true;
    }
}

function CheckGender() {
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var validText = 'Giới tính: không hợp lệ'
    if (!male.checked && !female.checked) {
        document.querySelector('.validData-gender').innerHTML = validText
        appendAlert(validText, 'danger')
        return false;
    } else {
        document.querySelector('.validData-gender').innerHTML = '';
        return true;
    }
}
// *******************************************************
function checkAll() {
    var isValid = true;
    isValid = checkUsername() && isValid;
    isValid = checkPassword1() && isValid;
    isValid = checkPassword2() && isValid;
    isValid = checkName() && isValid;
    isValid = checkPhoneNumber() && isValid;
    isValid = checkEmail() && isValid;
    isValid = checkBirthDate() && isValid;
    isValid = CheckGender() && isValid;
    isValid = checkAddress() && isValid;
    return isValid;
}
// ********************************************************
const ListUsers = '22003405_LIST_USER';

var users = JSON.parse(localStorage.getItem(ListUsers)) || [];

function registerUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('pwd_1').value;
    var name = document.getElementById('name').value;
    var phoneNumber = document.getElementById('telephone').value;
    var email = document.getElementById('email').value;
    var birthdate = document.getElementById('birthdate').value;
    var gender = document.querySelector('input[name="gender"]:checked').nextElementSibling.textContent.trim();
    var address = document.getElementById('address').value;

    var user = {
        username: username,
        password: password,
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        birthdate: birthdate,
        gender: gender,
        address: address
    };

    users.push(user)

    localStorage.setItem(ListUsers, JSON.stringify(users));
}

function checkUserExists() {
    var validText = 'Username: Người dùng đã tồn tại'
    var username = document.getElementById("username").value
    var isExist = users.some((user) => {
        return user.username === username
    });

    if (isExist) {
        appendAlert(validText, 'danger');
        document.querySelector('.validData-username').innerHTML = validText
        return false;
    } else {
        appendAlert("Đăng ký thành công", 'success');
        document.querySelector('.validData-username').innerHTML = 'Đăng ký thành công';
        document.querySelector('.validData-username').style.color = '#024b02';
        return true;
    }
}

const key_UserLogin = "22003405_UserLogin"
function checkLogin() {
    const loginData = localStorage.getItem(key_UserLogin);
    if (loginData) {
        document.querySelector('.btn-logout').classList.remove('d-none');
        document.querySelector('.btn-login').classList.add('d-none');
        document.querySelector('.btn-register').classList.add('d-none');
    } else {
        document.querySelector('.btn-logout').classList.add('d-none');
        document.querySelector('.btn-login').classList.remove('d-none');
        document.querySelector('.btn-register').classList.remove('d-none');

    }
}
checkLogin();

document.querySelector(".btn-register-submit").addEventListener("click", function (e) {
    e.preventDefault();
    if (checkAll() && checkUserExists()) {
        registerUser();
        setTimeout(() => {
            window.location.href = "../html/login.html";
        }, 3000)
    }
});

const ListCart = "22003405_LIST_CART"
function updateCartQuantity() {
    var productList = JSON.parse(localStorage.getItem(ListCart)) || [];
    var totalQuantity = productList.reduce((total, product) => total + product.quantity, 0);
    var quantityElement = document.querySelector('.quantity');
    quantityElement.textContent = totalQuantity;
}
updateCartQuantity();