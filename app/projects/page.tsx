import Card from '@/components/card'
import { Props } from '@/components/card'

import background from '@/assets/background.png';
import queueSystem from '@/assets/1.jpg';
import checkers from '@/assets/3.png';
import gradcam from '@/assets/6.png';


export default function Projects() {
		const cards:Props[] = [
				//{ title: 'Portfolio Site', description: 'A portfolio site made in react using next js and tailwindcss to collect my projects and show them for possible job offers.', image: portfolio, isNew: true},
				{ title: 'Queue System', description: 'A university group project for the networking course done with django simulating an mmc queue system.', image: queueSystem },
				//{ title: 'Wearable', description: 'A mobile app made with react native that implements artificial intelligence to create outfits based on your preferences.', image: wearable },
				{ title: 'Checkers', description: 'The checkers game to test my knowledge of the C language after the programming course.', image: checkers },
				{ title: 'Detection of Brain Tumours', description: 'Development of a deep learning model for tumour detection using EEG signals.', image: gradcam },
		]

	return (
		<div>
			<div className="fixed inset-0 z-[-1] flex justify-between pointer-events-none">
				<div 
					className="w-[15%] h-full border-r border-slate-300 dark:border-slate-800"
					style={{
							backgroundImage: `repeating-linear-gradient(
									-45deg,
									rgba(128, 128, 128, 0.15),
									rgba(128, 128, 128, 0.15) 1px,
									transparent 1px,
									transparent 16px
							)`
					}}
				/>
				<div 
					className="w-[15%] h-full border-l border-slate-300 dark:border-slate-800"
					style={{
							backgroundImage: `repeating-linear-gradient(
									-45deg,
									rgba(128, 128, 128, 0.15),
									rgba(128, 128, 128, 0.15) 1px,
									transparent 1px,
									transparent 16px
							)`
					}}
				/>
			</div>
			<div className='my-10 w-[70%] mx-auto flex flex-col items-center'>
				<div className='w-fit mb-6'>
					<h1 className="text-4xl font-semibold dark:text-slate-300 text-slate-800 tracking-tight py-10">
						Projects
					</h1>
					<div className='flex flex-wrap justify-center sm:justify-start gap-8'>
						{
							cards.map((item: Props, index) => {
								return (
									<Card 
										key={index} 
										title={item.title} 
										description={item.description} 
										image={item.image} 
										id={index} 
										isProjects={true}
									/>
								)
							})
						}
					</div>
					
				</div>
			</div>
		</div>
	)
}
