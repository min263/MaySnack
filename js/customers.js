let users = JSON.parse(localStorage.getItem("users")) || [];

const customerList = document.getElementById("customerList");

customerList.innerHTML = "";

const customers = users.filter(user => user.role !== "admin");

if (customers.length === 0) {
    customerList.innerHTML = "<p>Belum ada customer.</p>";
} else {
    customers.forEach(user => {
        customerList.innerHTML += `
            <div class="customer-card">
                <h3>${user.name}</h3>
                <p>Email : ${user.email}</p>
            </div>
        `;
    });
}