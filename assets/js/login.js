var st = false;
        function showHint() {
            if (st) {
                document.getElementById("pwd").setAttribute('type', 'password');
                document.querySelector('.icon_input-account--pwd').style.color = 'black';
                st = false;
            }
            else {
                document.getElementById("pwd").setAttribute('type', 'text');
                document.querySelector('.icon_input-account--pwd').style.color = 'white';
                st = true;
            }
        }

        // Get data
        const ListUsers = '22003405_LIST_USER';
        const userLogin = '22003405_UserLogin'
        const ListCart = '22003405_LIST_CART'

        var listUsers = JSON.parse(localStorage.getItem(ListUsers))

        console.log(listUsers)

        function checkExist() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("pwd").value;

            if (username.trim() === '' || password.trim() === '') {
                document.querySelector('.validData-username').innerHTML = 'Vui lòng nhập tên người dùng và mật khẩu!';
                document.querySelector('.validData-username').style.color = '#8a0101';
                return false;
            }

            if (!listUsers) {
                document.querySelector('.validData-username').innerHTML = 'Tài khoản không tồn tại. Vui lòng đăng ký!';
                document.querySelector('.validData-username').style.color = '#8a0101';
                return false;
            }

            var user = listUsers.find((user) => user.username === username);

            if (user) {
                if (user.password === password) {
                    document.querySelector('.validData-username').innerHTML = 'Đăng nhập thành công!';
                    document.querySelector('.validData-username').style.color = '#024b02';
                    localStorage.setItem(userLogin, JSON.stringify(user)); //tao local da dang nhap
                    return true;
                } else {
                    document.querySelector('.validData-username').innerHTML = 'Mật khẩu không chính xác. Vui lòng thử lại!';
                    document.querySelector('.validData-username').style.color = '#8a0101';
                    return false;
                }
            } else {
                document.querySelector('.validData-username').innerHTML = 'Tài khoản không tồn tại. Vui lòng đăng ký!';
                document.querySelector('.validData-username').style.color = '#8a0101';
                return false;
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

        document.querySelector(".btn-login-submit").addEventListener("click", function (e) {
            e.preventDefault();
            if (checkExist()) {
                setTimeout(() => {
                    window.location.href = '../html/home.html';
                }, 2000)
            }
        });

        updateCartQuantity();

        function updateCartQuantity() {
            var productList = JSON.parse(localStorage.getItem(ListCart)) || [];
            var totalQuantity = productList.reduce((total, product) => total + product.quantity, 0);
            var quantityElement = document.querySelector('.quantity');
            quantityElement.textContent = totalQuantity;
        }