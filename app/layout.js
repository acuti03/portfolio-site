import Navbar from '@components/Navbar'
import '@styles/globals.css'
import { dm_sans, roboto_mono } from './fonts'

export const metadata = {
	title: "Portfolio project",
	description: ''
}

const RootLayout = ({ children }) => {
	return(
		<html lang='en'>
			<body>
				<Navbar/>
				{ children }
			</body>
		</html>
	)
}

export default RootLayout