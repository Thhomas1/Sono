import { Inter, Helvetica,} from "next/font/google"; // 1. Aca cambiamos la tipografia que quiera 
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Patente from "@/components/patente/Patente";

const inter = Inter({ subsets: ["latin"] }); // 2. Aca y 3 en la linea 16 

export const metadata = {
  title: "Sono Macchine",
  description: "Creado por Thomy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
        <Navbar /> 
        {children}
        <Footer />
        <Patente />
        </div>
        </body>
    </html>
  );
}
