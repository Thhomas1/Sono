import { Inter, Helvetica,} from "next/font/google"; // 1. Aca cambiamos la tipografia que quiera 
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] }); // 2. Aca y 3 en la linea 16 

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
        <Navbar /> 
        {children}
        <Footer />
        </div>
        </body>
    </html>
  );
}
