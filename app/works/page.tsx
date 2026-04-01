import Card from '@/components/card'
import { Props } from '@/components/card'
import salesup from '@/assets/5.png';
import bookingDashboard from '@/assets/4.png';

export default function Work() {
  const cards: Props[] = [
    { title: 'Salesup', description: 'AI-powered sales assistant that helps teams prepare efficiently, connect deeply, and sell more effectively.', image: salesup },
    { title: 'Booking Dashboard', description: 'A dashboard for booking appointments for a gym.', image: bookingDashboard }
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
            Works
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