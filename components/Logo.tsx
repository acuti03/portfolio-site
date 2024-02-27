import React from 'react'
import Icon from '@/assets/icon.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaCode } from "react-icons/fa6";

export default function Logo() {
	return (
		<div className='max-md:w-[200px] space-x-1 cursor-pointer'>
			<Link href='/'>
			<p className='text-2xl'>
				<FaCode className='text-sky-500 dark:text-sky-600 text-3xl inline-block mr-1'/>
				simoneacuti
			</p>
			</Link>
		</div>
	)
}
