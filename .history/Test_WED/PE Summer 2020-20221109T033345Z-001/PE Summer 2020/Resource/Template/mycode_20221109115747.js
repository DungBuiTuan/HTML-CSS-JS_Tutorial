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
    if (v1 != "" && v2 != "" && v3 != "") {
        var mywindow = window.open("", "", "width=500 height = 500");
        mywindow.document.write("<h1> vui lòng xem lại</h1><p>Tên của bạn " + v1 + " </p><p>email của bạn " + v2 + "</p><p>Nội dung" + v3 + "</p><p>đơn vị đào tạo bạn chọn</p>");
    }
}