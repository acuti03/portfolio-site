import React from "react"
import Link from "next/link"
import { exo_2 } from "@app/fonts"
import { FaGithub } from "react-icons/fa"
import '@styles/globals.css'
import Logo from "./Logo"
import Buttons from "./Buttons"

const Navbar = () => {
	return(
		<nav className={exo_2.className}>
			<Logo/>
			<div className="links">
				<Link href='/'>Home</Link>
				<Link href='/works'>Works</Link>
				<Link style={{display:"inline-flex", alignItems:"center"}}
				href='https://github.com/acuti03/portfolio-site' target="_blank">
					<FaGithub/>
					Source
				</Link>
			</div>
			<Buttons/>
		</nav>
	)
}

export default Navbar