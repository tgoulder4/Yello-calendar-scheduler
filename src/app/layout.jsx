import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export const metadata = {
  title: "Manjo",
  description: "Your focus companion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/*nav!!!*/}
        <main className="${inter.className} px-[180px] py-[30px] mx-auto min-h-[100vh] bg-[color:var(--primaryLight)]">
          <div className="outline outline-offset-2 outline-pink-500 flex flex-col gap-8">
            <NavBar />
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
