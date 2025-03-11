import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Mohammed Faraz",
  description: "Mohammed Faraz Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div className="flex flex-col h-screen overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-scroll scroll-smooth no-scrollbar">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}


