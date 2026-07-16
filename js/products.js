const products = [

{
    id:1,
    name:"Keripik Singkong Balado",
    price:18000,
    stock:50,
    category:"Keripik",
    image:"images/singkong-balado.jpg",
    description:"Keripik singkong renyah dengan bumbu balado pedas manis."
},

{
    id:2,
    name:"Keripik Pisang Cokelat",
    price:22000,
    stock:45,
    category:"Keripik",
    image:"images/pisang-coklat.jpg",
    description:"Keripik pisang premium dengan balutan cokelat."
},

{
    id:3,
    name:"Basreng Pedas",
    price:20000,
    stock:60,
    category:"Keripik",
    image:"images/basreng.jpg",
    description:"Basreng gurih dengan level pedas menggugah selera."
},

{
    id:4,
    name:"Makaroni Pedas",
    price:17000,
    stock:40,
    category:"Keripik",
    image:"images/makaroni.jpg",
    description:"Makaroni renyah dengan berbagai level kepedasan."
},

{
    id:5,
    name:"Kacang Oven",
    price:25000,
    stock:35,
    category:"Kacang",
    image:"images/kacang.jpg",
    description:"Kacang pilihan yang dipanggang tanpa minyak."
},

{
    id:6,
    name:"Stik Keju",
    price:23000,
    stock:50,
    category:"Biskuit",
    image:"images/stik-keju.jpg",
    description:"Camilan stik keju yang gurih dan renyah."
},

{
    id:7,
    name:"Wafer Cokelat Premium",
    price:19000,
    stock:55,
    category:"Biskuit",
    image:"images/wafer.jpg",
    description:"Wafer premium dengan isian cokelat melimpah."
},

{
    id:8,
    name:"Permen Buah Mix",
    price:12000,
    stock:80,
    category:"Permen",
    image:"images/permen.jpg",
    description:"Permen rasa buah segar yang disukai semua umur."
},

{
    id:9,
    name:"Cookies Butter",
    price:25000,
    stock:30,
    category:"Biskuit",
    image:"images/cookies.jpg",
    description:"Cookies butter lembut dengan aroma khas."
},

{
    id:10,
    name:"Popcorn Caramel",
    price:20000,
    stock:45,
    category:"Keripik",
    image:"images/popcorn.jpg",
    description:"Popcorn manis dengan karamel premium."
}

];
if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(products));
}

function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.getElementById("cart-count").textContent = cart.length;

}

updateCartCount();
