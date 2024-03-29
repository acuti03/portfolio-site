import React from "react"
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Provider from "./provider";
import { Metadata } from "next";

const poppins = Poppins({ subsets: ["latin"], weight: ['300', '400', '600'] });

export const metadata: Metadata = {
  title: "Simone Acuti"
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<html lang="en" className={poppins.className}>
			<body className="dark:bg-slate-900 dark:text-white text-slate-800">
				{
					<>
						<Provider>
							<Navbar/>
							{children}
						</Provider>
					</>
				}
			</body>
		</html>
	);
}
