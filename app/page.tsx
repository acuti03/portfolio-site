"use client";

import { useState, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from 'next/link';

export default function Home() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);
		
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);


	return (
		<div style={{ marginTop: '10%', position: 'relative' }}>
			<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
				<div 
					className="absolute inset-0"
					style={{
						backgroundImage: `
							linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
							linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px)
						`,
						backgroundSize: '40px 40px',
						maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
						WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
					}}
				/>
				<div 
					className="absolute inset-0"
					style={{
						backgroundImage: `
							linear-gradient(to right, rgba(14, 165, 233, 0.6) 1px, transparent 1px),
							linear-gradient(to bottom, rgba(14, 165, 233, 0.6) 1px, transparent 1px)
						`,
						backgroundSize: '40px 40px',
						maskImage: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
						WebkitMaskImage: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
					}}
				/>
			</div>
			<main className="w-11/12 mx-auto py-20 rounded-xl"
			style={{
				background: 'rgba(255, 255, 255, 0.05)',
				boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
				backdropFilter: 'blur(4.2px)',
				WebkitBackdropFilter: 'blur(4.2px)',
				border: '1px solid rgba(255, 255, 255, 0.18)',
			}}
			>
				<div className="lg:flex">
					<div className="text-5xl lg:w-1/2 sm:ml-24 max-sm:mx-4 font-semibold dark:text-slate-300 tracking-tight">
						<h1>Simone Acuti</h1>
						<h3 className="mt-2 text-xl font-normal tracking-normal">Student at University of Ferrara</h3>
						<div className="w-1/3 h-0.5 bg-slate-300 dark:bg-slate-700 mt-5"></div>
						<div className="mt-6 flex text-2xl gap-4 dark:text-slate-400 text-slate-500">
							<Link href='https://www.linkedin.com/in/simone-acuti-93aa45251' target="_blank" className="hover:text-sky-500"><FaLinkedin className=""/></Link>
							<Link href='https://github.com/acuti03' target="_blank" className="hover:text-sky-500"><FaGithub className=""/></Link>
						</div>
					</div>
					<div className="max-lg:mt-10 lg:w-1/2 sm:mr-24 max-sm:mx-4 sm:ml-24 dark:text-slate-400 text-slate-600">
						<p>
							Hi I am Simone Acuti, an italian student at University of Ferrara. I am a web developer and I am currently studying 
							Computer Science. I am passionate about web development and I am always looking for new challenges.
						</p>
						<Link href="/works">
							<button className="mt-10 text-sky-500 group/link dark:text-sky-500">
								Check out my Works
								<GoArrowUpRight 
									className="inline-block text-xl transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
								/>
							</button>
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
}