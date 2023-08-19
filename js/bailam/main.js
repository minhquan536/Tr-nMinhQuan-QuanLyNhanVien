/**
 * object => kết quả lưu từ class => tạo dc object của sinh viên
 * class => tạo nhiều object cho sinh biên => lưu thông tin sinh viên
 * array => lưu trữ các object sinh viên dc tạo =>  thêm, cập nhật, xóa, tìm kiếm
 */

/**
 * khối 1: Input: thông tin từ form
 * 
 * khối 2:
 *          lấy giá trị từ form
 *          tạo đối tượng mới của class sinh viên
 *          thêm sinh viên vào class DanhSachSinhVien
 *          hienThịDanhSachSV
 * 
 * khối 3: output: lưu đối tượng vào mảng sinh viên
 */

//! hàm dùng chung
var dsnv = new DanhSachNV();

var validation = new Validation();

function hienThiNV(mang) {
    var content = "";

    mang.map(function name(nv, index) {
        content += `
            <tr>
                <td>${nv.tknv}</td>
                <td>${nv.name}</td>
                <td>${nv.email}</td>
                <td>${nv.datepicker}</td>
                <td>${nv.chucvu}</td>
                <td>${nv.luongAll}</td>
                <td>${nv.xepLoai}</td>
                <td>
                    <button onclick="xoaNhanVien('${nv.tknv}')" class="btn">Xóa</button>
                    <button onclick="xemNhanVien('${nv.tknv}')" class="btn btn-primary" id="btnThem" data-toggle="modal"
									data-target="#myModal">Xem</button>
                </td>
            </tr>
        `
    });
    document.getElementById("tableDanhSach").innerHTML = content;
}

function themNhanVien() {
    var tknv = document.getElementById("tknv").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var datepicker = document.getElementById("datepicker").value;
    var luongCB = document.getElementById("luongCB").value;
    var chucvu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;

    var isValid = true;

    isValid &= validation.kiemTraONhap(tknv, "Mã nhân viên không được để trống", "tbTKNV") && validation.kiemTraTK(tknv, "Mã nhân viên không hợp lệ", "tbTKNV") && validation.checkID(tknv, "Mã nhân viên bị trùng", "tbTKNV", dsnv.mangNV);

    isValid &= validation.kiemTraONhap(name, "Tên nhân viên không được để trống", "tbTen") && validation.kiemTraTen(name, "Tên nhân viên không hợp lệ", "tbTen");

    isValid &= validation.kiemTraONhap(email, "Email không được để trống", "tbEmail") && validation.kiemTraTen(email, "Email không hợp lệ", "tbEmail");

    isValid &= validation.kiemTraONhap(password, "Mật Khẩu không được để trống", "tbMatKhau") && validation.kiemTraMatKhau(password, "Mật khẩu không hợp lệ", "tbMatKhau");

    isValid &= validation.kiemTraONhap(datepicker, "Ngày làm không được để trống", "tbNgay") && validation.kiemTraNgayLam(datepicker, "Ngày làm không hợp lệ", "tbNgay");

    isValid &= validation.kiemTraONhap(luongCB, "Lương không được để trống", "tbLuongCB") && validation.kiemTraLuong(luongCB, "Lương không hợp lệ", "tbLuongCB");

    isValid &= validation.kiemTraCV(chucvu, "Chức vụ không hợp lệ", "tbChucVu");

    isValid &= validation.kiemTraONhap(gioLam, "Giờ làm không được để trống", "tbGiolam") && validation.kiemTraGioLam(gioLam, "Giờ làm không hợp lệ", "tbGiolam");

    if (isValid) {
        var nv = new NhanVien(tknv, name, email, password, datepicker, Number(luongCB), chucvu, Number(gioLam));
        nv.tongLuong();
        nv.tinhXepLoai();
        dsnv.themNV(nv);
        // console.table(dssv.mangSV);

        // hienThiSV(dssv.mangSV);
        setLocalStorage();
        getLocalStorage();
        document.getElementById("btnDong").click();
    }
    
}
document.getElementById("btnThemNV").onclick = themNhanVien;

function setLocalStorage() {
    localStorage.setItem("DSNV_BT_1", JSON.stringify(dsnv.mangNV));
}
function getLocalStorage() {
    if (localStorage.getItem("DSNV_BT_1") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV_BT_1"));
        hienThiNV(dsnv.mangNV);
    }
}
getLocalStorage()

//! Xóa sv
/**
 * khối 1: mã sinh viên cần xóa
 * 
 * khối 2: 
 *      hàm xoaNhanVien (main) => gắn sự kiện , lấy được mã sinh viên cần xóa
 *      gọi phương thức xoaSV của dssv(DanhSachSV)
 * 
 * khối 3: xóa sinh viên có mã cần xóa ra khỏi mảng
 * 
 */
function xoaNhanVien(maXoa) {
    // console.log(maXoa);
    dsnv.xoaNV(maXoa);
    setLocalStorage()
    getLocalStorage()
}


function xemNhanVien(maXem) {

    document.getElementById("myModal").classList = "modal " + "fade " + "show";
    // document.getElementById("myModal").style.paddingRight = "17px";
    document.getElementById("myModal").style.display = "block";
    // document.getElementById("hien").classList = "modal-open";
    // document.getElementById("hien").style.paddingRight = "17px";


    var findNV = dsnv.xemNV(maXem);

    document.getElementById("tknv").value = findNV.tknv;
    document.getElementById("tknv").disabled = true;
    document.getElementById("name").value = findNV.name;
    document.getElementById("email").value = findNV.email;
    document.getElementById("password").value = findNV.password;
    document.getElementById("datepicker").value = findNV.datepicker;
    document.getElementById("luongCB").value = findNV.luongCB;
    document.getElementById("chucvu").value = findNV.chucvu;
    document.getElementById("gioLam").value = findNV.gioLam;
}

function resetForm() {
    // .reset() chỉ dùng khi có thẻ cha là thẻ <form></form>
    document.getElementById("reset").reset();
    document.getElementById("tknv").disabled = false;
}

//! cập nhật sinh viên
/**
 * khối 1:input => xem nhân viên đang cần cập nhật
 * 
 * khối 2:
 *          lấy thông tin từ form (maUpdate)
 *          tạo dối tượng nvUpdate
 *          thêm nvUpdate vào mảng theo tknv
 *          Hiền thị thông tin lên form        
 * 
 * khối 3: cập nhật sinh viên theo mã bằng find
 */
function capNhatNhanVien() {
    var tknv = document.getElementById("tknv").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var datepicker = document.getElementById("datepicker").value;
    var luongCB = document.getElementById("luongCB").value;
    var chucvu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;

    var nvUpdate = new NhanVien(tknv, name, email, password, datepicker, Number(luongCB), chucvu, Number(gioLam));
    nvUpdate.tongLuong();
    nvUpdate.tinhXepLoai();
    dsnv.capNhatNV(nvUpdate);
    setLocalStorage();
    getLocalStorage();
}

document.getElementById("btnTimNV").onclick = function() {
    var tuTK = document.getElementById("searchName").value;

    // tạo biến lưu giá trị do bên searchByName có return về kết quả
    var mangTK = dsnv.search(tuTK);
    hienThiNV(mangTK);
}
// document.getElementById("btnTimNV").onkeydown = function() {
//     var tuTK = document.getElementById("searchName").value;

//     // tạo biến lưu giá trị do bên searchByName có return về kết quả
//     var mangTK = dsnv.search(tuTK);
// //     hienThiNV(mangTK);
// }