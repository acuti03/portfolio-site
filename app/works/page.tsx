"use client";
import React from 'react'
import Card from '@/components/card'
import { useTheme } from 'next-themes'
import { Props } from '@/components/card'
import Image from 'next/image'
import background from '@/assets/background.png';
import portfolio from '@/assets/0.png';
import queueSystem from '@/assets/1.jpg';
import wearable from '@/assets/2.jpeg';
import checkers from '@/assets/3.png';

export default function Work() {
	const {theme, setTheme} = useTheme();
	const cards:Props[] = [
		{ title: 'Portfolio Site', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis impedit adipisci provident veritatis amet harum.', image: portfolio, isNew: true},
		{ title: 'Queue System', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis impedit adipisci provident veritatis amet harum.', image: queueSystem },
		{ title: 'Wearable', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis impedit adipisci provident veritatis amet harum.', image: wearable },
		{ title: 'Checkers', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis impedit adipisci provident veritatis amet harum.', image: checkers },
	]

	return (
		<div className='flex flex-wrap justify-center gap-4 my-10'>
			<Image className="dark:opacity-20 opacity-80" src={background} alt="background" layout="fill" objectFit="cover" style={{zIndex: -1}}/>
			{
				cards.map((item:Props, index) => {
					return (
						<Card key={index} title={item.title} description={item.description} image={item.image} id={index} theme={theme} isNew={item.isNew}/>
					)
				})
			}
		</div>
	)
}
