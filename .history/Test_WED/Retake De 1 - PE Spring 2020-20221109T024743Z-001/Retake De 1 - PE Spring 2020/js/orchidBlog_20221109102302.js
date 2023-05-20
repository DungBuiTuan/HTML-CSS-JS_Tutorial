function zoomout(anh) {
    document.getElementById("currentimg").src = anh
}

function warning() {
    var v1 = document.getElementById("yourname").value;
    var v2 = document.getElementById("email").value;
    var v3 = document.getElementById("content").value;
    if (v1 == "" || v2 == "" || v3 == "") {
        alert("please fill out");
    }
} else {
    var c = confirm("are u sure");
    if (c) {
        alert("Massage sent");
    }
}