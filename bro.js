function changeColor() {
    let c = document.querySelector("body")
    c.style.backgroundColor = "#2f4f4f";
}
function myInput() {
    let text = document.getElementById("intest");
    let username = document.getElementById("myinput").value;
    text.innerHTML = "Welcome Back" + " " + username;
}