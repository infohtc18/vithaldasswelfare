import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Vithaldass Welfare Foundation",
  description: "Empowering Lives, Enriching Futures",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800 antialiased ">
        <Header />
        <Toaster />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
