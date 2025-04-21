/**
 * Đầu vào: 
 * - nhập vào 1 số có 2 chữ số
 * -Xử lý:
 * -Tách số có 2 chữ số thành hàng đơn vị và hàng chục 
 * Đầu ra:
 * - Tổng 2 ký số của số vừa nhập
 */
function tinhTong2KySo() {
    let number = parseInt(document.getElementById("txtNum").value);
    if (number >= 10 && number <= 99) {
        let hangChuc = Math.floor(number / 10);
        let hangDV = number % 10;
        let tong = hangChuc + hangDV;

        document.getElementById("ketqua").innerText = "Tong hai ky so cua so " + number + ": " + tong; 
        return;
    }
    alert("Vui long nhap so co 2 chu so!!!");
}