import "./globals.css";

export const metadata = {
  title: "CodeWinX IT Solutions",
  description:
    "CodeWinX IT Solutions provides professional website and software development services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
