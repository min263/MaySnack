const role = document.getElementById("role");
const adminCodeBox = document.getElementById("adminCodeBox");

role.addEventListener("change", function(){

    if(this.value === "admin"){
        adminCodeBox.style.display = "block";
    }else{
        adminCodeBox.style.display = "none";
    }
});

const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();

let users = JSON.parse(localStorage.getItem("users")) || [];

const sudahAda = users.find(user => user.email === email);

if(sudahAda){
alert("Email sudah terdaftar!");
return;
}

const selectedRole = document.getElementById("role").value;
console.log(selectedRole);
const adminCode = document.getElementById("adminCode").value;

if(selectedRole === "admin"){

    if(adminCode !== "MAYSNACK2026"){
        alert("Kode Admin salah!");
        return;
    }

}

users.push({
    name,
    email,
    password,
    role: selectedRole
});
localStorage.setItem("users", JSON.stringify(users));

alert("Registrasi berhasil!");

window.location.href = "login.html";

});