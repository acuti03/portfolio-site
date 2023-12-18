import Counter from "@components/Counter";
import React from "react";
import { dm_sans, roboto_mono } from "./fonts";
import { exo_2 } from "./fonts"
import { Text } from "@chakra-ui/react";

const Home = () => {
	return(
		<main className={dm_sans.className}>
			<div>
				<Text fontSize='5xl' className={roboto_mono.className}>Home</Text>
				<Counter/>
			</div>
		</main>
	)
}

export default Home