import Navbar from "@/components/Shared/Navbar";
import "./globals.css";
import Footer from "@/components/Shared/Footer";

export const metadata = {
  title: "Best Polytechnic Institute In Dhaka",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <Navbar />
        <section>{children}</section>
        <Footer />
      </body>
    </html>
  );
}
