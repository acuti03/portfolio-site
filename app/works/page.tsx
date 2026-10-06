import Card from '@/components/card'
import { Props } from '@/components/card'
import salesup from '@/assets/5.png';
import bookingDashboard from '@/assets/4.png';
import circolo from "@/assets/7.png";

export default function Work() {
  const cards: Props[] = [
    { title: 'Salesup', description: 'AI-powered sales assistant that helps teams prepare efficiently, connect deeply, and sell more effectively.', image: salesup },
    { title: 'Booking Dashboard', description: 'A dashboard for booking appointments for a gym.', image: bookingDashboard },
    { title: 'Circolo Italia Bologna App', description: 'A mobile application for Circolo Italia Bologna that displays the results of the club’s football matches.', image: circolo}
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
            Works
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