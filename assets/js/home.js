document.addEventListener("DOMContentLoaded", () => {
    // alert
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

    // add to local

    const keys = "22003405_LIST_CART"
    var addToCartButtons = document.querySelectorAll(".product_icon--cart");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // alert
            appendAlert('Đã thêm sản phẩm vào giỏ hàng', 'info')
            var productImage = this.closest(".product-card").querySelector(".card-img-top").getAttribute("src");
            var productName = this.closest(".product-card").querySelector(".card-title").innerText;
            var productPriceText = this.closest(".product-card").querySelector(".product-price").innerText;
            var productPrice = parseFloat(productPriceText.replace("đ", "").replace(/,/g, ""));
            var productQuantity = 1;
            var totalPrice = productPrice * productQuantity;

            var product = {
                image: productImage,
                name: productName,
                price: productPrice,
                quantity: productQuantity,
                totalPrice: totalPrice
            };

            var productList = JSON.parse(localStorage.getItem(keys)) || [];
            var existingProductIndex = productList.findIndex((item) => item.name === productName);

            if (existingProductIndex !== -1) {
                // san pham neu ton thi tang so luong
                productList[existingProductIndex].quantity++;
                productList[existingProductIndex].totalPrice = productList[existingProductIndex].quantity * productPrice;
            } else {
                // san pham chua co thi day vao object
                productList.push(product);
            }

            localStorage.setItem(keys, JSON.stringify(productList));

            updateCartQuantity();
        });
    });

    updateCartQuantity();

    function updateCartQuantity() {
        var productList = JSON.parse(localStorage.getItem(keys)) || [];
        var totalQuantity = productList.reduce((total, product) => total + product.quantity, 0);
        var quantityElement = document.querySelector('.quantity');
        quantityElement.textContent = totalQuantity;
    }
});
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
window.onload = checkLogin;

document.querySelector('.btn-logout').addEventListener('click', (e) => {
    alert("Đã đăng xuất")
    localStorage.removeItem(key_UserLogin)
})