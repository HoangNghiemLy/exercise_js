/**
 * Dau vao: 
 * - Nhap vao 5 so thuc 
 * Xu ly:
 * - Tinh diem trung binh 5 so thuc nay
 * Dau ra:
 * - Trung binh cong cua 5 so nay
 */
function tinhTrungBinh5SoThuc() {
    let tong = 0;
    for (let i = 1; i <= 5; i++){
        let so = parseFloat(prompt("Nhap so thuc thu " + i + ":"));
        if (isNaN(so)) {
            alert("Gia tri khong hop le. Vui long nhap so thuc");
            i--;
            continue;
        }
        tong += so;
    }
    let trungBinh = tong / 5;
    document.getElementById("ketqua").innerText = "Gia tri trung binh 5 so thuc: " + trungBinh;
}
