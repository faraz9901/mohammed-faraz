import Transition from "@/components/Transition";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Mohammed Faraz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div className="flex flex-col h-screen overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-scroll no-scrollbar">
            <Transition>
              {children}
            </Transition>
          </main>
        </div>
      </body>
    </html>
  );
}


