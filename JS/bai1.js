/**
 ** Dau vao: 
 *   - Nhap Số ngày làm việc của 1 nhân viên
 *
 ** Xử lý:
 *   - Tiền lương = Lương 1 ngày(100000) * số ngày làm việc
 ** Đầu ra: 
    Số tiền lương của nhân viên
 */
function tinhLuong() {
    const Luong_Mot_Ngay = 100000;
    let soNgayLam = Number(document.getElementById("soNgay").value);
    if (soNgayLam > 0) {
        let tienLuong = Luong_Mot_Ngay * soNgayLam;
        document.getElementById("ketQua").innerText = "Tien luong: " + tienLuong.toLocaleString() + " VND ";
    } else {
        alert("So ngay khong hop le!!!");
    }
}