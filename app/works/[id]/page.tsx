'use client'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import portfolio from '@/assets/0.png';
import queueSystem from '@/assets/1.jpg';
import wearable from '@/assets/2.jpeg';
import checkers from '@/assets/3.png';


export default function Page({ params }: { params: { id: string } }) {

	const image = [portfolio, queueSystem, wearable, checkers][parseInt(params.id)];
	const title = ['Portfolio', 'Queue System', 'Wearable', 'Checkers'][parseInt(params.id)];

	return (
		<div className='px-2 mt-7 flex flex-col items-center'>
			<Image src={image} alt="background" width={500} className='rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 shadow-md'/>
			<div className='flex flex-col sm:w-[500px] max-sm:max-w-lg'>
				<h1 className='sm:text-5xl max-sm:text-4xl mt-5 font-semibold dark:text-slate-300 tracking-tight'>{title}</h1>
				<p className='dark:text-slate-400 text-slate-600 mt-5'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quidem expedita esse ut dolore ratione 
					consequatur, est voluptates atque consequuntur quae enim quos dolor beatae at nesciunt similique suscipit qui!
				</p>
			</div>
		</div>
	)
}
