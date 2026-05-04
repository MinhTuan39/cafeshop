import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Column 1: Liên hệ */}
        <div className="footer-column">
          <h2 className="footer-company-title">CÔNG TY TNHH URBAN COFFEE</h2>
          <h3 className="footer-heading">Liên hệ</h3>
          <ul className="footer-info-list">
            <li className="footer-info-item">
              <a href="https://www.google.com/maps/search/?api=1&query=K62/H12/2+Lê+Cơ,+Hòa+Cường+Bắc,+Đà+Nẵng" target="_blank" rel="noopener noreferrer" className="footer-info-link">
                <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Địa Chỉ : Lê Cơ, K62/H12/2, Hòa Cường Bắc, TP. Đà Nẵng</span>
              </a>
            </li>
            <li className="footer-info-item">
              <a href="tel:19000277" className="footer-info-link">
                <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.81 12.81 0 0 0 .62 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.62A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>1900.0277</span>
              </a>
            </li>
            <li className="footer-info-item">
              <a href="mailto:UrbanCoffee@gmail.com" className="footer-info-link">
                <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>UrbanCoffee@gmail.com</span>
              </a>
            </li>
          </ul>
          <div className="footer-badges">
            <a href="http://online.gov.vn/" target="_blank" rel="noopener noreferrer" className="footer-badge-link">
              <div style={{ background: '#0070ba', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" /></svg>
                ĐÃ THÔNG BÁO BỘ CÔNG THƯƠNG
              </div>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="footer-social-section">
            <h3 className="footer-heading-sm">Theo dõi chúng tôi</h3>
            <div className="footer-socials">
              <a href="https://www.facebook.com/profile.php?id=61588909874313" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/39.minhtuaans/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Điều Kiện & Điều Khoản */}
        <div className="footer-column">
          <h3 className="footer-heading">Điều Kiện & Điều Khoản</h3>
          <ul className="footer-links">
            <li><Link href="#" className="footer-link"><span>•</span> Hình thức thanh toán</Link></li>
            <li><Link href="#" className="footer-link"><span>•</span> Chính sách bảo hành</Link></li>
          </ul>
        </div>

        {/* Column 3: Chính Sách Bảo Mật */}
        <div className="footer-column">
          <h3 className="footer-heading">Chính Sách Bảo Mật</h3>
          <ul className="footer-links">
            <li><Link href="#" className="footer-link"><span>•</span> Chính sách Giao hàng & Vận chuyển</Link></li>
            <li><Link href="#" className="footer-link"><span>•</span> Chính sách Đổi trả & Hoàn tiền</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © {new Date().getFullYear()} CÔNG TY TNHH URBAN COFFEE. All rights reserved.</p>
      </div>

      {/* Floating contact button */}
      <div className="floating-contact" aria-label="Contact us">
        <svg xmlns="http://www.w3.org/2000/svg" className="floating-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </div>
    </footer>
  );
}
