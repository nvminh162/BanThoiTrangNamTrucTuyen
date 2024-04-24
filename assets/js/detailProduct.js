const keys = "22003405_LIST_CART"

function changeColor(button) {
    if (button.classList.contains('btn-black')) {
        button.classList.remove('btn-black');
    } else {
        button.classList.add('btn-black');
    }
}

// Tang giam quantity
function increaseQuantity() {
    var quantityLabel = document.getElementById("quantity-label");
    var currentQuantity = parseInt(quantityLabel.textContent);
    quantityLabel.textContent = currentQuantity + 1;
}

function decreaseQuantity() {
    var quantityLabel = document.getElementById("quantity-label");
    var currentQuantity = parseInt(quantityLabel.textContent);
    if (currentQuantity > 1) {
        quantityLabel.textContent = currentQuantity - 1;
    }
}

document.querySelector('.btn-cart').addEventListener('click', (event) => {
    // kiem tra chon size
    var selectedSize = document.querySelector('.btn-black');
    if (!selectedSize) {
        event.preventDefault();
        alert("Vui lòng chọn một size trước khi thêm vào giỏ hàng.");
        return;
    }

    var productImage = document.querySelector('.detail-product-img').getAttribute("src").replace("../", "");
    var productName = document.querySelector('.detail-product-title').innerText;
    var productPriceText = document.querySelector('.detail-product-price').innerText;
    var productPrice = parseFloat(productPriceText.replace("đ", "").replace(/,/g, ""));
    var productQuantityText = document.querySelector('.detail-product-quantity').innerText;
    var productQuantity = parseInt(productQuantityText);
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
        productList[existingProductIndex].quantity += productQuantity;
        productList[existingProductIndex].totalPrice += totalPrice;
    } else {
        // san pham chua co thi day vao object
        productList.push(product);
    }

    localStorage.setItem(keys, JSON.stringify(productList));

    updateCartQuantity();
})

updateCartQuantity();

function updateCartQuantity() {
    var productList = JSON.parse(localStorage.getItem(keys)) || [];
    var totalQuantity = productList.reduce((total, product) => total + product.quantity, 0);
    var quantityElement = document.querySelector('.quantity');
    quantityElement.textContent = totalQuantity;
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
window.onload = checkLogin;

document.querySelector('.offcanvas-body button').addEventListener('click', (event) => {
    window.location.href = '../../html/404.html';
});