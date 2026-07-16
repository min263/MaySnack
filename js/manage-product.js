let products = JSON.parse(localStorage.getItem("products")) || [];

const list = document.getElementById("product-list");

tampilkanProduk();

function tampilkanProduk() {

    list.innerHTML = "";

    products.forEach((item, index) => {

        list.innerHTML += `
        <tr>
            <td>${item.name}</td>
            <td>Rp ${item.price.toLocaleString("id-ID")}</td>

            <td>
                <button onclick="ubahStok(${index},-1)">➖</button>
                <b>${item.stock}</b>
                <button onclick="ubahStok(${index},1)">➕</button>
            </td>

            <td>
                <button onclick="hapus(${index})">🗑️</button>
            </td>
        </tr>
        `;
    });

}

function ubahStok(index, jumlah){

    products[index].stock += jumlah;

    if(products[index].stock < 0){
        products[index].stock = 0;
    }

    localStorage.setItem("products", JSON.stringify(products));

    tampilkanProduk();

}

function hapus(index){

    if(confirm("Hapus produk ini?")){

        products.splice(index,1);

        localStorage.setItem("products", JSON.stringify(products));

        tampilkanProduk();

    }

}
