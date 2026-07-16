const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
    u => u.email === email && u.password === password
);
    if(!user){
        alert("Email atau password salah!");
        return;
    }

    localStorage.setItem("loginUser", JSON.stringify(user));

    if(user.role === "admin"){
        window.location.href = "admin.html";
    }else{
        window.location.href = "index.html";
    }

});