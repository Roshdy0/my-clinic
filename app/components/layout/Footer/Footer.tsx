import "./Footer.css";

export default function Footer() {
	const footerLinks = [
		{ name: "الرئيسية", href: "/#hero" },
		{ name: "الخدمات الطبية", href: "/#services" },
		{ name: "حاسبة الحمل", href: "/#PregnancyCalculator" },
		{ name: "الأسئلة الشائعة", href: "/#faq" },
		{ name: "اتصل بنا", href: "/#booking" },
	];

	return (
		<footer className="footer-section">
			<div className="footer-container">
				{/* شبكة محتوى التذييل (استخدام Tailwind حصرياً للـ Grid) */}
				<div className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
					{/* العمود الأول: التعريف بالطبيبة */}
					<div className="footer-col">
						<h3 className="footer-brand">د. صبرين بدر الديب</h3>
						<p className="footer-brand-desc">استشاري طب وتأخر الحمل والحقن المجهري. نعتني بصحتك وصحة جنينك بأحدث التقنيات وأعلى معايير الرعاية الطبية والإنسانية.</p>
						<div className="footer-socials">
							<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
								فيسبوك
							</a>
							<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
								انستغرام
							</a>
							<a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
								تيك توك
							</a>
							<a href="https://wa.me/201117651690" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
								واتساب
							</a>
						</div>
					</div>

					{/* العمود الثاني: روابط سريعة */}
					<div className="footer-col">
						<h4 className="footer-heading">روابط سريعة</h4>
						<ul className="footer-links">
							{footerLinks.map((item, index) => (
								<li key={index}>
									<a href={item.href} aria-label={item.name}>
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* العمود الثالث: أوقات العمل */}
					<div className="footer-col">
						<h4 className="footer-heading">أوقات العمل</h4>
						<ul className="footer-hours">
							<li>
								<span>السبت - الخميس:</span> 2:00 ظهراً - 9:00 مساءً
							</li>
							<li>
								<span>الجمعة:</span> إجازة أسبوعية
							</li>
							<li className="footer-emergency">
								<span>طوارئ الولادة:</span> متاحة على مدار الساعة
							</li>
						</ul>
					</div>

					{/* العمود الرابع: العنوان والتواصل */}
					<div className="footer-col">
						<h4 className="footer-heading">العنوان والتواصل</h4>
						<p className="footer-contact-text">📍 برج الأطباء، الدور الثالث، العيادة المركزية لنساء والتوليد.</p>
						<p className="footer-contact-text">📞 هاتف / واتساب: +201117651690</p>
						<div className="footer-map-placeholder">
							<span>خريطة العيادة التفاعلية 🗺️</span>
						</div>
					</div>
				</div>

				{/* الشريط السفلي للحقوق */}
				<div className="footer-bottom">
					<p>© {new Date().getFullYear()} د. صبرين بدر الديب. جميع الحقوق محفوظة.</p>
					<p className="developer-tag">تم التطوير بأعلى معايير الأداء والاحترافية 🚀</p>
				</div>
			</div>
		</footer>
	);
}
