import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Star Cuts Barber Shop | Taylors Hill, VIC",
  description: "Experience professional haircuts and grooming at Star Cuts Barber Shop. Located in Taylors Hill, VIC. Quality cuts for men and kids.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
