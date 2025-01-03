
import "../globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Header />
      <main className="mt-14">{children}</main>
      <Footer />
    </div>
  );
}
