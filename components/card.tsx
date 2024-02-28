import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';

export type Props = {
	title: string;
	description: string;
	image: StaticImageData;
	id?: number;
	isNew?: boolean;
	theme?: string;
}

export default function CardDef(props: Props) {
	return (
		<div className="w-80 ring-1 ring-slate-200 dark:ring-slate-800 rounded-2xl justify-center dark:bg-slate-800 p-6"
			style={{
				background: 'rgba(255, 255, 255, 0.05)',
				boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.15)',
				backdropFilter: 'blur(4.2px)',
				WebkitBackdropFilter: 'blur(4.2px)',
				border: '1px solid rgba(255, 255, 255, 0.18)',
			}}
		>
			<Image src={props.image} alt="background" style={{objectFit: 'cover'}} className='h-40 rounded-xl mb-5 ring-1 dark:ring-slate-800 ring-slate-200'/>
			<h3 className='tracking-tight font-medium'>{props.title}</h3>
			<p className="text-slate-500 dark:text-slate-400 h-24">
				{props.description}
			</p>
			<div className='flex mt-5 items-baseline'>
				<Link href={`/works/${props.id}`}>
					<button className='group/link bg-sky-200 dark:bg-sky-950 dark:text-sky-500 text-sky-600 px-3 py-2 rounded-2xl hover:bg-sky-300 dark:hover:bg-sky-900'>
						View the works
						<GoArrowUpRight className="inline-block text-xl transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"/>
					</button>
				</Link>
				{
					props.isNew && <p className='font-semibold ml-auto py-2 px-3 bg-emerald-200 text-emerald-700 dark:bg-emerald-700 dark:text-emerald-300 rounded-2xl'>NEW</p>
				}
			</div>
		</div>
	)
}
