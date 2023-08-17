function DanhSachNV() {
    this.mangNV = [];

    this.themNV = function (nv) {
        this.mangNV.push(nv);
    }

    this.xoaNV = function (maXoa) {
        var indexXoa = this.mangNV.findIndex(function (nv) {
            return nv.tknv === maXoa;
        })
        // console.log(indexXoa);
        this.mangNV.splice(indexXoa,1);
    }

    this.xemNV = function (maXem) {
        var nvFind = this.mangNV.find(function (nv) {
            return nv.tknv === maXem;
        })
        // console.log(indexXoa);
        return nvFind;
    }

    this.capNhatNV = function (nvUpdate) {
        var indexUpdate = this.mangNV.findIndex(function (nv) {
            return nv.tknv === nvUpdate.tknv;
        })
        if(indexUpdate > -1){
            // tìm thấy
            // svUpdate = class  update vừa lấy giá trị bên main gắn vài vị trí this.mangSV[indexUpdate]
            this.mangNV[indexUpdate] = nvUpdate;
        }

    }
}

DanhSachNV.prototype.search = function (tuTK) {

    var mangTK = []; // luu gia tri tim dc

    var tuThuong = tuTK.toLowerCase();
    var tuBoCach = tuThuong.replace(/\s/g, "");

    this.mangNV.map(function (nv) {
        var loaiThuong = nv.xepLoai.toLowerCase();
        var loaiBoCach = loaiThuong.replace(/\s/g, "");
        var indexSearch = loaiBoCach.indexOf(tuBoCach);

        if(indexSearch > -1){
            // tìm thấy (0 kết quả đến n kết quả, kiếm ko dc là = 0) => lưu sv vào mảng tìm kiếm(mangTK)
            mangTK.push(nv);
        }
    })
    return mangTK;
}