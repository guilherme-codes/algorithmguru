import { Open_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "./ui/sidebar";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-open-sans"
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} antialiased flex`}
      >
        <Sidebar />
        <main className="px-6 pb-10 pt-20 lg:py-10 lg:ml-64 transition-all xl:max-w-[60%]">
        {children}
        </main>
      </body>
    </html>
  );
}
