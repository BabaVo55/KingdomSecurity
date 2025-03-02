import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/sidebar";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen w-full bg-gray-200">
          <Sidebar />
          <div className="flex flex-col w-full h-full ml-64 p-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
