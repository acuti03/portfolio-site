import Navbar from '@components/Navbar'
import '@styles/globals.css'
import { Providers } from './providers'


export const metadata = {
	title: "Portfolio project",
	description: ''
}

const RootLayout = ({ children }) => {
	return(
		<html lang='en'>
			<body>
				<Providers>
					<Navbar/>
					{ children }
				</Providers>
			</body>
		</html>
	)
}

export default RootLayout