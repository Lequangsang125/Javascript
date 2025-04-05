 ## phương pháp chuỗi js
 - Chuỗi Javascript là chuỗi nguyên thủy và không thể thay đổi: Tất cả các phương thức chuỗi đều tạo ra một chuỗi mới mà không làm thay đổi chuỗi gốc.

1) độ dài chuỗi 
- string.length 

2) trích xuất ký tự chuỗi
 - 4 phương pháp: 
  + at(position) dùng trong es2022 cho phép dùng với số âm
  + charAt(positon) tìm ký tự trong positon = index dùng giống at nhưng k dùng với số âm
  + charCodeAt(position) hiển thị ra mã unicode của ký tự thứ index đó 
  + dùng [] như trong mảng 

3) trích xuất phần tử của chuỗi 
 + slice(start, end)
 + substring(start, end): không cho số âm hoán đổi nếu start > end 
 + substr(start, length) đã bị xóa 

4) chuyển chữ hoa và chữ thường 
 - toUpperCase() chuyển chữ hoa
 - toLowerCase() chuyển chữ thường

5) concat
 - sử dụng thay cho toán tử cộng

6) trim()
 - Loại bỏ khoảng trắng 2 đầu 
 - trimStart(): loại bỏ khoảng trắng ở đầu ecma2019
 - trimEnd(): loại bỏ khoảng trắng ở cuối ecma2019

7) đệm chuỗi : padStart() và padEnd()
- padStart(4,'x') thêm vào đầu chuỗi 4 chữ x
- padEnd thêm vào cuối chuỗi

8) lặp lại chuỗi js()
- repeat() trả về 1 chuỗi với số lượng bản sao chuỗi đó
- string.repeat(count)

9) thay thế nội dung chuỗi replace()
- let newText = text.replace("Microsoft", "W3Schools");

10) replaceAll()

11) split() tách chuỗi thành mảng 
- split(',') chuỗi bị phân rã cách nhau bằng ,
 
## ghi chú 
- Điều quan trọng là chuỗi trong JavaScript là bất biến (immutable), nghĩa là bạn không thể thay đổi một ký tự của chuỗi sau khi chuỗi đã được tạo ra. Cả [] và charAt() chỉ dùng để lấy giá trị chứ không thể thay đổi nội dung của chuỗi.