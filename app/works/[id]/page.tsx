'use client'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import portfolio from '@/assets/0.png';
import queueSystem from '@/assets/1.jpg';
import wearable from '@/assets/2.jpeg';
import checkers from '@/assets/3.png';
import Link from 'next/link';


export default function Page({ params }: { params: { id: string } }) {

	const image = [portfolio, queueSystem, wearable, checkers][parseInt(params.id)];
	const title = ['Portfolio', 'Queue System', 'Wearable', 'Checkers', 'Booking Dashboard'][parseInt(params.id)];
	const description = [
		'A portfolio site made in react using next js and tailwindcss to collect my projects and show them for possible job offers.',
		'A university group project for the networking course done with django simulating an mmc queue system.',
		//'A mobile app made with react native that implements artificial intelligence to create outfits based on your preferences.',
		'The checkers game to test my knowledge of the C language after the programming course.',
		'A dashboard for booking appointments for a gym.'
	][parseInt(params.id)];

	const tags: Object = {
		Portfolio: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'],
		QueueSystem: ['Python', 'html', 'css', 'JavaScript', 'Django'],
		//Wearable: ['React Native', 'TypeScript', 'Azure', 'AI'],
		Checkers: ['C', 'ncurses'],
		BookingDashboard: ['React', 'TypeScript', 'Tauri', 'Firebase']
	}

	return (
		<>
		<div className='sm:w-[500px] max-sm:max-w-lg px-2 mx-auto mt-5'>
			<div className='flex flex-row gap-2 w-fit text-sm'>
				<Link href="/" className="text-slate-400 font-thin">
					Home
				</Link>
				<p className="text-slate-400 font-thin">/</p>
				<Link href="/works" className="text-slate-400 font-thin">
					Works
				</Link>
				<p className="text-slate-400 font-thin">/</p>
				<Link href="#" className="opacity-90">
					{title}
				</Link>
			</div>
    </div>
			<div className='px-2 mt-7 flex flex-col items-center'>
				<Image src={image} alt="background" width={500} className='rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 shadow-md'/>
				<div className='flex flex-col sm:w-[500px] max-sm:max-w-lg'>
					<h1 className='sm:text-5xl max-sm:text-4xl mt-5 font-semibold dark:text-slate-300 tracking-tight'>{title}</h1>
					<p className='dark:text-slate-400 text-slate-600 mt-5'>
						{description}
					</p>
					<div className='flex flex-row flex-wrap gap-3 mt-5 mb-5'>
						{
							(tags as { [key: string]: string[] })[title.replace(/\s/g, "")].map((tag:string, index: number) => (
								<p key={index} className='dark:bg-sky-950 dark:text-sky-500 text-sky-600 bg-sky-100 px-3 py-2 rounded-xl'>{tag}</p>
							))
						}
					</div>
				</div>
			</div>
		</>
	)
}
