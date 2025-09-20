'use client';

import { motion } from 'framer-motion';

export default function CertificationsSection() {
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

	return (
		<section className="py-20 px-4">
			<div className="max-w-4xl mx-auto">
				<motion.h2 
					initial={{ opacity: 0 }} 
					whileInView={{ opacity: 1 }} 
					viewport={{ once: true }} 
					className="text-3xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500"
				>
					Certifications
				</motion.h2>

				<div className="space-y-6 md:space-y-8">
					{/* Deep Learning Specialization */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-6 hover:border-blue-500/30 transition-colors"
					>
						<div className="flex items-start gap-4">
							{/* DeepLearning.AI Logo */}
							<div className="flex-shrink-0 mt-1">
								<div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center p-2">
									<img 
										src={getImagePath('/deeplearningai.svg')} 
										alt="DeepLearning.AI Logo" 
										className="w-full h-full object-contain"
									/>
								</div>
							</div>
							<div className="flex-1">
								<h3 className="text-lg md:text-xl font-bold text-blue-400 mb-1">Deep Learning Specialization</h3>
								<p className="text-base md:text-lg font-semibold text-white mb-2">DeepLearning.AI</p>
								<p className="text-sm md:text-base text-gray-400 mb-3">Advanced deep learning concepts including neural networks, CNNs, RNNs, and sequence models</p>
								<a 
									href="https://coursera.org/share/45971aee9406b4147b9fba28ec6432a0" 
									target="_blank" 
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
								>
									<span>View Certificate</span>
									<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
								</a>
							</div>
						</div>
					</motion.div>

					{/* Machine Learning with Python */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-6 hover:border-purple-500/30 transition-colors"
					>
						<div className="flex items-start gap-4">
							{/* IBM Logo */}
							<div className="flex-shrink-0 mt-1">
								<div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center p-2">
									<img 
										src={getImagePath('/ibm.svg')} 
										alt="IBM Logo" 
										className="w-full h-full object-contain"
									/>
								</div>
							</div>
							<div className="flex-1">
								<h3 className="text-lg md:text-xl font-bold text-purple-400 mb-1">Machine Learning with Python</h3>
								<p className="text-base md:text-lg font-semibold text-white mb-2">IBM</p>
								<p className="text-sm md:text-base text-gray-400 mb-3">Comprehensive machine learning course covering algorithms, data preprocessing, and Python implementation</p>
								<a 
									href="https://coursera.org/share/8132610e93ea8a0ebdb45c720eba15c9" 
									target="_blank" 
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
								>
									<span>View Certificate</span>
									<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
								</a>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
