import React from "react";
import { nunito } from "@app/fonts";
import Link from "next/link";
import '@styles/globals.css'

const Logo = () => {
	return(
		<Link className="logo" href="/">
			<p className={nunito.className}>Simone Acuti</p>
		</Link>
	)
}

export default Logo