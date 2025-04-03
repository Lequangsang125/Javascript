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


## ghi chú 
- Điều quan trọng là chuỗi trong JavaScript là bất biến (immutable), nghĩa là bạn không thể thay đổi một ký tự của chuỗi sau khi chuỗi đã được tạo ra. Cả [] và charAt() chỉ dùng để lấy giá trị chứ không thể thay đổi nội dung của chuỗi.