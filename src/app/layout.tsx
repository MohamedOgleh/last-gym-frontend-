import SideBar from "@/components/custom/SideBar/SideBar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import TopBar from "@/components/custom/TopBar/TopBar";
import Footer from "@/components/custom/Footer/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main
          className="grid grid-cols-[250px_minmax(100px,1fr)] grid-rows-[60px_minmax(100px,1fr)_50px] 
  h-screen bg-background"
        >
          <header className="flex justify-between p-2 col-start-2 col-span-4 px-5">
            <TopBar />
          </header>

          <aside className="flex flex-col justify-start items-center gap-5 p-2 bg-[#0F75B1] row-start-1 row-end-4">
            <SideBar />
          </aside>

          <section className=" "> {children}</section>

          <footer className="flex justify-evenly p-2 col-start-2 col-span-4  font-sans">
            <Footer />
          </footer>
        </main>
      </body>
    </html>
  );
}
