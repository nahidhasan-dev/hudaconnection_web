import "./globals.css";
import LeftBar from './../components/LeftBar';
import RightBar from './../components/RightBar';
import NavBar from "@/components/NavBar";


export const metadata = {
  title: "Huda Connection",
  description: "Share the light of Islam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
