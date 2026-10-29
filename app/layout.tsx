import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

export const metadata: Metadata = {
	title: {
		default: "عيادة د.صبرين بدر الديب | نساء وتوليد وعلاج تأخر الحمل",
		template: "%s | عيادة د.صبرين بدر الديب",
	},
	description: "رعاية طبية متكاملة ومتقدمة لصحة المرأة، متابعة الحمل، علاج تأخر الحمل، والولادة الآمنة بأحدث التقنيات.",
	keywords: ["نساء وتوليد", "متابعة حمل", "علاج تأخر الحمل", "حقن مجهري", "سونار رباعي الأبعاد", "طبيبة نساء"],
	authors: [{ name: "د.صبرين بدر الديب" }],
	openGraph: {
		title: "عيادة د.صبرين بدر الديب | رحلة أمومة آمنة ورعاية متكاملة",
		description: "احجزي موعدك الآن مع استشاري النساء والتوليد وعلاج تأخر الحمل للحصول على رعاية فائقة الخصوصية.",
		url: "https://صبرين بدر الديب",
		siteName: "عيادة د.صبرين بدر الديب",
		type: "website",
		locale: "ar_AR",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ar" dir="rtl">
			<body className="font-sans bg-slate-50 text-slate-800 antialiased selection:bg-rose-100 selection:text-rose-700">
				<Navbar />
				<main className="min-h-screen">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
