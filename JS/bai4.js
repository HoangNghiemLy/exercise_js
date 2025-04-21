/**
 * Đầu vào:
 * -Nhập chiều dài
 * -Nhập chiều rộng
 * Xử lý:
 * -cv = (dai + rong) * 2
 * -dt = dai * rong
 * Đầu ra: 
 * -chu vi, diện tích hcn
 */
function hinhChuNhat() {
    let cd = parseFloat(document.getElementById("txtcd").value);
    let cr = parseFloat(document.getElementById("txtcr").value);

    if (cd <= 0 || cr <= 0) {
        alert("Vui long nhap lai kich thuoc hinh chu nhat");
        return;
    } 
    let cv = (cd + cr) * 2;
    let dt = cd * cr;
    document.getElementById("ketquacv").innerText = "Chu vi hinh chu nhat co chieu dai la " + cd + ", chieu rong la " + cr + " : " + cv;
    document.getElementById("ketquadt").innerText = "Dien tich hinh chu nhat co chieu dai la " + cd + ", chieu rong la " + cr + " : " + dt;

}