import Header from "./component/Header";
import { Mulish } from 'next/font/google';
import "./globals.css";

const mulish = Mulish({
  weight: ['300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "NextJS 13 Project",
  description: "Practice Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body >
        <Header />
        {children}
        </body>
    </html>
  );
}
