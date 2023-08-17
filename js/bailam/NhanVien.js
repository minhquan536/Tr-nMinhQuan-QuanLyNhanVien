function NhanVien(tknv,name,email,password,datepicker,luongCB,chucvu,gioLam) {
    this.tknv = tknv;

    this.name = name;

    this.email = email;

    this.password = password;

    this.datepicker = datepicker;

    this.luongCB = luongCB;

    this.chucvu = chucvu;

    this.gioLam = gioLam;

    this.luongAll = 0

    this.tongLuong = function () {
        if (this.chucvu === "Sếp") {
            return this.luongAll = this.luongCB * 3;
        } else if (this.chucvu === "Trưởng phòng") {
            return this.luongAll = this.luongCB * 2;
        }else if (this.chucvu === "Nhân viên"){
            return this.luongAll = this.luongCB * 1;
        }
    }

    this.xepLoai = "";

    this.tinhXepLoai = function () {
        if (this.gioLam >= 192 ) {
            return this.xepLoai = "Xuất Sắc"
        } else if (this.gioLam >= 176 && this.gioLam < 192) {
            return this.xepLoai = "Giỏi"
        }else if (this.gioLam >= 160 && this.gioLam < 176) {  
            return this.xepLoai = "Khá"
        }else if (this.gioLam < 160) {  
            return this.xepLoai = "Trung Bình"
        }
    }
}