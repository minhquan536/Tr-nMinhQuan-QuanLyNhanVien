function Validation() {
    this.kiemTraONhap = function(value,massage,spanID) {
        if (value.trim() != "") {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = massage;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    this.kiemTraTK = function (value,massage,spanID) {
        if (value.length >= 4 && value.length <= 6) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = massage;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    this.checkID = function (value, message, spanID, mangNV) {
        // some(): dựa vào điều kiện kiểm tra trả về kết quả true hoặc false, và chỉ có 2 giá trị 1:true 2:false
        //! mã bị trùng => some => true
        //! không trùng => some => false
        // isExist: có nghĩa là có tồn tại hay không
        var isExist = mangNV.some(function (nv) {
            return nv.tknv == value.trim();
        })

        if (isExist) {
            //! mã bị trùng => some => true
            // kết quả cuối cùng => false ( dữ liệu sai )
            //! DỮ LIỆU SAI
            // value không rỗng => có giá trị
            document.getElementById(spanID).innerHTML = message;
            // do bên html thẻ đang bị ẩn => hiện nó lên => đúng nên không cần hiện thông báo sai
            document.getElementById(spanID).style.display = "block";
            return false;
        } else {
            // không trùng => some => false ( mã hợp lệ )
            //! DỮ LIỆU SAI
            // value không rỗng => có giá trị
            document.getElementById(spanID).innerHTML = "";
            // do bên html thẻ đang bị ẩn => hiện nó lên => đúng nên không cần hiện thông báo sai
            document.getElementById(spanID).style.display = "none";
            return true;
        }
    }

    this.kiemTraTen = function (value, message, spanID) {
        var ten = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;

        if (value.match(ten)) {
            document.getElementById(spanID).innerHTML = "";
            // do bên html thẻ đang bị ẩn => hiện nó lên => đúng nên không cần hiện thông báo sai
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            // do bên html thẻ đang bị ẩn => hiện nó lên => đúng nên không cần hiện thông báo sai
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }
    
    this.kiemTraEmail = function (value, message, spanID) {
        var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (value.match(email)) {
            document.getElementById(spanID).innerHTML = "";
            // do bên html thẻ đang bị ẩn => hiện nó lên => đúng nên không cần hiện thông báo sai
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            // do bên html thẻ đang bị ẩn => hiện nó lên => đúng nên không cần hiện thông báo sai
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    this.kiemTraMatKhau = function (value, message, spanID) {
        var mK = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,10}$/;

        if (value.match(mK)) {
            document.getElementById(spanID).innerHTML = "";
            // do bên html thẻ đang bị ẩn => hiện nó lên => đúng nên không cần hiện thông báo sai
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            // do bên html thẻ đang bị ẩn => hiện nó lên => đúng nên không cần hiện thông báo sai
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    this.kiemTraNgayLam = function (value, message, spanID) {
        var cc = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        if (value.match(cc)) {
            document.getElementById(spanID).innerHTML = "";
            // do bên html thẻ đang bị ẩn => hiện nó lên => đúng nên không cần hiện thông báo sai
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            // do bên html thẻ đang bị ẩn => hiện nó lên => đúng nên không cần hiện thông báo sai
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    this.kiemTraLuong = function (value, message, spanID) {

        if (Number(value) >= 1000000 && Number(value) <= 20000000) {
            document.getElementById(spanID).innerHTML = "";
            // do bên html thẻ đang bị ẩn => hiện nó lên => đúng nên không cần hiện thông báo sai
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            // do bên html thẻ đang bị ẩn => hiện nó lên => đúng nên không cần hiện thông báo sai
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    this.kiemTraCV = function (value, message, spanID) {

        if (value == "Chọn chức vụ") {
            document.getElementById(spanID).innerHTML = message;
            // do bên html thẻ đang bị ẩn => hiện nó lên => đúng nên không cần hiện thông báo sai
            document.getElementById(spanID).style.display = "block";
            return false;
        } else {
            document.getElementById(spanID).innerHTML = "";
            // do bên html thẻ đang bị ẩn => hiện nó lên => đúng nên không cần hiện thông báo sai
            document.getElementById(spanID).style.display = "none";
            return true;
        }
    }

    this.kiemTraGioLam = function (value, message, spanID) {

        if (Number(value) >= 80 && Number(value) <= 200) {
            document.getElementById(spanID).innerHTML = "";
            // do bên html thẻ đang bị ẩn => hiện nó lên => đúng nên không cần hiện thông báo sai
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            // do bên html thẻ đang bị ẩn => hiện nó lên => đúng nên không cần hiện thông báo sai
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }
}