## hàm trong js là khối mã được thiết kế để thực hiện 1 tác vụ cụ thể được thực thi khi có cái gì đó gọi
1) Hàm 
+ Các tham số hàm được liệt kê bên trong dấu ngoặc đơn () trong định nghĩa hàm.
+ Đối số hàm là các giá trị mà hàm nhận được khi nó được gọi.

function name(tham số 1, tham số 2, ...){
    code thực thi
    return : trả về luôn và thoát hàm
}
name(Đối số 1 , đối số 2 , ...);

# Mã bên trong hàm sẽ thực thi khi "cái gì đó" gọi (gọi) hàm:
# Khi một sự kiện xảy ra (khi người dùng nhấp vào một nút)
# Khi nó được gọi (gọi) từ mã JavaScript
# Tự động (tự gọi)

# nếu không truyền đối số vào ()
# nếu gọi hàm mà không có () nó sẽ trả về đúng hàm đó

# biến cục bộ 
- các biến trong hàm sẽ thành cục bộ của hàm đó nên chỉ dùng được bên trong hàm


## ghi chú 
- Dùng hàm để tái sử dụng mã
- Dùng 1 hàm với các đối số khác nhau tạo kết quả khác nhau
- hàm được dùng như 1 biến luôn
let text = "The temperature is " + toCelsius(77) + " Celsius";