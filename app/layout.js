import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://faraz-portfolio.com"),
  title: {
    default: "Mohammed Faraz | Full-Stack Developer",
    template: "%s | Mohammed Faraz",
  },
  description:
    "Personal portfolio of Mohammed Faraz – full-stack developer specializing in modern JavaScript, React, and Node.js. View projects, skills, and contact information.",
  keywords: [
    "Mohammed Faraz",
    "Faraz",
    "Full-Stack Developer",
    "JavaScript Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Mohammed Faraz", url: "https://faraz-portfolio.com" }],
  openGraph: {
    title: "Mohammed Faraz | Full-Stack Developer",
    description:
      "Explore the projects, experience, and skills of Mohammed Faraz – a passionate full-stack developer.",
    url: "https://faraz-portfolio.com",
    siteName: "Mohammed Faraz Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Faraz Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Faraz | Full-Stack Developer",
    description:
      "Explore the projects, experience, and skills of Mohammed Faraz – a passionate full-stack developer.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
