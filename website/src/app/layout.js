 import "./globals.css";
 import Header from "@/components/Header";
 import Footer from "@/components/Footer";
 import Herosection from "@/components/HeroSection";

  export const metadata = {
     title: "MY Company",
     description: "Official website of My Company",
};

  export default function RootLayout({ children }) {
     return (
       <html lang="en">
         <body className="bg-[#0A0F1F]"> 
           <Header /> 
           <Herosection />                
         {children}
           <Footer />                  
      </body>
     </html>
   );
  }

