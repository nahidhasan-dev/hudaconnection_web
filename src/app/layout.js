import "./globals.css";
import LeftBar from './../components/LeftBar';
import RightBar from './../components/RightBar';
import NavBar from "@/components/NavBar";
import Head from "next/head";


export const metadata = {
  title: "Huda Connection",
  description: "Share the light of Islam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="title" content="Huda Connection" />
        <meta name="description" content="A platform to connect and share Islamic knowledge with the world." />
        <meta name="keywords" content="Islam, Muslim Community, Quran, Hadith, Islamic Knowledge, Religion, Mahfil" />
        <meta name="author" content="Huda Connection Team" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Huda Connection" />
        <meta property="og:description" content="A platform to connect and share Islamic knowledge with the world." />
        <meta property="og:image" content="/huda-connection-banner.jpg" />
        <meta property="og:url" content="https://hudaconnection.com" />
        <meta property="og:site_name" content="Huda Connection" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Huda Connection" />
        <meta name="twitter:description" content="A platform to connect and share Islamic knowledge with the world." />
        <meta name="twitter:image" content="/huda-connection-banner.jpg" />
        <meta name="twitter:site" content="@HudaConnection" />
      </Head>
      <body className="">
        <div className="max-w-screen-xl lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between">
          <div className="hidden lg:flex px-2 xxl:px-8 mr-4 md:mr-8 bg-white rounded-lg border-x-[1px] border-gray-200"><LeftBar /></div>
          <div className="flex-1 flex-col lg:min-w-[600px] ">
            <NavBar />
            {children}
          </div>
          <div className="hidden lg:flex ml-4 md:ml-8 bg-white rounded-lg border-x-[1px] border-gray-200"><RightBar /></div>
        </div>
      </body>
    </html>
  );
}
