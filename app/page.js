import Counter from "@components/Counter";
import React from "react";
import { dm_sans, roboto_mono } from "./fonts";

const Home = () => {
	return(
		<main className={dm_sans.className}>
			<div>
				<h1 className={roboto_mono.className}>Home</h1>
				<Counter/>
			</div>
		</main>
	)
}

export default Home