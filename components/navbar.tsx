"use client";
import React, { useEffect, useState } from "react";
import IconButton from "./iconButton";
import { FaGithub } from "react-icons/fa6";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import Link from 'next/link'
import Logo from '@/components/Logo'
import { useTheme } from 'next-themes'
import { GoArrowRight } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import { useRouter } from 'next/navigation'


export default function Navbar() {
	const {theme, setTheme} = useTheme();
	const [mounted, setMounted] = useState(false);
	const [open, setOpen] = useState(false);
	const router = useRouter()

	useEffect(() => {
		setMounted(true);
	}, []);

	theme === 'system' && setTheme('dark')

	if (!mounted) {
		return null;
	}

	const handleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<div className="sticky top-0 left-0 backdrop-blur-lg" style={{zIndex:10}}>
			<nav className="md:flex justify-between p-2 container mx-auto">
				<div className="md:flex items-center space-x-10 cursor-pointer">
					<Logo/>
					<div className='flex text-3xl absolute right-2 top-3 cursor-pointer md:hidden'>
						<IoIosMenu onClick={()=>setOpen(!open)}/>
						{
							theme === 'dark' ?
							<IconButton style="text-white font-bold py-2 px-2 rounded-lg" onClick={handleTheme}>
								<IoSunnyOutline style={{width: '24px', height: '24px', marginTop: '-5px'}}/>
							</IconButton>
							:
							<IconButton style="text-white font-bold py-2 px-2 rounded-lg" onClick={handleTheme}>
								<IoMoonOutline style={{width: '24px', height: '24px', marginTop: '-5px'}} className="text-black"/>
							</IconButton>
						}
					</div>
					{ open && 
					<div className="absolute md:hidden right-2 mt-2 rounded-xl p-4 dark:bg-slate-800 bg-slate-100 ring-1 ring-slate-300 dark:ring-slate-700">
						<div className="gap-2 flex flex-col">
							<Link href="/" onClick={() => setOpen(!open)} className='hover:text-sky-500'>
								Home
							</Link>
							<Link href="/works" onClick={() => setOpen(!open)} className='hover:text-sky-500'>
								<p>Works</p>
							</Link>
							<Link href="https://github.com/acuti03/portfolio-site" target="_blank" onClick={() => setOpen(!open)}>
								<p className='hover:text-sky-500 flex'>Source<FaGithub className="mt-1 ml-1"/></p>
							</Link>
						</div>
					</div>
					}
					<button className="max-md:hidden mt-1 group/link rounded-2xl px-3 py-1 bg-sky-100 hover:bg-sky-200 text-sky-600 dark:bg-sky-950 dark:hover:bg-sky-900 dark:text-sky-500 text-sm"
						onClick={() => router.replace('/works/2')}>
						New mobile app <span className="mx-1">&middot;</span> wearable
						<GoArrowRight style={{fontSize: '18px'}} className="inline-block transition-transform group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-2"/>
					</button>
					<div className="max-md:hidden space-x-5 md:flex">
						<Link href="/" className='hover:text-sky-500'>
							Home
						</Link>
						<Link href="/works" className='hover:text-sky-500'>
							<p>Works</p>
						</Link>
					</div>
				</div>
				<div className="md:flex space-x-4 max-md:hidden">
					{
						theme === 'dark' ?
						<IconButton onClick={handleTheme}>
							<IoSunnyOutline style={{width: '24px', height: '24px'}}/>
						</IconButton>
						:
						<IconButton onClick={handleTheme}>
							<IoMoonOutline style={{width: '24px', height: '24px'}} className="text-black"/>
						</IconButton>
					}
					<IconButton>
						<Link href='https://github.com/acuti03/portfolio-site' target="_blank">
							<FaGithub style={{width: '24px', height: '24px'}}/>
						</Link>
					</IconButton>
				</div>
			</nav>
			<div className="h-px bg-slate-200 dark:bg-slate-700"/>
		</div>
	);
}