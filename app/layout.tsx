import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthContext from "@/context/AuthContext";

const raleway = Raleway({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
	title: "Next14-ecom",
	description: "E-commerce Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={raleway.className}>
				<AuthContext>
					<Navbar />
					{children}
				</AuthContext>
			</body>
		</html>
	);
}
