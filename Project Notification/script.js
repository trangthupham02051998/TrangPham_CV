// Button Try It
// Chương trình hiện ra thông báo
function notify() {
    var text = "";
    alert("Chào mừng bạn đến với ứng dụng JavaScript đầu tiên");
    // ID Name
    // Người dùng nhập tên
    var person = prompt("Please enter your name");
    if (person != null) {
        text = "Tên của bạn là:" + person;
        document.getElementById("name").innerText = text;
    }
    //ID City
    // Người dùng nhập Thành Phố
    var city = prompt("Hãy nhập thành phố nơi bạn đang sống");
    if (city != null) {
        text = "Thành phố của bạn là:" + city;
        document.getElementById("city").innerHTML = text;
    }
    // ID Mobile
    // Người dùng nhập Số điện thoại
    var mobile = prompt("Hãy nhập số điện thoại của bạn");
    if (mobile != null) {
        text = "Số điện thoại của bạn là:" + mobile;
        document.getElementById("mobile").innerHTML = text;
    }
    // ID Age
    // Người dùng nhập tuổi
    var age = prompt("Hãy nhập tuổi của bạn");
    if (age != null) {
        text = "Tuổi của bạn là:" + age;
        document.getElementById("age").innerHTML = text;
    }
    // ID Year
    // Người dùng nhập năm sinh
    var year = prompt("Hãy nhập năm sinh");
    do {
        if (year < 2021) {
            text = "Năm sinh của bạn là:" + year;
            document.getElementById("year").innerHTML = text;
        } else if (year >= 2021) {
            var year = prompt("Hãy nhập lại năm sinh");
            text = "Năm sinh của bạn là:" + year;
            document.getElementById("year").innerHTML = text;
        }
    }
    while (year >= 2021);
    // Hàm tính tuổi
    function tinhTuoi(year) {
        result = 2021 - year;
        return result;
    }
    text = "Tuổi hiện tại của bạn là:" + tinhTuoi(year);
    document.getElementById("year1").innerHTML = text;
    // ID Email
    // Người dùng nhập email
    var email = prompt("Hãy nhập email của bạn");
    if (email != null) {
        text = "Email của bạn là:" + email;
        document.getElementById("email").innerHTML = text;
    }
    // ID Jobs
    // Người dùng nhập nghề nghiệp
    var jobs = prompt("Hãy nhập nghề nghiệp của bạn");
    if (jobs != null) {
        text = "Nghề nghiệp của bạn là:" + jobs;
        document.getElementById("jobs").innerHTML = text;
    }
}
// DIV
function Nextstep() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}