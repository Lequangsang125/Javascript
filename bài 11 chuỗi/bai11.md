## Chuỗi trong js
- dùng lưu trữ văn bản - ngoặc đơn hay kép đều được

1) template string `` trong es6 js2016
- Mẫu không được hỗ trợ trong Internet Explorer.
- Mẫu cho phép chuỗi nhiều dòng:
    let text =
    `The quick
    brown fox
    jumps over
    the lazy dog`;

2) tính chiều dài chuỗi string.length

3) escape character 
dùng dấu \ sau nó chuyển thành chuỗi
\b xóa 1 ký tự phía trước 
\f di chuyển trỏ tới vị trí đầu trang hoặc tiếp tục dòng tiếp theo 1 dòng mới
\n xuống dòng 
\r di chuyển con trỏ về đầu dòng hiện tại
\t tạo khỏang trắng tương đương tab (4-8 ký tự)
\v  Di chuyển con trỏ xuống một dòng mới theo chiều dọc (giống như tab dọc).
6 ký tự thoát ở trên ban đầu được thiết kế để điều khiển máy đánh chữ, máy điện báo và máy fax. Chúng không có ý nghĩa gì trong HTML

4) Phá vỡ các dòng dài
- Để dễ đọc, các lập trình viên thường tránh sử dụng những dòng mã dài.
- Một cách an toàn để ngắt một câu lệnh là sau một toán tử:
Ví dụ
document.getElementById("demo").innerHTML =
"Hello Dolly!";

- Một cách an toàn để phá vỡ một chuỗi là sử dụng phép cộng chuỗi:
Ví dụ
document.getElementById("demo").innerHTML = "Hello " +
"Dolly!";

5) Chuỗi JavaScript như Đối tượng
- Thông thường, chuỗi JavaScript là các giá trị nguyên thủy, được tạo từ các giá trị theo nghĩa đen:
let x = "John";

Nhưng chuỗi cũng có thể được định nghĩa là đối tượng với từ khóa new:
let y = new String("John");

Ví dụ
let x = "John";
let y = new String("John");

Không tạo đối tượng String.
Từ new khóa làm phức tạp mã và làm chậm tốc độ thực thi.
Các đối tượng chuỗi có thể tạo ra kết quả không mong muốn:

## ghi chú 
- So sánh hai đối tượng JavaScript luôn trả về false . 
- không nên tạo new String()