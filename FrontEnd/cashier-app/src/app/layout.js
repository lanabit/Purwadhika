import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "~/components/navbar";
const inter = Inter({ subsets: ["latin"] });
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import TanstackProvider from "~/providers/tanstackProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>  
        <ToastContainer></ToastContainer>
          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
