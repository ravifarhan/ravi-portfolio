import { Fira_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const firaMono = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-firaMono",
});

export const metadata = {
  title: "Ravi Farhan",
  description: "Ravi Farhan's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={firaMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
