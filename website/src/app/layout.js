import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "My Company",
  description: "Official website of My Company.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />     {/* Always visible */}
        <main>{children}</main>
        <Footer />     {/* Always visible */}
      </body>
    </html>
  );
}
