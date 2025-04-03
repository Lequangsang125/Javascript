## hàm dựng đối tượng Object contructor
- dùng khi ta cần tạo nhiều đối tượng cùng loại
- để tạo một kiểu đối tượng, ta cần dùng hàm dựng đối tượng 
- cách làm tốt là viết hoa chữ cái đầu cho hàm xây dựng
#
- Thuộc tính mới sẽ được thêm vào myFather . Không phải bất kỳ Đối tượng Person nào khác 
- Không thể thêm thuộc tính vào hàm tạo
- Muốn thêm phải thêm vào prototype
- Thêm 1 method vào đối tượng tạo ra từ hàm tạo như bình thường 
- Thêm 1 method vào hàm tạo thì lỗi vì các đối tượng được tạo ra từ hàm tạo sẽ tạo trước
nên khi ta truy cập vào dùng nó sẽ báo đây không phải là hàm vì nó k tìm thấy được
- Ta cần thêm nó vào prototype thì nó tự động tạo trước khi tạo đối tượng từ hàm tạo
#
- Các hàm dựng JavaScript tích hợp
- khi dùng new ta biến tất cả thành đối tượng:
    new Object()   // A new Object object
    new Array()    // A new Array object
    new Map()      // A new Map object
    new Set()      // A new Set object
    new Date()     // A new Date object
    new RegExp()   // A new RegExp object
    new Function() // A new Function object
- ít dùng từ khóa new 
    mà tạo thẳng luôn
    const obj1 = {};
    const obj1 = new Object(); // dài dòng
- trình duyệt tối ưu hóa [] nhanh hơn new Array();
- new String(), new Number(), new Boolean() tạo ra đối tượng thay vì giá trị nguyên thủy,
gây lỗi tiềm ẩn

# dùng new khi nào 
- dùng khi tạo ra đối tượng từ hàm tạo hoặc là class - gọi là instance
 
## ghi chú 
- trong hàm xây dựng this không có giá trị
- giá trị của this trở thành đối tượng khi một đối tượng mới được tạo ra
- Math() không có trong danh sách. Math là đối tượng toàn cục. new Không thể sử dụng từ khóa trên Math.
- không nên dùng từ khóa new để tạo đối tượng vì dài dòng 
- và nếu dùng new tạo new String thì nó chuyển thành đối tượng r