import React from "react"
import { IoSunnyOutline } from "react-icons/io5"
import { IconButton } from "@chakra-ui/react"
import '@styles/globals.css'

const Buttons = () => {
	return(
		<div className="buttons">
			<IconButton colorScheme='yellow'>
				<IoSunnyOutline style={{fontSize: '18px'}}/>
			</IconButton>
		</div>
	)
}

export default Buttons