function open_reservation(index) {
    var open = document.getElementById("res" + index);
    var arrow = document.getElementById("arr" + index);

    if (open.style.display == "block") {
        open.style.display = "none";
        arrow.innerHTML = ">";
    } else {
        open.style.display = "block";
        arrow.innerHTML = "v";
    }
}