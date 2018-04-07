/**
 * Created by USER on 3/6/2017.
 */
function init() { //hàm này khởi tạo tổng mặt hàng mua
    var tmp = window.localStorage.getItem("count");
    if (tmp == null || tmp == "undefined")
        window.localStorage.setItem("count",0);

}

function add(ma,ten,hinh,gia) {
    var pos = tim(ma);
    if (pos == -1)
    {
        var c = window.localStorage.getItem("count");
        c++;
        window.localStorage.setItem("count",c);
        window,localStorage.setItem(c, ma+","+ten+","+hinh+","+gia+",1");
        alert("them tc");
    }else
        alert("sp này đã có trong giỏ");
}
function tim(ma) {
    var c = window.localStorage.getItem("count");
    if (c != null)
        for (var i = 1; i <= c; i++) {
            var v = window.localStorage.getItem(i);
            if (v != null)
                if (v.indexOf(ma) >= 0)
                    return i;
        }

    return -1;
}
function show() {
    var sum = 0;
    var s = "<table>";
    s += "<tr>";
    s += "<th>MASP</th>"
    s += "<th>TENSP</th>"
    s += "<th>HINH</th>"
    s += "<th>GIA</th>"
    s += "<th>SOLUONG</th>"
    s += "<th>XOA</th>"
    s += "</tr>"

    var c = window.localStorage.getItem("count");
    if (c != null) {
        for (var i = 1; i <= c; i++) {
            var v = window.localStorage.getItem(i);
            if (v != null) {
                var arr = v.split(",");
                s += "<tr>";
                s += "<td>" + arr[0] + "</td>";
                s += "<td>" + arr[1] + "</td>";
                s += "<td><img src='img/games/" + arr[2] + "'></td>";
                s += "<td>" + arr[3] + "</td>";
                s += "<td><input type='number' value='" + arr[4] + "' min='1' max='20' onchange='sua(this,\"" + arr[0] + "\")'></td>";
                s += "<td><input type='button' value='xoa' onclick='xoa(\""+arr[0]+"\")'></td>";
                s += "</tr>";
                sum = sum + arr[3] * arr[4];
            }
        }
        s += "</table>";
        s += "<p>Tong tien can thanh toan: " + sum + " VND</p>";

        var thediv = document.getElementById("hang");
        thediv.innerHTML = s;
    }
}
    function sua(theinput, ma) {
        alert(ma);
        if (i != -1){
            var v = window.localStorage.getItem(i);
            if (v != null){
                var arr = v.split(",");
                arr[4] = theinput.value;
                window.localStorage.setItem(i, arr[0]+","+arr[1]+","+arr[2]+","+arr[3]+","+arr[4]);
                show();
            }
        }
    }

    function xoa(ma) {
        if (window.confirm("Có chắc muốn bỏ sản phẩm này ?") == true){
            var i = tim(ma);
            if (i != -1){
                window.localStorage.removeItem(i);
                show();
            }
        }
    }
    function xongddh() {
        alert("Cám ơn DDH của bản dang xu li");
        window.localStorage.clear();
        window.location.replace("index2.html");
    }

