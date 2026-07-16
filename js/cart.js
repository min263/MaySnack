const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function rupiah(angka){
    return "Rp " + angka.toLocaleString("id-ID");
}

function displayCart(){

    cartItems.innerHTML = "";

    let grandTotal = 0;

    if(cart.length === 0){
        cartItems.innerHTML = "<h3>Keranjang masih kosong.</h3>";
        total.innerHTML = "";
        return;
    }

    cart.forEach(item => {

        grandTotal += item.price * item.quantity;

        cartItems.innerHTML += `

<div class="cart-item">

    <img src="${item.image}" alt="${item.name}">

    <div class="cart-info">

        <h3>${item.name}</h3>

        <div class="cart-rating">
            ⭐⭐⭐⭐⭐ <span style="color:#666;">4.9</span>
        </div>

        <p>Kategori : ${item.category}</p>

        <div class="cart-price">
            ${rupiah(item.price)}
        </div>

        <div class="cart-action">

            <div class="qty">

                <button onclick="decrease(${item.id})">-</button>

                <span>${item.quantity}</span>

                <button onclick="increase(${item.id})">+</button>

            </div>

            <button class="delete-btn"
            onclick="removeItem(${item.id})">
                🗑 Hapus
            </button>

        </div>

    </div>

</div>

`;

    });

    document.getElementById("subtotal").innerHTML = rupiah(grandTotal);

document.getElementById("total").innerHTML = rupiah(grandTotal);

}
displayCart();
function increase(id){

    cart.forEach(item=>{

        if(item.id===id){
            item.quantity++;
        }

    });

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}

function decrease(id){

    cart.forEach(item=>{

        if(item.id===id){

            if(item.quantity>1){
                item.quantity--;
            }

        }

    });

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}

function removeItem(id){

    cart = cart.filter(item=>item.id!==id);

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}