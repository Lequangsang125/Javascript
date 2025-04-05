## trong js chỉ có một loại số
- số js luôn là số thực 64 bit 
- không như nn lập trình khác số nguyên, ngắn, dài,...
- số js luôn đc lưu trữ dưới dạng phẩy động độ chính xác kép, theo tiêu chuẩn quốc tế IEEE 754
- định dạng này lưu trữ số trong 64 bit, phân số lưu bit từ 0 đến 51,  số mũ trong các bit từ 52 đến 62 và dấu trong bit 63 
- trong js 0.1 + 0.2 !== 0.3 nên phải dùng bigint để tính tiền 

# độ chính xác số nguyên 
- không có dấu chấm hoặc mũ thì chính xác đến 15 chữ số
 let x = 999999999999999;   // x will be 999999999999999
 let y = 9999999999999999;  // y will be 10000000000000000
# thêm số và chuỗi 
- js dùng toán tử + cho cả phép cộng và nối 
- ngoài cộng ra thì các toán tử - * / sẽ ép string sang number nếu không có ký tự số thì thành NaN
- NaN (+ - * /) 1 số = NaN
- NaN + '5' = NaN5
- typeof NaN = number
- số to quá hoặc nhỏ quá thì thành infinity(âm dương vô cực)
- chia cho số 0 cũng tạo ra infinity
- typeof infinity là number
# hệ thập lục phân 
- js sẽ diễn giải các hằng số thành hệ thập lục phân nếu chúng được đặt sau 0x
- let x = 0xFF
- không bao h được đặt số 0 đứng đầu : let x = 07;
- mặc định js hiển thị số dưới dạng hệ thập phân cơ số 10
- dùng toString() xuất số từ cơ số 2 đến 36
# số js như đối tượng 
- không dùng new tạo đối tượng số 
- so sánh 2 đối tượng js luôn trả false