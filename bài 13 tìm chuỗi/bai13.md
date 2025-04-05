## tìm kiếm chuỗi 
1) indexOf() trả về chỉ số index của lần đầu xuất hiện của 1 chuỗi hoặc trả về -1 nếu k tìm thấy 

2) lastIndexOf()
- trả về index của lần xuất hiện cuối cùng hoặc trả về -1 nếu k tìm thấy 
- có hỗ trợ vị trí bắt đầu

3) search()
- trả về index hoặc -1 
- hỗ trợ regex
- không hỗ trợ vị trí bắt đầu

4) match()
- trả về 1 mảng 
- hỗ trợ regex
- không hỗ trợ vị trí bắt đầu
- hỗ trợ tìm nhiều kết quả dùng flag g

5) matchAll()
- trả về 1 iterator [...x] chứa tất cả kết quả khớp 
- Có từ ES2020, không hỗ trợ Internet Explorer.

6) includes()
- trả về true hoặc false
- phân biệt chữ hoa thường 
- có hỗ trợ vị trí bắt đầu tìm kiếm

7) startsWith()
- trả về true nếu chuỗi bắt đầu từ chuỗi con
- phân biệt hoa - thường
- có hỗ trợ vị trí bắt đầu tìm kiếm

8) endsWith()
- Trả về true nếu chuỗi kết thúc bằng chuỗi con chỉ định.
- Có thể chỉ định độ dài giới hạn khi kiểm tra.
