import "./globals.css";
import Head from "next/head";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.gif" type="image/x-icon" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
