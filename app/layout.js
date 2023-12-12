import '@styles/globals.css'
import { Nunito } from 'next/font/google'

const roboto = Nunito({
	subsets: ['latin'],
	weight: '700',
})

export const metadata = {
	title: "Portfolio project",
	description: ''
}

const RootLayout = ({ children }) => {
	return(
		<html lang='en'>
			<body>
				<main className={roboto.className}>
					{ children }
				</main>
			</body>
		</html>
	)
}

export default RootLayout