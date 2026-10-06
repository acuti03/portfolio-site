import Card from '@/components/card'
import { Props } from '@/components/card'

import background from '@/assets/background.png';
import queueSystem from '@/assets/1.jpg';
import checkers from '@/assets/3.png';
import gradcam from '@/assets/6.png';

export default function Projects() {
    const cards: Props[] = [
        { title: 'Queue System', description: 'A university group project for the networking course done with django simulating an mmc queue system.', image: queueSystem },
        { title: 'Checkers', description: 'The checkers game to test my knowledge of the C language after the programming course.', image: checkers },
        { title: 'Detection of Brain Tumours', description: 'Development of a deep learning model for tumour detection using EEG signals.', image: gradcam },
    ]

  return (
    <div>
      <div className="fixed inset-0 z-[-1] flex justify-between pointer-events-none">
        <div 
          className="w-[15%] h-full border-r border-slate-300 dark:border-slate-800"
          style={{ backgroundImage: `repeating-linear-gradient(-45deg, rgba(128, 128, 128, 0.15), rgba(128, 128, 128, 0.15) 1px, transparent 1px, transparent 16px)` }}
        />
        <div 
          className="w-[15%] h-full border-l border-slate-300 dark:border-slate-800"
          style={{ backgroundImage: `repeating-linear-gradient(-45deg, rgba(128, 128, 128, 0.15), rgba(128, 128, 128, 0.15) 1px, transparent 1px, transparent 16px)` }}
        />
      </div>
      <div className='my-10 w-full flex flex-col items-center px-4'>
        <div className='w-fit flex flex-col'>
          
          <h1 className="text-4xl font-semibold dark:text-slate-300 text-slate-800 tracking-tight py-10 text-left">
            Projects
          </h1>
          
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {
              cards.map((item: Props, index) => {
                return (
                  <div key={index} className="flex justify-start w-full">
                    <Card 
                      title={item.title} 
                      description={item.description} 
                      image={item.image} 
                      id={index} 
                      isProjects={true}
                    />
                  </div>
                )
              })
            }
          </div>  
        </div>
      </div>
    </div>
  )
}