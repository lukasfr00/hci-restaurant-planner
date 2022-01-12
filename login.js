menu = document.querySelector(".hamburger-menu");
wrapper = document.querySelector(".wrapper");

function login() {
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pwd").value;

    if (username == "admin" && password == "1234") {
        window.location.href = 'admin.html';
    } else {
        document.getElementById("wrongInput").style.display = "block";
    }
}


function events() {
    menu.addEventListener("click", () => {
        console.log("hallo");
        wrapper.classList.toggle("active");
    })
}

events();