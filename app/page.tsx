'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';

export default function FullStackPortfolio() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
			<HeroSection />
			<CertificationsSection />
			<ContactSection />
		</main>
	);
}
