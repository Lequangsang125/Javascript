## Hiển thị một đối tượng sẽ xuất ra [object Object].
- khi mà các bạn muốn hiển thị đối tượng ra mà dùng innerHTML nó sẽ bị [object Object] vì innerHTML cố gắng chuyển đối tượng thành chuỗi bằng toString()

- Cách khắc phục để in ra đối tượng hiển thị ngoài trình duyệt
1) Hiển thị thuộc tính đối tượng theo tên (lấy thẳng value và in ra )
 - Sử dụng khi bạn cần truy cập vào một thuộc tính cụ thể.

2) Hiển thị Thuộc tính Đối tượng trong Vòng lặp
 - Sử dụng khi bạn muốn lặp qua tất cả các thuộc tính trong đối tượng và xử lý hoặc hiển thị chúng.

3) Sử dụng Object.values()
 -  Sử dụng khi bạn chỉ quan tâm đến giá trị của các thuộc tính trong đối tượng và muốn có một mảng các giá trị.

4) Sử dụng Object.entries()
Duyệt qua cả key và value: Khi bạn cần cả tên thuộc tính và giá trị của đối tượng trong vòng lặp.

Biến đối tượng thành mảng: Object.entries() chuyển đối tượng thành một mảng các cặp [key, value], hữu ích khi cần thao tác như sắp xếp hoặc áp dụng các phương thức mảng.

Cập nhật hoặc thay đổi giá trị của đối tượng: Dễ dàng sửa đổi các giá trị dựa trên tên thuộc tính.

5) Sử dụng JSON.stringify()
-Các đối tượng JavaScript có thể được chuyển đổi thành chuỗi bằng phương thức JSON JSON.stringify().

