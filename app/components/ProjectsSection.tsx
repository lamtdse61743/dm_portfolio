'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ProjectsSection() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	
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
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Featured Projects
				</motion.h2>

				<div className="space-y-16">
					{/* HomeGuard Smart Surveillance System */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							{/* Project Description and Architecture */}
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">HomeGuard Smart Surveillance System</h3>
										<p className="text-gray-400">
											A full-stack web application for real-time video analysis using YOLO for object detection, tracking, and distance estimation to automatically log events like suspicious behavior and deliveries.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Machine Learning & AI</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• PyTorch & TensorFlow</li>
												<li>• YOLO Object Detection</li>
												<li>• Computer Vision Processing</li>
												<li>• Deep Learning Models</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Full-Stack Development</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Python Flask Backend</li>
												<li>• HTML, CSS & JavaScript</li>
												<li>• RESTful API Design</li>
												<li>• Docker Containerization</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Data Analysis & Integration</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Event Data Processing</li>
											<li>• Real-time Dashboard Analytics</li>
											<li>• Database Management</li>
											<li>• API Integration (Gemini)</li>
										</ul>
									</div>
								</div>

								{/* System Architecture */}
								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Camera Input */}
											<g>
												<rect x="20" y="20" width="360" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="40" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Video Input & Real-time Processing
												</text>
											</g>

											{/* AI Processing Layer */}
											<g>
												<rect x="20" y="70" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<rect x="210" y="70" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="95" textAnchor="middle" className="fill-gray-400 text-[12px]">
													YOLO Detection
												</text>
												<text x="295" y="95" textAnchor="middle" className="fill-gray-400 text-[12px]">
													FaceNet Recognition
												</text>
											</g>

											{/* Flask Backend */}
											<g>
												<rect x="20" y="130" width="360" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="155" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Flask Backend API & Event Processing
												</text>
											</g>

											{/* Storage & AI Assistant */}
											<g>
												<rect x="20" y="190" width="170" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="210" y="190" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Event Database
												</text>
												<text x="295" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Gemini AI Assistant
												</text>
											</g>

											{/* Web Dashboard */}
											<g>
												<rect x="20" y="250" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="270" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Web Dashboard (HTML, CSS, JavaScript)
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="200" y1="50" x2="200" y2="70" />
												<line x1="105" y1="110" x2="105" y2="130" />
												<line x1="295" y1="110" x2="295" y2="130" />
												<line x1="200" y1="170" x2="200" y2="190" />
												<line x1="105" y1="230" x2="105" y2="250" />
												<line x1="295" y1="230" x2="295" y2="250" />
											</g>
										</svg>
									</div>
								</div>
							</div>

							{/* Project Screenshots */}
							<div className="bg-black/30 rounded-xl p-6">
								<h4 className="text-sm font-semibold text-gray-400 mb-4">Project Screenshots</h4>
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
									<div 
										className="aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
										onClick={() => setSelectedImage(getImagePath('/homeguard1.jpg'))}
									>
										<img 
											src={getImagePath('/homeguard1.jpg')} 
											alt="HomeGuard Dashboard Interface" 
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
									<div 
										className="aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
										onClick={() => setSelectedImage(getImagePath('/homeguard2.jpg'))}
									>
										<img 
											src={getImagePath('/homeguard2.jpg')} 
											alt="HomeGuard Real-time Detection" 
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
									<div 
										className="aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
										onClick={() => setSelectedImage(getImagePath('/homeguard3.jpeg'))}
									>
										<img 
											src={getImagePath('/homeguard3.jpeg')} 
											alt="HomeGuard Event Logging" 
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
									<div 
										className="aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
										onClick={() => setSelectedImage(getImagePath('/homeguard4.jpeg'))}
									>
										<img 
											src={getImagePath('/homeguard4.jpeg')} 
											alt="HomeGuard AI Assistant" 
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
								</div>
							</div>

							{/* Project Workflow */}
							<div className="bg-black/30 rounded-xl p-6">
								<h4 className="text-sm font-semibold text-gray-400 mb-4">Development Workflow</h4>
								<div className="space-y-4">
									<div className="flex items-start space-x-4">
										<div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 border border-blue-500 rounded-full flex items-center justify-center">
											<span className="text-blue-400 text-sm font-semibold">1</span>
										</div>
										<div>
											<h5 className="text-sm font-semibold text-blue-400 mb-1">Research & Planning</h5>
											<p className="text-xs text-gray-400">Analyzed surveillance system requirements, researched YOLO object detection algorithms, and designed system architecture for real-time video processing.</p>
										</div>
									</div>
									<div className="flex items-start space-x-4">
										<div className="flex-shrink-0 w-8 h-8 bg-purple-500/20 border border-purple-500 rounded-full flex items-center justify-center">
											<span className="text-purple-400 text-sm font-semibold">2</span>
										</div>
										<div>
											<h5 className="text-sm font-semibold text-purple-400 mb-1">AI Model Implementation</h5>
											<p className="text-xs text-gray-400">Integrated YOLO for object detection, implemented FaceNet for facial recognition, and developed distance estimation algorithms using computer vision techniques.</p>
										</div>
									</div>
									<div className="flex items-start space-x-4">
										<div className="flex-shrink-0 w-8 h-8 bg-teal-500/20 border border-teal-500 rounded-full flex items-center justify-center">
											<span className="text-teal-400 text-sm font-semibold">3</span>
										</div>
										<div>
											<h5 className="text-sm font-semibold text-teal-400 mb-1">Backend Development</h5>
											<p className="text-xs text-gray-400">Built Flask API for video processing, implemented event logging system, integrated Gemini AI for chat assistance, and set up Docker containerization.</p>
										</div>
									</div>
									<div className="flex items-start space-x-4">
										<div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 border border-blue-500 rounded-full flex items-center justify-center">
											<span className="text-blue-400 text-sm font-semibold">4</span>
										</div>
										<div>
											<h5 className="text-sm font-semibold text-blue-400 mb-1">Frontend & Testing</h5>
											<p className="text-xs text-gray-400">Developed web dashboard with HTML/CSS/JavaScript, implemented real-time event display, conducted system testing, and created Jupyter notebooks for ML experimentation.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Fanshawe Consultant Chatbot */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							{/* Project Description and Architecture */}
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Fanshawe Consultant Chatbot</h3>
										<p className="text-gray-400">
											A web-based chatbot using Flask to answer questions about Fanshawe College programs, integrating a local knowledge base with Google&apos;s Gemini API for generative responses.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Natural Language Processing</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Retrieval-Augmented Generation</li>
												<li>• Sentence Transformers</li>
												<li>• Semantic Search with FAISS</li>
												<li>• LLM API Integration</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Development</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Python Flask Framework</li>
												<li>• RESTful API Development</li>
												<li>• Knowledge Base Management</li>
												<li>• Context Processing Pipeline</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Data Analysis & Optimization</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Similarity Scoring & Thresholds</li>
											<li>• Query Performance Analysis</li>
											<li>• Response Quality Metrics</li>
											<li>• Knowledge Base Optimization</li>
										</ul>
									</div>
								</div>

								{/* RAG Architecture */}
								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">RAG Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* User Query */}
											<g>
												<rect x="20" y="20" width="360" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="40" textAnchor="middle" className="fill-gray-400 text-[12px]">
													User Query Input
												</text>
											</g>

											{/* Embedding & Search */}
											<g>
												<rect x="20" y="70" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<rect x="210" y="70" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="95" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Sentence Transformers
												</text>
												<text x="295" y="95" textAnchor="middle" className="fill-gray-400 text-[12px]">
													FAISS Vector Search
												</text>
											</g>

											{/* Knowledge Base */}
											<g>
												<rect x="20" y="130" width="360" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="155" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Fanshawe College QA Knowledge Base
												</text>
											</g>

											{/* Context Processing */}
											<g>
												<rect x="20" y="190" width="170" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="210" y="190" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Context Retrieval
												</text>
												<text x="295" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Similarity Scoring
												</text>
											</g>

											{/* Gemini API Response */}
											<g>
												<rect x="20" y="250" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="270" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Gemini API Generative Response
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="200" y1="50" x2="200" y2="70" />
												<line x1="105" y1="110" x2="105" y2="130" />
												<line x1="295" y1="110" x2="295" y2="130" />
												<line x1="200" y1="170" x2="200" y2="190" />
												<line x1="105" y1="230" x2="105" y2="250" />
												<line x1="295" y1="230" x2="295" y2="250" />
											</g>
										</svg>
									</div>
								</div>
							</div>

							{/* Project Screenshots */}
							<div className="bg-black/30 rounded-xl p-6">
								<h4 className="text-sm font-semibold text-gray-400 mb-4">Project Screenshots</h4>
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
									<div 
										className="aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
										onClick={() => setSelectedImage(getImagePath('/fanshawe1.png'))}
									>
										<img 
											src={getImagePath('/fanshawe1.png')} 
											alt="Fanshawe Chatbot Interface" 
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
									<div 
										className="aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
										onClick={() => setSelectedImage(getImagePath('/fanshawe2.png'))}
									>
										<img 
											src={getImagePath('/fanshawe2.png')} 
											alt="Fanshawe Chatbot Conversation" 
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
									<div 
										className="aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
										onClick={() => setSelectedImage(getImagePath('/fanshawe3.png'))}
									>
										<img 
											src={getImagePath('/fanshawe3.png')} 
											alt="Fanshawe Chatbot RAG Response" 
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
								</div>
							</div>

							{/* Project Workflow */}
							<div className="bg-black/30 rounded-xl p-6">
								<h4 className="text-sm font-semibold text-gray-400 mb-4">Development Workflow</h4>
								<div className="space-y-4">
									<div className="flex items-start space-x-4">
										<div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 border border-blue-500 rounded-full flex items-center justify-center">
											<span className="text-blue-400 text-sm font-semibold">1</span>
										</div>
										<div>
											<h5 className="text-sm font-semibold text-blue-400 mb-1">Data Collection & Analysis</h5>
											<p className="text-xs text-gray-400">Gathered Fanshawe College program data, created QA dataset, and analyzed common student queries to understand information retrieval requirements.</p>
										</div>
									</div>
									<div className="flex items-start space-x-4">
										<div className="flex-shrink-0 w-8 h-8 bg-purple-500/20 border border-purple-500 rounded-full flex items-center justify-center">
											<span className="text-purple-400 text-sm font-semibold">2</span>
										</div>
										<div>
											<h5 className="text-sm font-semibold text-purple-400 mb-1">RAG Pipeline Development</h5>
											<p className="text-xs text-gray-400">Implemented Sentence Transformers for embeddings, integrated FAISS for vector search, and developed retrieval-augmented generation pipeline for contextual responses.</p>
										</div>
									</div>
									<div className="flex items-start space-x-4">
										<div className="flex-shrink-0 w-8 h-8 bg-teal-500/20 border border-teal-500 rounded-full flex items-center justify-center">
											<span className="text-teal-400 text-sm font-semibold">3</span>
										</div>
										<div>
											<h5 className="text-sm font-semibold text-teal-400 mb-1">API Integration & Backend</h5>
											<p className="text-xs text-gray-400">Built Flask backend with RESTful APIs, integrated Google Gemini API for generative responses, and implemented similarity scoring with confidence thresholds.</p>
										</div>
									</div>
									<div className="flex items-start space-x-4">
										<div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 border border-blue-500 rounded-full flex items-center justify-center">
											<span className="text-blue-400 text-sm font-semibold">4</span>
										</div>
										<div>
											<h5 className="text-sm font-semibold text-blue-400 mb-1">Testing & Optimization</h5>
											<p className="text-xs text-gray-400">Conducted extensive testing with student queries, optimized response accuracy through RAG parameter tuning, and implemented trustworthiness signaling for reliable information delivery.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Image Zoom Modal */}
			{selectedImage && (
				<div 
					className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
					onClick={() => setSelectedImage(null)}
				>
					<div className="relative max-w-4xl max-h-[90vh] w-full h-full">
						<img 
							src={selectedImage} 
							alt="Project Screenshot" 
							className="w-full h-full object-contain rounded-lg"
						/>
						<button 
							className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
							onClick={() => setSelectedImage(null)}
						>
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
				</div>
			)}
		</section>
	);
}
