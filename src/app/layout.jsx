import { Toaster } from "react-hot-toast";
import { font } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Navigation from "@/components/navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Toaster />
        <Navbar />
        <main className="flex w-full">
          <Sidebar />
          <div className="w-full">
            {/* <Navigation /> */}
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
