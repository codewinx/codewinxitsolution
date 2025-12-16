import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CodeWinX IT Solutions",
  description: "Official website of CodeWinX IT Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0A0F1F] text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
