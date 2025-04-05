# phương pháp mảng
1) length
2) toString()
3) at()
- lấy phần tử tại vị trí at(index)
4) join() giống toString()
- chuyển mảng thành chuỗi ngăn cách nhau arr.join(' ký tự ngăn cách ')

# thêm xóa phần tử mảng
5) pop()
- trả về giá trị bị pop ra
- xóa phần tử cuối cùng khỏi mảng
6) push()
- trả về độ dài mảng mới
- thêm phần tử cuối mảng
7) shift()
- trả về giá trị loại bỏ
- loại bỏ phần tử đầu mảng
8) unshift()
- thêm phần tử mới vào đầu mảng 
- trả về độ dài mảng mới
9) dùng chỉ mục index để thay đổi phần tử mảng
- làm thay đổi mảng gốc
- const color = ['white','black','red'];
  color[0] = ['blue']

10) dùng length thêm 1 phần tử mới vào mảng
color.[color.length] = 'green'

11) delete arr[i]
-⚠️ Tạo "lỗ", không nên dùng

# nối và sao chép mảng
12) concat()
- không làm thay đổi mảng gốc
- nhận mảng và chuỗi làm đối số
13) copyWithin()
- sao chép phần tử mảng đến vị trí khác 
- Phương pháp này copyWithin()ghi đè lên các giá trị hiện có.
- Phương pháp này copyWithin()không thêm các mục vào mảng.
- Phương pháp này copyWithin()không làm thay đổi độ dài của mảng.

14) slice(start, end)	Cắt một phần → mảng mới	❌ Không ảnh hưởng mảng gốc

15) splice(start, del, ...add)	Xóa/thêm tại vị trí	✅ Làm thay đổi mảng gốc

16) toSpliced()	❗ ES2023: giống splice nhưng không thay đổi mảng gốc	Tạo mảng mới

# làm phẳng mảng
17) flat(chiều sâu)

18) flatMap(func)