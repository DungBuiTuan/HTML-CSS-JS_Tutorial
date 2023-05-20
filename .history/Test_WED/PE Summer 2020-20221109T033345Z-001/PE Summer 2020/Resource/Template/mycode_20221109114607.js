function warning() {
    var v1 = document.getElementsByTagName("input")[0].value;
    var v2 = document.getElementsByTagName("input")[1].value;
    var v3 = document.querySelector("textarea").value;
    if (v1 == "" && v2 == "" && v3 == "") {
        alert("please fill out");
    } else {
        if (v1 == "") {
            alert("please fill name");
        }
        if (v2 == "") {
            alert("please fill email");
        }
        if (v3 == "") {
            alert("please fill content");
        }
    }
}