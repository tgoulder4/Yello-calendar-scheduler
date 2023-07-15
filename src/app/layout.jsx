import "./globals.css";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Manjo",
  description: "Your focus companion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="${inter.className} px-[240px] py-[50px] mx-auto min-h-[100vh] bg-[color:var(--primaryLight)]">
        {/*nav!!!*/}
        <main className="outline outline-offset-2 outline-pink-500 flex flex-col gap-8">
          <nav className="flex justify-between h-8">
            <img
              src="/assets/manjo.png"
              draggable="false"
              alt="Manjo"
              className="object-fill h-fit"
            />
            <FontAwesomeIcon
              className="max-w-[30px]"
              icon={faBars}
              color="#C8C8C8"
            />
            {/* this hamburger needs to be animated */}
          </nav>

          {children}
          {/*footer */}
        </main>
      </body>
    </html>
  );
}
