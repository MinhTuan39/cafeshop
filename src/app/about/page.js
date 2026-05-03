import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="about-page page-wrapper">
      <section className="about-section">
        <div className="about-image-wrapper">
          <Image src="/image/about-1.png" alt="Coffee beans" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="about-text-wrapper">
          <h2 className="about-title">Từ Gia Lai đến nhịp sống thành thị</h2>
          <p className="about-desc">
            Urban Coffee mang trọn tinh hoa cà phê cao nguyên vào từng sản phẩm cà phê hòa tan, kết hợp hài hòa giữa ba dòng hạt đặc trưng: Moka tinh tế, Arabica thanh thoát và Robusta đậm đà. Được nuôi dưỡng bởi khí hậu và thổ nhưỡng lý tưởng, từng hạt cà chín được tuyển chọn kỹ lưỡng, trải qua quy trình rang xay và chiết xuất hiện đại nhằm giữ trọn hương thơm tự nhiên cùng chiều sâu hương vị. Không chỉ dừng lại ở chất lượng, Urban Coffee còn tối ưu sự tiện lợi, giúp bạn dễ dàng thưởng thức một ly cà phê chuẩn gu – dù ở văn phòng, tại nhà hay giữa nhịp sống bận rộn của thành phố.
          </p>
          <button className="about-btn">Xem ngay</button>
        </div>
      </section>

      <section className="about-section about-section-reverse">
        <div className="about-text-wrapper">
          <h2 className="about-title">Mỗi ly cà phê – Một cá tính riêng biệt</h2>
          <p className="about-desc">
            Sự hòa quyện giữa Moka, Arabica và Robusta tạo nên những tầng hương vị phong phú, từ nhẹ nhàng tinh tế đến mạnh mẽ đậm sâu. Mỗi ly cà phê không chỉ đơn thuần là một thức uống, mà là một trải nghiệm mang dấu ấn cá nhân – phù hợp với nhiều phong cách thưởng thức khác nhau. Urban Coffee hướng đến sự cân bằng giữa chất lượng, cảm xúc và lối sống hiện đại, nơi từng ngụm cà phê không chỉ để tỉnh táo mà còn để tận hưởng, để cảm nhận và để khẳng định gu riêng của chính bạn.
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
