const orders = JSON.parse(localStorage.getItem("orders")) || [];

const ordersList = document.getElementById("ordersList");

if (orders.length === 0) {

    ordersList.innerHTML = `
        <p style="text-align:center;">
            📦 Belum ada riwayat pesanan.
        </p>
    `;

} else {

    orders.forEach(order => {

        let items = "";

        order.items.forEach(item => {
            items += `
                <li>
                    ${item.name} (${item.quantity}x)
                </li>
            `;
        });

        ordersList.innerHTML += `

        <div class="order-card">

            <h3>Pesanan #${order.id}</h3>

            <p><strong>Tanggal:</strong> ${order.date}</p>

            <p><strong>Status:</strong> ${order.status}</p>

            <p><strong>Pembayaran:</strong> ${order.payment}</p>

            <p><strong>Total:</strong> Rp ${order.total.toLocaleString("id-ID")}</p>

            <p><strong>Produk:</strong></p>

            <ul>
                ${items}
            </ul>

        </div>

        `;

    });

}