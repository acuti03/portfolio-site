"use client";
import React from "react";
import { useTheme } from 'next-themes'
import { GoArrowUpRight } from "react-icons/go";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from 'next/link';
import Image from 'next/image';
import image from '@/assets/background.png';


export default function Home() {
	const [mounted, setMounted] = React.useState(false);
	const {theme, setTheme} = useTheme();

	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div style={{ marginTop:'10%' }}>
			<Image className="dark:opacity-20 opacity-80" src={image} alt="background" layout="fill" objectFit="cover" style={{zIndex: -1}}/>
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
							<Link href='#' target="_blank" className="hover:text-sky-500"><RiInstagramFill className=""/></Link>
							<Link href='#' target="_blank" className="hover:text-sky-500"><FaLinkedin className=""/></Link>
							<Link href='#' target="_blank" className="hover:text-sky-500"><FaGithub className=""/></Link>
							<Link href='#' target="_blank" className="hover:text-sky-500"><FaDiscord className=""/></Link>
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