// @/app/components/layout/Navbar/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import "./Navbar.css";
import Link from "next/link";

export default function Navbar() {
	const [theme, setTheme] = useState("light");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const savedTheme = document.documentElement.getAttribute("data-theme") || "light";
		setTheme(savedTheme);
	}, []);

	const toggleTheme = () => {
		const nextTheme = theme === "light" ? "dark" : "light";
		setTheme(nextTheme);
		document.documentElement.setAttribute("data-theme", nextTheme);
		localStorage.setItem("theme", nextTheme);
	};

	// دالة التمرير الانسيابي عند الضغط على الروابط الداخلية
	const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		if (href.startsWith("/#")) {
			const targetId = href.replace("/#", "");
			const element = document.getElementById(targetId);
			if (element) {
				e.preventDefault();
				element.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
				window.history.pushState(null, "", href);
			}
		}
		setIsMobileMenuOpen(false); // إغلاق قائمة الموبايل عند الضغط على أي رابط
	};

	const navItems = [
		{ name: "الرئيسية", href: "/#hero" },
		{ name: "الخدمات الطبية", href: "/#services" },
		{ name: "الأسئلة الشائعة", href: "/#faq" },
	];

	return (
		<header className="clinic-navbar">
			<div className="nav-container">
				<p className="nav-logo">
					عيادة <span>د. صبرين بدر الديب</span>
				</p>

				{/* روابط التنقل للشاشات الكبيرة */}
				<nav className="nav-links">
					{navItems.map((item, index) => (
						<a key={index} href={item.href} onClick={(e) => handleScroll(e, item.href)} aria-label={item.name}>
							{item.name}
						</a>
					))}
				</nav>

				{/* إجراءات الناف بار */}
				<div className="nav-actions">
					<button onClick={toggleTheme} className="theme-toggle-btn" title="تبديل الوضع الليلي" aria-label="تبديل الوضع الليلي">
						{theme === "light" ? "🌙" : "☀️"}
					</button>

					{/* زر القائمة للشاشات الصغيرة (الموبايل) */}
					<button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="فتح القائمة الرئيسية">
						{isMobileMenuOpen ? "✕" : "☰"}
					</button>
				</div>
			</div>

			{/* القائمة المنسدلة للموبايل */}
			{isMobileMenuOpen && (
				<div className="mobile-dropdown-menu">
					{navItems.map((item, index) => (
						<a key={index} href={item.href} onClick={(e) => handleScroll(e, item.href)} className="mobile-nav-link">
							{item.name}
						</a>
					))}
					<Link href="/calculator" className="mobile-nav-link calc-highlight" onClick={() => setIsMobileMenuOpen(false)}>
						حاسبة الحمل و التبويض
					</Link>
					<Link href="/booking" className="btn-primary text-sm py-3 px-5 text-center mt-2">
						احجزي موعداً الآن
					</Link>
				</div>
			)}
		</header>
	);
}
