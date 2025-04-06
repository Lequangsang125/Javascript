# This
- trong js this tham chiếu đến 1 đối tượng 
- truy cập đến đối tượng khác nhau tùy cách dùng 
+ trong đối tượng this tham chiếu đến đối tượng
+ đơn lẻ, this tham chiếu đối tượng toàn cục
+ trong hàm, ở chế độ nghiêm ngặt, this là undefined
+ trong event, this đề cập phần tử đã nhận sự kiện
+ call(), apply(), bind() có thể tham chiếu this đến bất kỳ đối tượng nào 

# this không phải 1 biến, là 1 từ khóa, không thể thay đổi giá trị 
- fullname: function(){
    return this.firstname + " " + this.lastname
}
- toàn cục let x = this;
- trong hàm thường chế độ nghiêm ngặt this là undefined
- trong event thì this là element đó 