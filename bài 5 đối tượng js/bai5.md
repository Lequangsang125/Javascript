## Đối tượng trong js 
vd thực tế : đối tượng trong đời sống là nhà, xe, người,...
1) thuộc tính đối tượng (properties)
let car = {
  properties: value chính là key: value,
  name: "Fiat",          // Tên của chiếc xe
  model: "500",          // Mẫu xe
  weight: "850kg",       // Trọng lượng
  color: "trắng",        // Màu sắc
};
2) Phương pháp đối tượng (method)
  // Phương thức (method) để khởi động xe
  start: function() {
    console.log(this.name + " is starting!");
  },
  
  // Phương thức để lái xe
  drive: function() {
    console.log(this.name + " is driving!");
  },
  
  // Phương thức để phanh
  brake: function() {
    console.log(this.name + " is braking!");
  },
  
  // Phương thức để dừng xe
  stop: function() {
    console.log(this.name + " has stopped!");
  }

3) Truy cập vào thuộc tính đối tượng 
- Bạn có thể truy cập vào thuộc tính của đối tượng theo hai cách:
 + objectName.propertyName
 + objectName["propertyName"]

4) Hàm trong đối tượng - hàm được lưu thành thuộc tính trong đối tượng
const person = {
  firstName: "sang",
  lastName : "le",
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

5) đối tượng js có thể thay đổi (tham chiếu)
-Nếu person là đối tượng : 
  const x = person;
+ đối tượng x không phải bản sao của person x chính là person luôn 
+ chúng cùng chia sẻ 1 bộ nhớ
+ nếu bạn thay đổi x thì person cũng bị thay đổi

## ghi chú 
- Một cách làm phổ biến là khai báo đối tượng bằng từ khóa const .
- Vì const không thể gán lại đối tượng nhưng có thể thay đổi các thuộc tính của nó
- key:value chính là properties:value
- là có 2 cách tạo ra Object : 
 + 1 là tạo bản thiết kế (Dùng chung nhiều đối tượng)
 + 2 là tạo 1 bản duy nhất
- không cần thiết dùng new Object()
- để dễ đọc dùng theo object literal
- method chính là hàm trong đối tượng
- TRONG JS ĐỐI TƯỢNG LÀ VUA
- hiểu được đối tượng là hiểu được js
- trong js hầu như mọi thứ đều là đối tượng :
    + Đối tượng là đối tượng
    + Toán học là đối tượng
    + Các hàm là các đối tượng
    + Ngày tháng là đối tượng
    + Mảng là đối tượng
    + Bản đồ là đối tượng
    + Tập hợp là các đối tượng
- trong js giá trị nguyên thủy k thể thay đổi (7 kiểu dữ liệu trừ object)
- nếu x = 3.14; bạn chỉ có thể thay đổi x nhưng k thể thay đổi 3.14 
