console.log(document.getElementById("checkout-form"));
console.log(document.getElementById("checkout-total"));
console.log(document.getElementById("checkout-items"));
const cart = JSON.parse(localStorage.getItem("cart")) || [];

const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
}, 0);
const checkoutItems = document.getElementById("checkout-items");

checkoutItems.innerHTML = "";

cart.forEach(item => {

    checkoutItems.innerHTML += `

    <div class="cart-item">

        <img src="${item.image}" alt="${item.name}" class="cart-image">

        <div class="cart-info">

            <h3>${item.name}</h3>

            <p>⭐⭐⭐⭐⭐ 4.9</p>

            <p>Kategori : ${item.category}</p>

            <h2>Rp ${item.price.toLocaleString("id-ID")}</h2>

            <p>Jumlah : ${item.quantity}</p>

        </div>

    </div>

    `;

});

document.getElementById("checkout-total").innerHTML =
    "Total Pembayaran : Rp " + total.toLocaleString("id-ID");

const form = document.getElementById("checkout-form");

form.addEventListener("submit", function(e){
    alert("Submit berhasil dipanggil");

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const payment = document.querySelector('input[name="payment"]:checked');

    if(
    name==="" ||
    email==="" ||
    phone==="" ||
    address==="" ||
    payment === null
){
    alert("Semua data harus diisi!");
    return;
}
    if(cart.length === 0){
        alert("Keranjang masih kosong!");
        return;
    }
const paymentMethod = payment.value;
console.log(paymentMethod);
// Simpan pesanan ke localStorage
let orders = JSON.parse(localStorage.getItem("orders")) || [];

orders.push({
    id: Date.now(),
    customer: name,
    email: email,
    phone: phone,
    address: address,
    payment: paymentMethod,
    items: cart,
    total: total,
    status: "Diproses",
    date: new Date().toLocaleString("id-ID")
});
let products = JSON.parse(localStorage.getItem("products")) || [];

cart.forEach(item => {
    const product = products.find(p => p.id === item.id);

    if (product) {
        product.stock -= item.quantity;
    }
});

localStorage.setItem("products", JSON.stringify(products));
localStorage.setItem("orders", JSON.stringify(orders));
    alert(`🎉 Pembayaran Berhasil!

Terima kasih ${name}.
Pesanan Anda sedang diproses.`);

    localStorage.removeItem("cart");

    window.location.href = "success.html";

});
const paymentCategory = document.getElementById("paymentCategory");
const paymentOptions = document.getElementById("paymentOptions");

paymentCategory.addEventListener("change", function () {

    let html = "";

    if (this.value === "ewallet") {
        html = `
        <label class="payment-item">
            <input type="radio" name="payment" value="DANA">
            <img src="images/payment/dana.png">
            <span>DANA</span>
        </label>

        <label class="payment-item">
            <input type="radio" name="payment" value="GoPay">
            <img src="images/payment/gopay.png">
            <span>GoPay</span>
        </label>

        <label class="payment-item">
            <input type="radio" name="payment" value="OVO">
            <img src="images/payment/ovo.png">
            <span>OVO</span>
        </label>

        <label class="payment-item">
            <input type="radio" name="payment" value="ShopeePay">
            <img src="images/payment/shopeepay.png">
            <span>ShopeePay</span>
        </label>
        `;
    }

    else if (this.value === "bank") {
        html = `
        <label class="payment-item">
            <input type="radio" name="payment" value="BCA">
            <img src="images/payment/bca.png">
            <span>BCA</span>
        </label>

        <label class="payment-item">
            <input type="radio" name="payment" value="Mandiri">
            <img src="images/payment/mandiri.png">
            <span>Mandiri</span>
        </label>
        `;
    }

    else if (this.value === "qris") {
        html = `
        <label class="payment-item">
            <input type="radio" name="payment" value="QRIS">
            <img src="images/payment/qris.png">
            <span>QRIS</span>
        </label>
        `;
    }

    else if (this.value === "cod") {
        html = `
        <label class="payment-item">
            <input type="radio" name="payment" value="COD">
            <img src="images/payment/cod.png">
            <span>COD </span>
        </label>
        `;
    }

    paymentOptions.innerHTML = html;

});