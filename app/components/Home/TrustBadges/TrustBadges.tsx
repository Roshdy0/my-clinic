import "./TrustBadges.css";

export default function TrustBadges() {
	const stats = [
		{
			value: "+١٠ سنوات",
			label: "خبرة طبية متخصصة في النساء والتوليد",
			icon: "⭐",
			colorClass: "pink-accent",
		},
		{
			value: "+٥,٠٠٠",
			label: "حالة ولادة ومتابعة حمل ناجحة",
			icon: "👶",
			colorClass: "blue-accent",
		},
		{
			value: "١٠٠٪",
			label: "خصوصية كاملة ورعاية دافئة",
			icon: "🛡️",
			colorClass: "pink-accent",
		},
		{
			value: "٢٤/٧",
			label: "استجابة سريعة ودعم للطوارئ",
			icon: "💬",
			colorClass: "blue-accent",
		},
	];

	return (
		<section className="trust-badges-section">
			<div className="trust-badges-container">
				<div className="trust-badges-grid grid grid-cols-2 lg:grid-cols-4">
					{stats.map((stat, index) => (
						<div key={index} className={`trust-badge-card ${stat.colorClass}`}>
							<div className="badge-icon-wrapper">
								<span>{stat.icon}</span>
							</div>
							<div className="badge-content">
								<h3 className="badge-value">{stat.value}</h3>
								<p className="badge-label">{stat.label}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
