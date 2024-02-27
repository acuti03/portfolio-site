import React from "react"
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Provider from "./provider";
import { Metadata } from "next";
import Image from "next/image";
import image from "@/assets/background.png";
import AnimatedCursor from "react-animated-cursor";


const poppins = Poppins({ subsets: ["latin"], weight: ['300', '400', '600'] });

export const metadata: Metadata = {
  title: "Simosite"
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
