/**
 * Dau vao: 
 * -khai bao ti gia 
 * -Nhap vao so tien quy doi tu USD sang VND
 * 
 * Xu ly:
 * -soTienQuyDoi = soTien * tyGia
 * 
 * Dau ra: In ra so tien quy doi
 */
function quyDoiTien() {
    const tiGia = 23500;
    let usd = parseFloat(document.getElementById("usd").value);

    if (isNaN(usd) || usd < 0) {
        alert("Vui long nhap so USD hop le!!!");
        return;
    }
    let vnd = usd * tiGia;
    document.getElementById("ketqua").innerText = usd + " USD = " + vnd.toLocaleString() + " VND ";
}