## Toán tử  trong js
1) toán tử số học :
 - cộng : + (cũng dùng để nối chuỗi) nên ở chuỗi + là toán tử nối
 - trừ : - 
 - nhân : *
 - mũ 2 : x**y tương đương Math.pow(x,y)
 - chia : /
 - chia lấy phần dư : %
 - tăng 1 đơn vị : ++ 
 - trừ 1 đơn vị : -- 

2) toán tử gán : x += y  <==> x = x + y
 - bằng : =
 - cộng bằng : += (cũng dùng để nối chuỗi)
 - trừ bằng : -=
 - nhân bằng : *=
 - chia bằng : /=
 - phần trăm bằng : %=
 - mũ bằng : **=

3) toán tử so sánh : cũng có thể so sánh chuỗi dựa trên giá trị mã ASCII (hoặc Unicode) 
 - so sánh  : ==
 - so sánh nghiêm ngặt : ===
 - không bằng : !=
 - không bằng nghiêm ngặt : !==
 - lớn hơn : >
 - nhỏ hơn : <
 - lớn hơn hoặc bằng : >=
 - nhỏ hơn hoặc bằng : <=
 - toán tử 3 ngôi : ?

4) toán tử logical
 - và : &&
 - hoặc : ||
 - không : !

5) toán tử kiểu Js
 - kiểu : type of
 - trả về true false của kiểu : instanceof

6) toán tử bitwise
Khi nào nên sử dụng bitwise?
Xử lý dữ liệu nhị phân: Chẳng hạn, trong các trò chơi, mã hóa/giải mã dữ liệu, hoặc khi bạn làm việc với số lượng lớn dữ liệu nhị phân.

Tối ưu hóa hiệu suất: Các phép toán bitwise thường nhanh hơn nhiều so với các phép toán số học thông thường, do chúng được thực hiện ở mức độ phần cứng.

Lập trình hệ thống hoặc điều khiển phần cứng: Khi làm việc với phần cứng hoặc giao tiếp với thiết bị ngoại vi, toán tử bitwise có thể rất hữu ích.

## Ưu tiên 
- nhân chia trước cộng trừ sau