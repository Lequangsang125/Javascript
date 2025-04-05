# Hoisting là hành vi mặc định của js để di chuyển khai báo lên đầu 
- nâng lên đầu scope hiện tại
- Một biến có thể được dùng trước khi nó được khai báo
x = 5 
log(x) //5 
var x;
- let và const 
 + các biến được định nghĩa let và const được đưa lên đầu khối nhưng không được khởi tạo