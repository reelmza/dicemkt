import SideBar from "@components/SideBar";
import MainSpacer from "@components/MainSpacer";
import "./globals.css";

const SharedLayout = ({ children }) => {
  return (
    <html>
      <body className="font-inter text-[#222]">
        <div className="h-full w-full flex">
          {/* Nav width is lg:20% */}
          <SideBar />
          <main className="relative grow">
            <MainSpacer />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default SharedLayout;
