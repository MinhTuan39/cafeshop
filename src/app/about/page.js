import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="about-page page-wrapper">
      <section className="about-section">
        <div className="about-image-wrapper">
          <Image src="/image/about-1.png" alt="Coffee beans" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="about-text-wrapper">
          <h2 className="about-title">Hữu cơ - Hơn cả một chứng nhận</h2>
          <p className="about-desc">
            Từ lâu trước khi "hữu cơ" trở thành xu hướng toàn cầu, chúng tôi đã chọn con đường khó hơn – canh tác không hóa chất, bảo vệ đất và nguồn nước, đồng thời minh bạch trong từng công đoạn. Năm 2018, L'amant Café tự hào trở thành nơi sở hữu nông trại cà phê đầu tiên tại Việt Nam đạt chứng nhận hữu cơ USDA (Bộ Nông nghiệp Hoa Kỳ). Nhưng với chúng tôi, đó không phải là điểm đến – mà là khởi đầu cho một cam kết trọn đời với sức khỏe cộng đồng, cân bằng sinh thái và những phương thức canh tác bền vững hơn.
          </p>
          <button className="about-btn">Xem ngay</button>
        </div>
      </section>
      
      <section className="about-section about-section-reverse">
        <div className="about-text-wrapper">
          <h2 className="about-title">Mỗi vị cà phê – Một cá tính riêng</h2>
          <p className="about-desc">
            Dù bạn yêu sự đậm đà truyền thống hay vị thanh nhẹ hiện đại, L'amant đều có lựa chọn dành riêng cho bạn. Từ cà phê pha phin, espresso đến capsule và drip bag tiện lợi – mỗi dòng sản phẩm mang một cá tính hương vị khác biệt, phản ánh gu thưởng thức độc đáo của từng người. L'amant Café không chỉ phục vụ cà phê – chúng tôi mang đến trải nghiệm cá nhân hóa trong từng tách cà phê mỗi ngày.
          </p>
          <button className="about-btn">Xem ngay</button>
        </div>
        <div className="about-image-wrapper">
          <Image src="/image/about-2.png" alt="Coffee roasting" fill style={{ objectFit: 'cover' }} />
        </div>
      </section>
    </div>
  );
}
