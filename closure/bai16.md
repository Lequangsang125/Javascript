# đóng hàm 
- biến js có thể thuộc về :
 - phạm vi cục bộ hoặc phạm vi toàn cục
 - biến toàn cục có thể biến thành cục bộ(riêng tư) bằng cách dùng closure
 - closures cho phép hàm có các biến riêng tư

 1) biến cục bộ
 - là biến riêng tư được định nghĩa bên trong 1 hàm
 - hàm có thể truy cập tất cả các biến trong phạm vi cục bộ
 - nếu chưa khai báo var,const, let thì nó là biến toàn cục khi được gán trong hàm

## quan trọng 
- ❓ Vấn đề là gì?
- Bạn muốn tạo một counter tăng dần mỗi lần gọi add(), nhưng vẫn đảm bảo:
Không ai bên ngoài có thể sửa biến đếm
Giá trị không bị reset mỗi lần gọi


