const user = JSON.parse(localStorage.getItem("loginUser"));

if (!user || user.role !== "admin") {
    alert("Akses ditolak!");
    window.location.href = "login.html";
}
const products = JSON.parse(localStorage.getItem("products")) || [];
const orders = JSON.parse(localStorage.getItem("orders")) || [];
const totalIncome = orders.reduce((total, order) => {
    return total + (order.total || 0);
}, 0);

document.getElementById("totalIncome").innerText =
    "Rp " + totalIncome.toLocaleString("id-ID");
const users = JSON.parse(localStorage.getItem("users")) || [];
const customers = users.filter(user => user.role === "customer");

document.getElementById("totalProduct").innerHTML = products.length;
document.getElementById("totalOrder").innerHTML = orders.length;
document.getElementById("totalCustomer").innerHTML = customers.length;
const customerList = document.getElementById("customerList");


customerList.innerHTML = "";

users.forEach(user => {
    if (user.role !== "admin") {
        customerList.innerHTML += `
            <div class="customer-card">
                <h4>${user.name}</h4>
                <p>${user.email}</p>
            </div>
        `;
    }
});

document.getElementById("logoutBtn").addEventListener("click", function(){

    localStorage.removeItem("loginUser");

    alert("Logout berhasil!");

    window.location.href = "login.html";

});