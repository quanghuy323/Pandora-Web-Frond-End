/**
 * Created by USER on 2/28/2017.
 */
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

function showSearchingBox() {
    var bg = document.getElementById("bg");
    bg.style.marginTop = "10px";
    bg.style.transition = "all 1s";
    scrollToTop();
}

function scrollToTop() {
    var a = document.body;
    a.scrollTop = -1000;

}

function hideSearchingBox() {
    groupDSGames();
    var bg = document.getElementById("bg");
    bg.style.marginTop = "-69px";
    bg.style.transition = "all 1s";
}

function groupDSGames() {
    var a = document.getElementById("DSGames");
    a.style.height = 0+"px";
    a.style.opacity = 0;
}
function hideDSGames() {
    var arr = document.getElementsByClassName("dsGame");
    for (var i = 0; i < arr.length; i++){
        arr[i].style.position = "absolute";
        arr[i].style.transform = "translate("+0+"px,"+(0)+"px)";
        arr[i].style.opacity = 0;
        arr[i].style.zIndex = 1;
    }
}
function showDSGames(nhap) {
    hideDSGames();
    var flag = false;
    var countt = 0;
    var a = document.getElementById("DSGames");
    a.style.height = 300+"px";
    a.style.opacity = 1;
    var arr = document.getElementsByClassName("dsGame");
    var text = document.getElementsByClassName("dsGameText");
    nhap = nhap.value;
    nhap = nhap.toLowerCase();
    if (nhap == 0){
        groupDSGames();
        hideDSGames();
    }
    for (var i = 0; i < text.length; i++){
        var str = text[i].innerHTML.toLowerCase();
        if (str.search(nhap) != -1) {
            if (countt == 0){
                arr[i].style.opacity = 1;
                arr[i].style.position = "absolute";
                arr[i].style.zIndex = 2;
                arr[i].style.transform = "translate("+0+"px,"+(0)+"px)";
                countt++;
                flag = true;
            }else{
                arr[i].style.opacity = 1;
                arr[i].style.position = "absolute";
                arr[i].style.zIndex = 2;
                arr[i].style.transform = "translate("+0+"px,"+80*(countt)+"px)";
                countt++;
                flag = true;
            }
        }
    }
    if (flag == false){
        groupDSGames();
    }

}


var count = 0;
var timeid;
function changeBackground() {

    var bg = document.getElementById("bgpic");
    var arr = bg.getElementsByTagName("img");
    for (var i = 0; i < arr.length; i++) {
        arr[i].style.opacity = 0;
        arr[i].style.transition = "opacity 1s";
    }
    arr[count].style.opacity = 1;
    arr[count].style.transition = "opacity 1s";
    count++;
    count = count % 3;
    timeid = window.setTimeout("changeBackground()", 4000);
}
function stopchange() {
    window.clearTimeout(timeid);
}
var demBG = 0;
function nextBG() {
    var a = document.getElementById("bgpic");
    var arr = a.getElementsByTagName("img");
    arr[demBG].style.opacity = 0;
    arr[demBG].style.transition = "opacity 1s";
    if (demBG == 2)
        demBG = -1;
    arr[demBG+1].style.opacity = 1;
    arr[demBG+1].style.transition = "opacity 1s";
    demBG++;
}
function backBG() {
    var a = document.getElementById("bgpic");
    var arr = a.getElementsByTagName("img");
    arr[demBG].style.opacity = 0;
    arr[demBG].style.transition = "opacity 1s";
    if (demBG == 0)
        demBG = 3;
    arr[demBG-1].style.opacity = 1;
    arr[demBG-1].style.transition = "opacity 1s";
    demBG--;
}

function show(x) {
    var next = document.getElementById("next");
    var back = document.getElementById("back");
    next.style.opacity = x;
    next.style.transition = "opacity 1s";
    back.style.opacity = x;
    back.style.transition = "opacity 1s";
}

//Sign IN and Sign UP////////////////////////////
function inputAndScrollbar() {
    var inputBox = document.getElementById("inputBox");
    var inputBox2 = document.getElementById("inputBox2");
    inputBox.style.height = '30px';
    inputBox.style.borderRadius = '10px'
    inputBox2.style.height = '30px';
    inputBox2.style.borderRadius = '10px'
    window.pageYOffset = "color : blue";
}

function changePicture(anh) {
    var anh2;
    anh.src = 'signin.png';
}
function changePicture2(anh) {
    var anh2;
    anh.src = 'signin2.png';
}

function logOutAccount() {
    flagStatusLogIn = false;
    window.localStorage.setItem("flagStatusLogIn", flagStatusLogIn);
}

var inputID;
var inputPassword;
function inputSignIn() {
    var id = document.signIn.id;
    inputID = id.value;
    var pass = document.signIn.password;
    inputPassword = pass.value;
}

var flagStatusLogIn = false;
function checkIdPassword () {
    var index = window.localStorage.getItem("index");
    for (var i = 0; i < index; i++){
        var idLocal = window.localStorage.getItem("ID["+i+"]");
        var passLocal = window.localStorage.getItem("Password["+i+"]");
        if (inputID == idLocal && inputPassword == passLocal) {
            flagStatusLogIn = true;
            window.localStorage.setItem("flagStatusLogIn", flagStatusLogIn);
            window.localStorage.setItem("account", inputID);
            window.history.back();
            break;
        }
        else {
            flagStatusLogIn = false;
            window.localStorage.setItem("flagStatusLogIn", flagStatusLogIn);
        }
    }
    if (flagStatusLogIn == false)
        alert("Sorry, your ID or Password was wrong. Please try again !");
}

function statusLogIn() {
    var a = document.getElementById("Account").innerHTML;
    var b = window.localStorage.getItem("account");
    flagStatusLogIn = window.localStorage.getItem("flagStatusLogIn");
    if (flagStatusLogIn == "true") {
        document.getElementById("Account").innerHTML = b;
        document.getElementById("Account").style.zIndex = 1;
        var logOut = document.getElementById("LogOut");
        logOut.onmouseover = "display : block";
    }
    else {
        document.getElementById("Account").innerHTML = "Sign In";
        var logOut = document.getElementById("LogOut");
        logOut.style.display = "none";
    }
}

function statusLogIn2() {
    var a = document.getElementById("Account").innerHTML;
    var b = window.localStorage.getItem("account");
    flagStatusLogIn = window.localStorage.getItem("flagStatusLogIn");
    var signIn = document.getElementById("notSignIn");
    var downLoad = document.getElementById("download");
    if (flagStatusLogIn == "true") {
        document.getElementById("Account").innerHTML = b;
        document.getElementById("Account").style.zIndex = 1;
        signIn.style.display = "none";
        downLoad.style.display = "block";
        var logOut = document.getElementById("LogOut");
        logOut.onmouseover = "display : block";
    }
    else {
        document.getElementById("Account").innerHTML = "Sign In";
        signIn.style.display = "block";
        downLoad.style.display = "none";
        var logOut = document.getElementById("LogOut");
        logOut.style.display = "none";
    }
}

var nameLocal;
function checkName() {
    var name = document.signUp.name;
    var p1 = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/; //kiểm tra họ tên
    var a = document.getElementById("checkedName");
    if (p1.test(name.value)==false || name.value.length < 8) {
        name.focus();
        a.style.opacity = 0;
        a.style.transition = "opacity 0.5s";
        flagName = false;
    }else{
        a.style.opacity = 1;
        a.style.transition = "opacity 0.5s";
        flagName = true;
    }
    nameLocal = name.value;
    if (flagName == true && flagEmail == true && flagPassword == true && flagRePassword == true && flagConditition == true)
        showRegister();
}
var passwordLocal;
var checkPass;
function checkPassword() {
    var password = document.signUp.password;
    checkPass = password.value;
    var p3 = /[a-z]+/;
    var p3_2 = /[A-Z]+/;
    var p3_3 = /[0-9]+/;
    var a = document.getElementById("checkedPassword");
    if (p3.test(password.value)==false || p3_2.test(password.value)==false || p3_3.test(password.value)==false ||
        password.value.length < 6){
        password.focus();
        a.style.opacity = 0;
        a.style.transition = "opacity 0.5s";
        flagPassword = false;
    }else{
        a.style.opacity = 1;
        a.style.transition = "opacity 0.5s";
        flagPassword = true;
    }
    passwordLocal = password.value;
    if (flagName == true && flagEmail == true && flagPassword == true && flagRePassword == true && flagConditition == true)
        showRegister();
}

function checkRePassword() {
    var repassword = document.signUp.repassword;
    var a = document.getElementById("checkedRePassword");
    repassword = repassword.value;
    if (repassword == checkPass) {
        a.style.opacity = 1;
        a.style.transition = "opacity 0.5s";
        flagRePassword = true;
    }else{
        a.style.opacity = 0;
        a.style.transition = "opacity 0.5s";
        flagRePassword = false;
    }
    if (flagName == true && flagEmail == true && flagPassword == true && flagRePassword == true && flagConditition == true)
        showRegister();
}

function checkEmail() {
    var email = document.signUp.email;
    var a = document.getElementById("checkedEmail");
    var p2 = /^(\w)+[@][a-zA-Z]+[.][a-zA-Z]+([.][a-zA-Z]+)?$/; //kiểm tra email
    if (p2.test(email.value)==false){
        a.style.opacity = 0;
        a.style.transition = "opacity 0.5s";
        flagEmail = false;
    }else{
        a.style.opacity = 1;
        a.style.transition = "opacity 0.5s";
        flagEmail = true;
    }
    if (flagName == true && flagEmail == true && flagPassword == true && flagRePassword == true && flagConditition == true)
        showRegister();
}

function checkCondition() {
    flagConditition = true;
    if (flagName == true && flagEmail == true && flagPassword == true && flagRePassword == true && flagConditition == true)
        showRegister();
}
var flagEmail = false;
var flagName = false;
var flagPassword = false;
var flagRePassword = false;
var flagConditition = false;
var flagKey = false;
function showRegister() {
    var submit = document.getElementById("register");
    submit.style.opacity = 1;
    submit.style.transition = "all 0.5s";
    flagKey = true;
}
function check() {
    if (flagKey == true) {
        var notification = document.getElementById("notification");
        notification.style.display = "block";
        var index = window.localStorage.getItem("index");
        var ID = "ID["+index+"]";
        window.localStorage.setItem(ID,nameLocal);
        var Password = "Password["+index+"]";
        window.localStorage.setItem(Password, passwordLocal);
        index++;
        window.localStorage.setItem("index", index);
    }
    else {
        alert("Please complete your form !")
    }
}
//Genre Games




//////////ACTION GAMES/////////////////

function nextMain(x) {
    var s = "main" + x;
    var a = document.getElementById(s);
    var arr = a.getElementsByTagName("img");
    for (var j = 0; j < arr.length; j++) {
        arr[j].style.opacity = 0;
        arr[j].style.zIndex = 0;
        arr[j].style.transition = "all 1s";
    }
    s = "information"+x;
    var c = document.getElementById(s);
    arr = c.getElementsByTagName("div");
    for (var j = 0; j < arr.length; j++) {
        arr[j].style.opacity = 0;
        arr[j].style.zIndex = 0;
        arr[j].style.transition = "all 1s";
    }
    if (x == 2 || x == 4 || x == 6)
        x = x - 2;

    s = "main"+(x+1);
    var b = document.getElementById(s);
    arr = b.getElementsByTagName("img");
    for (var j = 0; j < arr.length; j++) {
        arr[j].style.opacity = 1;
        arr[j].style.zIndex = 1;
        arr[j].style.transition = "all 1s";
    }
    s = "information"+(x+1);
    c = document.getElementById(s);
    arr = c.getElementsByTagName("div");
    for (var j = 0; j < arr.length; j++) {
        arr[j].style.opacity = 1;
        arr[j].style.zIndex = 1;
        arr[j].style.transition = "all 1s";
    }
}
function backMain(x) {

    var s = "main" + x;
    var a = document.getElementById(s);
    var arr = a.getElementsByTagName("img");
    for (var j = 0; j < arr.length; j++) {
        arr[j].style.opacity = 0;
        arr[j].style.zIndex = 0;
        arr[j].style.transition = "all 1s";
    }
    s = "information"+x;
    var c = document.getElementById(s);
    arr = c.getElementsByTagName("div");
    for (var j = 0; j < arr.length; j++) {
        arr[j].style.opacity = 0;
        arr[j].style.zIndex = 0;
        arr[j].style.transition = "all 1s";
    }
    if (x == 1 || x == 3 || x == 5)
        x = x + 2;
    s = "main"+(x-1);
    var b = document.getElementById(s);
    arr = b.getElementsByTagName("img");
    for (var j = 0; j < arr.length; j++) {
        arr[j].style.opacity = 1;
        arr[j].style.zIndex = 1;
        arr[j].style.transition = "all 1s";
    }
    s = "information"+(x-1);
    c = document.getElementById(s);
    arr = c.getElementsByTagName("div");
    for (var j = 0; j < arr.length; j++) {
        arr[j].style.opacity = 1;
        arr[j].style.zIndex = 1;
        arr[j].style.transition = "all 1s";
    }
}
function changColorButton(x) {
    var arr = document.getElementsByClassName("buttonNextPage");
    for (var i = 0; i < arr.length; i++) {
        arr[i].style.backgroundColor = "#555555";
    }
    x.style.backgroundColor = "cyan";
}


//IN GAMES


var dem = 0;
function nextPictureGamePlay() {
    var xxxxx = document.getElementById("imgGameplay");
    var arr = xxxxx.getElementsByTagName("img");
    arr[dem].style.transform = "translate("+960+"px,"+0+"px)";
    arr[dem].style.opacity = 0;
    if (dem == 2)
        dem = -1;
    arr[dem+1].style.transform = "translate("+(0)+"px,"+0+"px)";
    arr[dem+1].style.opacity = 1;
    arr[dem+1].style.transition = "all 1s";
    dem++;
}
function backPictureGamePlay() {
    var xxxxx = document.getElementById("imgGameplay");
    var arr = xxxxx.getElementsByTagName("img");
    arr[dem].style.transform = "translate("-960+"px,"+0+"px)";
    arr[dem].style.opacity = 0;
    if (dem == 0)
        dem = 3;
    arr[dem-1].style.transform = "translate("+0+"px,"+0+"px)";
    arr[dem-1].style.opacity = 1;
    arr[dem-1].style.transition = "all 1s";
    dem--;
}
function showLink(link,x) {
    var arr = document.getElementsByClassName("linkDown");
    for (var j = 0; j < arr.length; j++) {
        arr[j].style.borderBottom = "3px solid #222222";
    }
    link.style.borderBottom = "3px solid #1bbea0"
    arr = document.getElementsByClassName("imgLinkDownLoad");
    for (var j = 0; j < arr.length; j++) {
        arr[j].style.opacity = 0;
        arr[j].style.zIndex = 0;
    }
    arr[x].style.opacity = 1;
    arr[x].style.zIndex = 1;
    arr[x].style.transition = "all 1s";
}
