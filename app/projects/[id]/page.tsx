import Image from 'next/image'
import Link from 'next/link'

import queueSystem from '@/assets/1.jpg'
import checkers from '@/assets/3.png'

type Project = {
  title: string
  image: any
  description: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'Queue System',
    image: queueSystem,
    description:
      'A university group project for the networking course done with django simulating an mmc queue system.',
    tags: ['Python', 'HTML', 'CSS', 'JavaScript', 'Django'],
  },
  {
    title: 'Checkers',
    image: checkers,
    description:
      'The checkers game to test my knowledge of the C language after the programming course.',
    tags: ['C', 'ncurses'],
  },
]

const generateSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '-')
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects.find((p) => generateSlug(p.title) === id)

  if (!project) {
    return (
      <div className="text-center mt-10">
        <p>Project not found</p>
        <Link href="/projects" className="text-sky-500">
          Go back
        </Link>
      </div>
    )
  }

  return (
    <div className='py-10'>
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
      <div className="sm:w-[500px] max-sm:max-w-lg px-2 mx-auto mt-5">
        <div className="flex flex-row gap-2 w-fit text-sm">
          <Link href="/" className="text-slate-400 font-thin hover:text-slate-300">
            Home
          </Link>
          <p className="text-slate-400 font-thin">/</p>
          <Link href="/projects" className="text-slate-400 font-thin hover:text-slate-300">
            Projects
          </Link>
          <p className="text-slate-400 font-thin">/</p>
          <span className="opacity-90">{project.title}</span>
        </div>
      </div>
      <div className="px-2 mt-7 flex flex-col items-center">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          className="rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 shadow-md"
        />
        <div className="flex flex-col sm:w-[500px] max-sm:max-w-lg">
          <h1 className="sm:text-5xl max-sm:text-4xl mt-5 font-semibold dark:text-slate-300 tracking-tight">
            {project.title}
          </h1>
          <p className="dark:text-slate-400 text-slate-600 mt-5">
            {project.description}
          </p>
          <div className="flex flex-row flex-wrap gap-3 mt-5 mb-5">
            {project.tags.map((tag, index) => (
              <p
                key={index}
                className="dark:bg-sky-950 dark:text-sky-500 text-sky-600 bg-sky-100 px-3 py-2 rounded-xl"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}