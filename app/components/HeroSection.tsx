'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);
	const [activeSection, setActiveSection] = useState('hero');
	const [zoomedImage, setZoomedImage] = useState<string | null>(null);

	// Helper function to get the correct image path for GitHub Pages
	const getImagePath = (imagePath: string) => {
		// For GitHub Pages deployment, we need to add the repository name as basePath
		// We can detect if we're in production by checking the current location
		if (typeof window !== 'undefined') {
			// Client-side: check if we're on GitHub Pages
			const isGitHubPages = window.location.hostname === 'lamtdse61743.github.io';
			return isGitHubPages ? `/Portfolio${imagePath}` : imagePath;
		} else {
			// Server-side: check if we're in production (GitHub Pages) or development
			const isProduction = process.env.NODE_ENV === 'production';
			return isProduction ? `/Portfolio${imagePath}` : imagePath;
		}
	};

	// Smooth scroll function with enhanced smoothness
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			const headerOffset = 80; // Account for fixed navigation height
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

			// Use a more sophisticated smooth scroll
			const startPosition = window.pageYOffset;
			const distance = offsetPosition - startPosition;
			const duration = Math.min(Math.abs(distance) / 2, 1000); // Max 1 second
			let start: number | null = null;

			function animation(currentTime: number) {
				if (start === null) start = currentTime;
				const timeElapsed = currentTime - start;
				const progress = Math.min(timeElapsed / duration, 1);

				// Easing function for smoother animation
				const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
				const run = startPosition + distance * ease(progress);

				window.scrollTo(0, run);

				if (timeElapsed < duration) {
					requestAnimationFrame(animation);
				}
			}

			requestAnimationFrame(animation);
		}
	};

	// Track active section based on scroll position with throttling
	useEffect(() => {
		let ticking = false;

		const handleScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					const sections = ['hero', 'skills', 'experience', 'education', 'publications'];
					const scrollPosition = window.scrollY + 120; // Adjusted offset

					for (const section of sections) {
						const element = document.getElementById(section);
						if (element) {
							const { offsetTop, offsetHeight } = element;
							if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
								setActiveSection(section);
								break;
							}
						}
					}
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
		{zoomedImage && (
			<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setZoomedImage(null)}>
				<img src={zoomedImage} alt="Zoomed" className="max-w-full max-h-full rounded-lg shadow-2xl border-4 border-white" style={{ cursor: 'zoom-out' }} />
			</div>
		)}
		<section className="min-h-screen relative overflow-hidden py-24 md:py-0">
			<div className="absolute inset-0">
				<div
					className="absolute inset-0 opacity-10"
					style={{ backgroundImage: `url(${getImagePath('/grid.svg')})` }}
				/>
			</div>

			{/* Navigation Menu */}
			<motion.nav
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5 }}
				className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900/90 backdrop-blur-md rounded-full border border-gray-700/50 px-8 py-4 shadow-2xl"
			>
				<div className="flex space-x-8">
					{[
						{ id: 'hero', label: 'Contact' },
						{ id: 'skills', label: 'Skills' },
						{ id: 'experience', label: 'Experience' },
						{ id: 'education', label: 'Education' },
						{ id: 'publications', label: 'Publications' }
					].map((item) => (
						<button
							key={item.id}
							onClick={() => scrollToSection(item.id)}
							className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.id
								? 'bg-blue-500/20 text-blue-400 shadow-lg'
								: 'text-gray-400 hover:text-white hover:bg-gray-800/50'
								}`}
						>
							{activeSection === item.id && (
								<motion.div
									layoutId="activeTab"
									className="absolute inset-0 bg-blue-500/10 rounded-full border border-blue-500/30"
									initial={false}
									transition={{ type: "spring", stiffness: 500, damping: 30 }}
								/>
							)}
							<span className="relative z-10">{item.label}</span>
						</button>
					))}
				</div>
			</motion.nav>

			<div id="hero" className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
					{/* Profile Picture */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2 }}
						className="mb-6 md:mb-8"
					>
						<div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 p-1">
							<img
								src={getImagePath('/profile.jpg')}
								alt="Lam Dinh Trinh Profile Picture"
								className="w-full h-full object-cover rounded-full bg-gray-900"
							/>
						</div>
					</motion.div>

					<div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
						<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500">
							Lam Dinh Trinh
						</h1>
						<h2 className="text-2xl md:text-4xl font-bold text-white">Marketing Specialist & AI Engineer</h2>
						<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
							I bridge the gap between IT innovation and business operations, applying AI-driven strategies to marketing campaigns, customer engagement, and data analytics. Experienced in scaling retail businesses and optimizing digital performance through intelligent automation.
						</p>
					</div>

					{/* Contact Buttons */}
					<div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
						<a
							href="mailto:lamtdse61743@gmail.com"
							className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
							</svg>
							Get in Touch
						</a>
						<a
							href="https://drive.google.com/file/d/19XfZ1G-_deqwBAZ8F7R-hVbDDHj25KLb/view?usp=sharing"
							target="_blank"
							className="px-8 py-3 bg-black border border-gray-800 rounded-lg font-medium hover:bg-gray-900 transition-colors inline-flex items-center justify-center gap-2"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
									clipRule="evenodd"
								/>
								<path fillRule="evenodd" d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
							</svg>
							View Resume
						</a>
					</div>

					{/* Social Links */}
					<div className="flex justify-center gap-6 mb-6">
						<a
							href="https://www.facebook.com/lam.inh.238271/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
							</svg>
						</a>
						<a
							href="https://www.linkedin.com/in/lam-dinh-9104b6306/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
							</svg>
						</a>
					</div>

					{/* Location */}
					<div className="flex items-center justify-center gap-2 text-gray-400 mb-6 md:mb-8">
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						<span>London, Ontario, Canada</span>
					</div>

					<div className="space-y-3 mb-6 md:mb-8">
						<div className="flex flex-wrap justify-center gap-2 md:gap-3">
							<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">Meta Ads Manager</span>
							<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">Google Ads</span>
							<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm">TikTok Ads</span>
							<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">SEO/SEM</span>
							<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">Python</span>
							<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm">JavaScript</span>
							<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">HTML</span>
						</div>
						<div className="flex flex-wrap justify-center gap-2 md:gap-3">
							<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">RESTful API</span>
							<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm">Node.js</span>
							<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">Next.js</span>
							<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">OpenAI</span>
							<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm">GitHub Copilot</span>
							<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">Google Analytics</span>
							<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">Entrepreneurship</span>
							<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm">Team Leadership</span>
						</div>
					</div>
				</motion.div>

				{/* Interactive System Architecture */}
				<div id="skills" className="w-full max-w-5xl mx-auto relative px-2 md:px-4 scroll-mt-24">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
					>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">

							{/* Backend Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${selectedStack === 'backend' ? 'bg-purple-500/20 border-purple-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
									}`}
								onMouseEnter={() => setSelectedStack('backend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-400">Digital Marketing & Campaign Management</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Meta Ads Manager, Google Ads, TikTok Ads
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										SEO/SEM Optimization & Content Creation
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Campaign Performance Analytics & ROI Analysis
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Social Media Strategy & Customer Engagement
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										A/B Testing & Conversion Optimization
									</li>
													</ul>
													{/* CronusArt image removed from skills section; now only in Professional Experience */}
							</div>
							{/* Frontend Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${selectedStack === 'frontend' ? 'bg-blue-500/20 border-blue-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
									}`}
								onMouseEnter={() => setSelectedStack('frontend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400">Business Intelligence & Data Analytics</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">

									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Python for Data Processing & Campaign Analysis
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Google Analytics & Performance Tracking
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Customer Data Segmentation & Behavior Analysis
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Business Dashboard Development
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Marketing Attribution & Revenue Analytics
									</li>
								</ul>
							</div>


							{/* DevOps Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${selectedStack === 'devops' ? 'bg-teal-500/20 border-teal-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
									}`}
								onMouseEnter={() => setSelectedStack('devops')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-400">AI Applications & Automation</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										OpenAI APIs & ChatGPT Integration
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Marketing Content Automation & AI-Generated Visuals
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Customer Service Chatbots & Support Automation
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										GitHub Copilot & AI-Assisted Development
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Web Development (HTML, CSS, JavaScript, Next.js)
									</li>
								</ul>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Experience Section */}
				<motion.div
					id="experience"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					className="w-full max-w-4xl mx-auto mt-12 md:mt-16 px-2 md:px-4 scroll-mt-24"
				>
					<h3 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500">
						Professional Experience
					</h3>
					
					{/* Founder & Entrepreneur Header */}
					<div className="text-center mb-8 md:mb-12">
						<h4 className="text-xl md:text-2xl font-bold text-purple-400 mb-2">Founder & Entrepreneur</h4>
						<p className="text-base md:text-lg text-gray-400 mb-1">August 2019 – Present</p>
						<p className="text-lg md:text-xl font-semibold text-white">LDWatch - Watch Retail Business, Vietnam</p>
					</div>

					<div className="space-y-6 md:space-y-8">

						{/* Business Management & Negotiation */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.6 }}
							className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-4 md:p-6 hover:border-blue-500/30 transition-colors"
						>
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0 mt-1">
									<div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
										<svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
										</svg>
									</div>
								</div>
								<div className="flex-1">
									<h5 className="text-lg md:text-xl font-bold text-blue-400 mb-3">Business Management & Negotiation</h5>
									<div className="space-y-2 text-sm md:text-base text-gray-300">
										<ul className="space-y-2 text-gray-400">
											<li className="flex items-start gap-2">
												<div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
												<span>Founded and scaled a retail business, overseeing operations from supplier contracts to customer delivery</span>
											</li>
											<li className="flex items-start gap-2">
												<div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
												<span>Demonstrated strong negotiation skills with <strong className="text-blue-400">Casio headquarters</strong> and Shenzhen watch brands</span>
											</li>
											<li className="flex items-start gap-2">
												<div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
												<span>Secured favorable pricing and supply terms to maximize profitability</span>
											</li>
										</ul>
												</div>
												{/* CronusArt Exhibition Image */}
												<div className="mt-4 flex flex-col items-center">
													<img
														src={getImagePath('/cronusartcollaborationexhibition.jpg')}
														alt="CronusArt Collaboration Exhibition"
														className="w-full max-w-md rounded-lg border border-gray-700 shadow-lg mb-2"
													/>
													<p className="text-xs text-gray-400 text-center">Attending the CronusArt Collaboration Exhibition in Shenzhen, representing LDWatch in partnership with a leading Chinese watch brand.</p>
												</div>
											</div>
										</div>
									</motion.div>

						{/* AI & Marketing Innovation */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.7 }}
							className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-4 md:p-6 hover:border-purple-500/30 transition-colors"
						>
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0 mt-1">
									<div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg flex items-center justify-center">
										<svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
										</svg>
									</div>
								</div>
								<div className="flex-1">
									<h5 className="text-lg md:text-xl font-bold text-purple-400 mb-3">AI & Marketing Innovation</h5>
									<div className="space-y-2 text-sm md:text-base text-gray-300">
										<ul className="space-y-2 text-gray-400">
											<li className="flex items-start gap-2">
												<div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
												<span>Applied AI expertise to automate content creation (product descriptions, promotional posts) and deploy chatbots for customer support</span>
											</li>
											<li className="flex items-start gap-2">
												<div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
												<span>Leveraged generative AI to customize product visuals (color variations) based on customer preferences, offering broader choices and enhancing personalization</span>
											</li>
											<li className="flex items-start gap-2">
												<div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
												<span>Executed digital campaigns across Facebook, Instagram, and e-commerce platforms, increasing <strong className="text-purple-400">sales by 35%</strong> in the first year</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Website Development & SEO */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.8 }}
							className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-4 md:p-6 hover:border-teal-500/30 transition-colors"
						>
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0 mt-1">
									<div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center">
										<svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
										</svg>
									</div>
								</div>
								<div className="flex-1">
									<h5 className="text-lg md:text-xl font-bold text-teal-400 mb-3">Website Development & SEO</h5>
									<div className="space-y-2 text-sm md:text-base text-gray-300">
										<ul className="space-y-2 text-gray-400">
											<li className="flex items-start gap-2">
												<div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
												<span>Designed, developed, and maintained the LDWatch retail website as a product showcase</span>
											</li>
											<li className="flex items-start gap-2">
												<div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
												<span>Applied strong knowledge of HTML and CSS to build optimized landing pages for promotions and new product releases</span>
											</li>
											<li className="flex items-start gap-2">
												<div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
												<span>Implemented SEO best practices (metadata, keyword optimization, structured product pages), increasing <strong className="text-teal-400">organic traffic by 60%</strong> and reducing <strong className="text-teal-400">bounce rate by 25%</strong></span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Marketing Campaign Analytics */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.9 }}
							className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-4 md:p-6 hover:border-blue-500/30 transition-colors"
						>
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0 mt-1">
									<div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
										<svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
										</svg>
									</div>
								</div>
								<div className="flex-1">
									<h5 className="text-lg md:text-xl font-bold text-blue-400 mb-3">Marketing Campaign Analytics</h5>
									<div className="space-y-4 text-sm md:text-base text-gray-300">
										<ul className="space-y-2 text-gray-400">
											<li className="flex items-start gap-2">
												<div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
												<span>Managed and optimized <strong className="text-blue-400">464+ paid social campaigns</strong> across Facebook/Instagram with total spend of <strong className="text-blue-400">$33K CAD</strong></span>
											</li>
											<li className="flex items-start gap-2">
												<div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
												<span>Generated <strong className="text-blue-400">12,064 conversations</strong> and <strong className="text-blue-400">10,543 new contacts</strong> over ~3.1 years</span>
											</li>
											<li className="flex items-start gap-2">
												<div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
												<span>Delivered an overall average of <strong className="text-blue-400">~316 reach per CAD</strong>, <strong className="text-blue-400">~0.37 conversations per CAD</strong> and <strong className="text-blue-400">~0.32 contacts per CAD</strong></span>
											</li>
											<li className="flex items-start gap-2">
												<div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
												<span>Top campaigns achieved up to <strong className="text-blue-400">3,328 reach per CAD</strong> and <strong className="text-blue-400">2.48 conversations per CAD</strong></span>
											</li>
										</ul>
										
												{/* Campaign Overview Image */}
												<div className="mt-6">
													<div className="rounded-lg overflow-hidden mb-4 border border-gray-700 bg-gray-900/40">
														<img
															src={getImagePath('/campaign.jpg')}
															alt="Marketing Campaign Analytics Overview"
															className="w-full h-auto object-cover"
														/>
														<p className="text-xs text-gray-400 text-center mt-2">Overview of my real campaign performance dashboard, visualizing key metrics and results from 464+ paid social campaigns.</p>
													</div>
													<h6 className="text-lg font-semibold text-blue-400 mb-4">Campaign Performance Analytics Dashboard</h6>
													{/* Grid of Charts */}
													<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												
												{/* Top Performing Campaigns */}
												<div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
													<h6 className="text-sm font-semibold text-green-400 mb-3">Top 15 Most Efficient Campaigns</h6>
													<div className="rounded-lg overflow-hidden">
														<img
															src={getImagePath('/top15mostefficientcampaign.png')}
															alt="Top 15 Most Efficient Campaign Performance"
															className="w-full h-auto object-cover border border-gray-600"
														/>
													</div>
													<p className="text-xs text-gray-400 mt-2 leading-relaxed">
														<strong className="text-green-400">Performance Excellence:</strong> This analysis reveals my top-tier campaigns that consistently delivered exceptional value. 
														These campaigns represent the <strong className="text-green-300">gold standard</strong> of my portfolio, showing how my strategic targeting, 
														creative optimization, and budget allocation converged to create campaigns achieving <strong className="text-green-300">2.48 conversations per CAD</strong> 
														and <strong className="text-green-300">3,328 reach per CAD</strong> - significantly outperforming industry benchmarks.
													</p>
												</div>

												{/* Campaign Reach Efficiency */}
												<div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
													<h6 className="text-sm font-semibold text-purple-400 mb-3">Top 10 Campaign Reach Efficiency</h6>
													<div className="rounded-lg overflow-hidden">
														<img
															src={getImagePath('/top10campaignreachefficiency.png')}
															alt="Top 10 Campaign Reach Efficiency Analysis"
															className="w-full h-auto object-cover border border-gray-600"
														/>
													</div>
													<p className="text-xs text-gray-400 mt-2 leading-relaxed">
														<strong className="text-purple-400">Reach Optimization Mastery:</strong> This chart demonstrates my systematic approach to maximizing audience reach 
														while maintaining cost efficiency. Through <strong className="text-purple-300">A/B testing creative formats</strong>, refining audience targeting parameters, 
														and optimizing bid strategies, I achieved remarkable reach efficiency. The data shows how my strategic campaign structure 
														and <strong className="text-purple-300">precise audience segmentation</strong> enabled me to reach more potential customers per dollar spent than traditional broad-targeting approaches.
													</p>
												</div>

												{/* Conversion Funnel Analysis */}
												<div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
													<h6 className="text-sm font-semibold text-teal-400 mb-3">Conversion Funnel Efficiency</h6>
													<div className="rounded-lg overflow-hidden">
														<img
															src={getImagePath('/top10campaignconversionfunnelefficiency.png')}
															alt="Top 10 Campaign Conversion Funnel Efficiency"
															className="w-full h-auto object-cover border border-gray-600"
														/>
													</div>
													<p className="text-xs text-gray-400 mt-2 leading-relaxed">
														This chart shows the campaigns ranked by conversion funnel efficiency. A few stood out with significantly higher conversion rates, while others lagged behind. The insight suggests prioritizing top-performing funnels and refining weaker ones.
													</p>
												</div>

												{/* Campaign Spend Distribution */}
												<div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
													<h6 className="text-sm font-semibold text-yellow-400 mb-3">Strategic Budget Allocation</h6>
													<div className="rounded-lg overflow-hidden">
														<img
															src={getImagePath('/top15campaignspend.png')}
															alt="Top 15 Campaign Spend Distribution"
															className="w-full h-auto object-cover border border-gray-600"
														/>
													</div>
													<p className="text-xs text-gray-400 mt-2 leading-relaxed">
														This visualization illustrates how budget was distributed across campaigns. A larger share was directed toward proven high performers, while smaller amounts were used for testing new strategies. This approach balances stability with experimentation.
													</p>
												</div>

												{/* Performance Benchmarking */}
												<div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
													<h6 className="text-sm font-semibold text-red-400 mb-3">Performance Optimization Insights</h6>
													<div className="rounded-lg overflow-hidden">
														<img
															src={getImagePath('/top10leastefficientcycampaign.png')}
															alt="Least Efficient Campaign Analysis for Optimization"
															className="w-full h-auto object-cover border border-gray-600"
														/>
													</div>
													<p className="text-xs text-gray-400 mt-2 leading-relaxed">
														This chart highlights the least efficient campaigns by conversions per cost. Several campaigns delivered lower returns compared to the rest of the portfolio. Identifying these underperformers helps guide reallocation of budget and creative adjustments.
													</p>
												</div>

												{/* Geographic Performance */}
												<div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
													<h6 className="text-sm font-semibold text-indigo-400 mb-3">Audience Reach vs Impression Analysis</h6>
													<div className="rounded-lg overflow-hidden">
														<img
															src={getImagePath('/reachvsimpressionmap.png')}
															alt="Reach vs Impression Performance Mapping"
															className="w-full h-auto object-cover border border-gray-600"
														/>
													</div>
													<p className="text-xs text-gray-400 mt-2 leading-relaxed">
														This scatter plot maps the relationship between unique reach and total impressions. Most campaigns clustered around lower reach, while a few extended significantly further. The analysis helps balance frequency with audience expansion.
													</p>
												</div>

											</div>

											{/* Campaign Creatives & Demo Gallery */}
											<div className="mt-8">
												<h6 className="text-md font-semibold text-blue-400 mb-3">Campaign Creatives & Demo Gallery</h6>
												<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
													<img src={getImagePath('/campaigndemo1.jpg')} alt="Campaign Demo 1" className="rounded-lg border border-gray-700 object-contain w-full min-h-[20rem] max-h-[32rem] bg-black" />
													<img src={getImagePath('/campaigndemo2.jpg')} alt="Campaign Demo 2" className="rounded-lg border border-gray-700 object-contain w-full min-h-[20rem] max-h-[32rem] bg-black" />
													<img src={getImagePath('/campaigndemo3.jpg')} alt="Campaign Demo 3" className="rounded-lg border border-gray-700 object-contain w-full min-h-[20rem] max-h-[32rem] bg-black" />
												</div>
												<p className="text-xs text-gray-400 text-center mt-2">This section presents a selection of ad creatives across different formats. Visual variety — including static posts and video assets — played a role in shaping engagement levels. Pairing creative examples with performance data shows how design influences results.</p>
											</div>
											{/* Summary Analytics */}
											<div className="mt-4 bg-gray-800/30 rounded-lg p-4 border border-gray-700">
												<h6 className="text-sm font-semibold text-blue-400 mb-3">Audience Engagement Intelligence</h6>
												<p className="text-xs text-gray-400 text-center mt-2">This analysis explores how engagement patterns shift with reach and impressions. While higher frequency sometimes led to audience fatigue, balanced exposure maintained strong interactions. These insights inform future posting schedules and messaging strategies.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Influencer Collaborations & Feedback */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 1.0 }}
							className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-yellow-500/30 p-4 md:p-6 mb-6 hover:border-yellow-400/50 transition-colors"
						>
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0 mt-1">
									<div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-lg flex items-center justify-center">
										<svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11.93V14a1 1 0 11-2 0v-1.07A6.002 6.002 0 014 10a6 6 0 1112 0 6.002 6.002 0 01-5 5.93z" />
										</svg>
									</div>
								</div>
								<div className="flex-1">
									<h5 className="text-lg md:text-xl font-bold text-yellow-400 mb-3">Influencer Collaborations & Feedback</h5>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
										<div className="flex flex-col items-center">
											<img src={getImagePath('/influencer.jpg')} alt="Influencer Feedback 1" className="rounded-lg border border-gray-700 object-contain w-full min-h-[20rem] max-h-[32rem] bg-black mb-2" />
											<p className="text-xs text-gray-400 text-center">Influencer partnership: authentic product review and positive feedback, boosting campaign credibility.</p>
										</div>
										<div className="flex flex-col items-center">
											<img src={getImagePath('/influencer2.jpg')} alt="Influencer Feedback 2" className="rounded-lg border border-gray-700 object-contain w-full min-h-[20rem] max-h-[32rem] bg-black mb-2" />
											<p className="text-xs text-gray-400 text-center">Collaboration with a key opinion leader, resulting in increased brand trust and audience engagement.</p>
										</div>
									</div>
									<p className="text-xs text-gray-400 text-center">Real influencer collaborations that contributed to campaign success and social proof for LDWatch.</p>

									{/* Customer Feedback Gallery */}
									<div className="mt-6">
										<h6 className="text-md font-semibold text-yellow-400 mb-3 text-center">Customer Feedback Highlights</h6>
										<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
											<img src={getImagePath('/feedback1.jpg')} alt="Customer Feedback 1" className="rounded-lg border border-gray-700 object-contain w-full min-h-[16rem] max-h-[28rem] bg-black cursor-zoom-in" onClick={() => setZoomedImage(getImagePath('/feedback1.jpg'))} />
											<img src={getImagePath('/feedback2.jpg')} alt="Customer Feedback 2" className="rounded-lg border border-gray-700 object-contain w-full min-h-[16rem] max-h-[28rem] bg-black cursor-zoom-in" onClick={() => setZoomedImage(getImagePath('/feedback2.jpg'))} />
											<img src={getImagePath('/feedback3.jpg')} alt="Customer Feedback 3" className="rounded-lg border border-gray-700 object-contain w-full min-h-[16rem] max-h-[28rem] bg-black cursor-zoom-in" onClick={() => setZoomedImage(getImagePath('/feedback3.jpg'))} />
										</div>
										<p className="text-xs text-yellow-400 text-center mt-2">These are real customer feedbacks, reflecting my commitment to exceptional service and the ability to convert digital marketing efforts into brand awareness and actual purchases.</p>
									</div>
								</div>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 1.0 }}
							className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-4 md:p-6 hover:border-purple-500/30 transition-colors"
						>
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0 mt-1">
									<div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg flex items-center justify-center">
										<svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
										</svg>
									</div>
								</div>
								<div className="flex-1">
									<h5 className="text-lg md:text-xl font-bold text-purple-400 mb-3">Leadership & Team Management</h5>
									<div className="space-y-2 text-sm md:text-base text-gray-300">
										<ul className="space-y-2 text-gray-400">
											<li className="flex items-start gap-2">
												<div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
												<span>Managed and mentored a <strong className="text-purple-400">7-member team</strong> responsible for social media content creation, including Facebook and TikTok posts, review videos, and short reels</span>
											</li>
											<li className="flex items-start gap-2">
												<div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
												<span>Directed outbound customer prospecting efforts and optimized engagement strategies to expand brand reach</span>
											</li>
											<li className="flex items-start gap-2">
												<div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
												<span>Delivered exceptional service by managing high-value VIP orders and maintaining long-term client relationships</span>
											</li>
										</ul>
									</div>

									{/* Team Images Grid */}
									<div className="mt-6">
										<h6 className="text-md font-semibold text-purple-400 mb-3 text-center">Our Team in Action</h6>
										<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
											<img src={getImagePath('/team1.JPG')} alt="Team Member 1" className="rounded-lg border border-gray-700 object-cover w-full h-40 md:h-48 bg-black cursor-zoom-in" onClick={() => setZoomedImage(getImagePath('/team1.JPG'))} />
											<img src={getImagePath('/team2.JPG')} alt="Team Member 2" className="rounded-lg border border-gray-700 object-cover w-full h-40 md:h-48 bg-black cursor-zoom-in" onClick={() => setZoomedImage(getImagePath('/team2.JPG'))} />
											<img src={getImagePath('/team3.JPG')} alt="Team Member 3" className="rounded-lg border border-gray-700 object-cover w-full h-40 md:h-48 bg-black cursor-zoom-in" onClick={() => setZoomedImage(getImagePath('/team3.JPG'))} />
											<img src={getImagePath('/team4.jpg')} alt="Team Member 4" className="rounded-lg border border-gray-700 object-cover w-full h-40 md:h-48 bg-black cursor-zoom-in" onClick={() => setZoomedImage(getImagePath('/team4.jpg'))} />
										</div>
										<p className="text-xs text-gray-400 text-center mt-2">Snapshots from team activities, content creation, and campaign execution.</p>
									</div>

									{/* Product Gallery */}
									<div className="mt-8">
										<h6 className="text-md font-semibold text-teal-400 mb-3 text-center">Product Gallery</h6>
										<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
											<img src={getImagePath('/product1.jpg')} alt="Product 1" className="rounded-lg border border-gray-700 object-cover w-full h-32 md:h-40 bg-black cursor-zoom-in" onClick={() => setZoomedImage(getImagePath('/product1.jpg'))} />
											<img src={getImagePath('/product2.jpg')} alt="Product 2" className="rounded-lg border border-gray-700 object-cover w-full h-32 md:h-40 bg-black cursor-zoom-in" onClick={() => setZoomedImage(getImagePath('/product2.jpg'))} />
											<img src={getImagePath('/product3.jpg')} alt="Product 3" className="rounded-lg border border-gray-700 object-cover w-full h-32 md:h-40 bg-black cursor-zoom-in" onClick={() => setZoomedImage(getImagePath('/product3.jpg'))} />
											<img src={getImagePath('/product4.jpg')} alt="Product 4" className="rounded-lg border border-gray-700 object-cover w-full h-32 md:h-40 bg-black cursor-zoom-in" onClick={() => setZoomedImage(getImagePath('/product4.jpg'))} />
											<img src={getImagePath('/product5.jpg')} alt="Product 5" className="rounded-lg border border-gray-700 object-cover w-full h-32 md:h-40 bg-black cursor-zoom-in" onClick={() => setZoomedImage(getImagePath('/product5.jpg'))} />
										</div>
										<p className="text-xs text-gray-400 text-center mt-2">A selection of featured products from our retail business.</p>
									</div>

									{/* Luxury Hublot Gallery */}
									<div className="mt-8">
										<h6 className="text-md font-semibold text-yellow-400 mb-3 text-center">Luxury Hublot Collection – VIP Customer</h6>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
											{/* Left: 4 luxury images */}
											<div className="grid grid-cols-2 gap-4">
												<img src={getImagePath('/luxury1.jpg')} alt="Luxury Hublot 1" className="rounded-lg border-2 border-yellow-400 object-cover w-full h-32 md:h-40 bg-black cursor-zoom-in" onClick={() => setZoomedImage(getImagePath('/luxury1.jpg'))} />
												<img src={getImagePath('/luxury2.jpg')} alt="Luxury Hublot 2" className="rounded-lg border-2 border-yellow-400 object-cover w-full h-32 md:h-40 bg-black cursor-zoom-in" onClick={() => setZoomedImage(getImagePath('/luxury2.jpg'))} />
												<img src={getImagePath('/luxury3.jpg')} alt="Luxury Hublot 3" className="rounded-lg border-2 border-yellow-400 object-cover w-full h-32 md:h-40 bg-black cursor-zoom-in" onClick={() => setZoomedImage(getImagePath('/luxury3.jpg'))} />
												<img src={getImagePath('/luxury4.jpg')} alt="Luxury Hublot 4" className="rounded-lg border-2 border-yellow-400 object-cover w-full h-32 md:h-40 bg-black cursor-zoom-in" onClick={() => setZoomedImage(getImagePath('/luxury4.jpg'))} />
											</div>
											{/* Right: Value highlight */}
											<div className="flex flex-col items-center justify-center gap-4">
												<img src={getImagePath('/luxury5.jpg')} alt="Reference Market Price" className="rounded-lg border-2 border-yellow-400 object-cover w-full max-w-xs h-32 md:h-48 bg-black cursor-zoom-in" onClick={() => setZoomedImage(getImagePath('/luxury5.jpg'))} />
												<div className="bg-yellow-100/10 border border-yellow-400 rounded-lg p-4 text-center">
													<p className="text-lg font-bold text-yellow-400 mb-2">Market Value Reference</p>
													<p className="text-sm text-yellow-300">This showcase features a luxury Hublot watch in 18k gold, acquired by a VIP client at a premium price point. Referencing the market value underscores its positioning, while the sale highlights the effectiveness of my digital marketing campaigns in reaching and converting high-net-worth customers, reinforcing the brand’s appeal to premium audiences.</p>
												</div>
											</div>
										</div>
										{/* (Comment removed as requested) */}
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div>

				{/* Education Section */}
				<motion.div
					id="education"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7 }}
					className="w-full max-w-4xl mx-auto mt-12 md:mt-16 px-2 md:px-4 scroll-mt-24"
				>
					<h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500">
						Education
					</h3>

					<div className="space-y-6 md:space-y-8">
						{/* Fanshawe College */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.8 }}
							className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-6 hover:border-blue-500/30 transition-colors"
						>
							<div className="flex items-start gap-4">
								{/* Canadian Flag */}
								<div className="flex-shrink-0 mt-1">
									<svg className="w-8 h-6 md:w-10 md:h-8" viewBox="0 0 36 24">
										<rect width="36" height="24" fill="#FF0000" />
										<rect x="12" y="0" width="12" height="24" fill="#FFFFFF" />
										<path d="M18 4l2 4h-1l-1-2-1 2h-1l2-4zm0 12l-2 4h1l1-2 1 2h1l-2-4z" fill="#FF0000" />
										<path d="M16 12l2-2 2 2-2 2-2-2z" fill="#FF0000" />
									</svg>
								</div>
								<div className="flex-1">
									<h4 className="text-lg md:text-xl font-bold text-blue-400 mb-1">Fanshawe College</h4>
									<p className="text-base md:text-lg font-semibold text-white mb-2">Post-Graduate Certificate in Artificial Intelligence and Machine Learning</p>
									<p className="text-sm md:text-base text-gray-400 mb-3">London, Ontario, Canada • 2024 - 2025</p>
									<div className="text-sm md:text-base text-gray-300">
										<p className="font-medium text-purple-400 mb-3">Coursework:</p>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
											{/* President's Honour Roll Certificate on the left */}
											<div className="flex flex-col items-center md:items-start mt-0 md:mt-6">
												<img
													src={getImagePath('/presidenthonour.jpg')}
													alt="President&apos;s Honour Roll Certificate"
													className="rounded-lg border border-blue-400 shadow-lg max-w-xs w-full mb-2 cursor-zoom-in"
													onClick={() => setZoomedImage(getImagePath('/presidenthonour.jpg'))}
												/>
												<p className="text-xs text-blue-400 text-center md:text-left">President&apos;s Honour Roll Certificate, Fanshawe College</p>
												<p className="text-xs text-gray-400 text-center md:text-left mt-1">Awarded for achieving a GPA of 4.18/4.2 and outstanding academic performance in the Artificial Intelligence and Machine Learning program.</p>
											</div>
											{/* All Coursework/Skills on the right */}
											<div>
												<ul className="space-y-1 text-gray-400">
													<li className="flex items-center gap-2">
														<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
														Deep Learning with TensorFlow/PyTorch
													</li>
													<li className="flex items-center gap-2">
														<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
														Data Science & Machine Learning
													</li>
													<li className="flex items-center gap-2">
														<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
														Data Mining & Analysis
													</li>
													<li className="flex items-center gap-2">
														<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
														Data Visualization for Machine Learning
													</li>
													<li className="flex items-center gap-2">
														<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
														Natural Language Processing
													</li>
													<li className="flex items-center gap-2">
														<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
														Deep Learning with Tensorflow/Keras and Pytorch
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</motion.div>

						{/* FPT University */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.9 }}
							className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-6 hover:border-purple-500/30 transition-colors"
						>
							<div className="flex items-start gap-4">
								{/* Vietnamese Flag */}
								<div className="flex-shrink-0 mt-1">
									<svg className="w-8 h-6 md:w-10 md:h-8" viewBox="0 0 36 24">
										<rect width="36" height="24" fill="#DA020E" />
										<polygon points="18,6 20.5,12.5 27,12.5 22,16.5 24,23 18,19 12,23 14,16.5 9,12.5 15.5,12.5" fill="#FFFF00" />
									</svg>
								</div>
								<div className="flex-1">
									<h4 className="text-lg md:text-xl font-bold text-purple-400 mb-1">FPT University Vietnam</h4>
									<p className="text-base md:text-lg font-semibold text-white mb-2">Bachelor of Software Engineering</p>
									<p className="text-sm md:text-base text-gray-400 mb-3">Ho Chi Minh City, Vietnam • Aug. 2015 – Aug. 2019</p>
									<div className="text-sm md:text-base text-gray-300">
										<p className="font-medium text-teal-400 mb-3">Coursework:</p>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div>
												<ul className="space-y-1 text-gray-400">
													<li className="flex items-center gap-2">
														<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
														Object-Oriented Programming (OOP)
													</li>
													<li className="flex items-center gap-2">
														<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
														Java Programming & Database Systems
													</li>
													<li className="flex items-center gap-2">
														<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
														Data Structures and Algorithms
													</li>
												</ul>
											</div>
											<div>
												<ul className="space-y-1 text-gray-400">
													<li className="flex items-center gap-2">
														<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
														Web Development
													</li>
													<li className="flex items-center gap-2">
														<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
														C#/ ASP.NET
													</li>
													<li className="flex items-center gap-2">
														<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
														Database with RDBMS
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div>

				{/* Publications Section */}
				<motion.div
					id="publications"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.0 }}
					className="w-full max-w-4xl mx-auto mt-12 md:mt-16 px-2 md:px-4 scroll-mt-24"
				>
					<h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500">
						Publications
					</h3>

					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.1 }}
						className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-6 hover:border-blue-500/30 transition-colors"
					>
						<div className="flex flex-col md:flex-row items-center md:items-start gap-6">
							{/* Book Cover Image */}
							<div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
								<a
									href="https://ecampusontario.pressbooks.pub/securemachinelearning/"
									target="_blank"
									rel="noopener noreferrer"
									className="block transition-transform hover:scale-105"
								>
									<div className="w-32 h-48 md:w-40 md:h-60 rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-gray-800">
										<img
											src={getImagePath('/bookcover.png')}
											alt="Winning the Battle for Secure ML Book Cover"
											className="w-full h-full object-cover object-center"
										/>
									</div>
								</a>
							</div>

							{/* Publication Details */}
							<div className="flex-1 text-center md:text-left">
								<a
									href="https://ecampusontario.pressbooks.pub/securemachinelearning/"
									target="_blank"
									rel="noopener noreferrer"
									className="block hover:opacity-80 transition-opacity"
								>
									<h4 className="text-lg md:text-xl font-bold text-blue-400 mb-2">Winning the Battle for Secure ML</h4>
								</a>
								<p className="text-base md:text-lg font-semibold text-white mb-3">Open-Access Textbook on Machine Learning Security</p>
								<a
									href="https://ecampusontario.pressbooks.pub/securemachinelearning/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm md:text-base text-blue-400 hover:text-blue-300 transition-colors mb-4 inline-block"
								>
									Read more
								</a>

								<div className="text-sm md:text-base text-gray-300">
									<p className="font-medium text-purple-400 mb-3">Contributions:</p>
									<p className="text-gray-400 mb-2">
										Helped create an open-access guide that makes machine learning more secure and trustworthy. The work covered common risks (such as hackers tricking models or data leaks) and shared practical ways to protect against them. I focused on turning complex technical topics into clear insights that students, researchers, and professionals can apply.
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
		</>
	);
}
