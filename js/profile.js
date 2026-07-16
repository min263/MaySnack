const user = JSON.parse(localStorage.getItem("loginUser"));

if (!user) {
    window.location.href = "login.html";
}

document.getElementById("profileName").textContent = user.name;
document.getElementById("profileEmail").textContent = user.email;
document.getElementById("profileRole").textContent =
user.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : "Customer";

function logout() {
    localStorage.removeItem("loginUser");
    window.location.href = "login.html";
}