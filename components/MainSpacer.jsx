"use client";
import { usePathname } from "next/navigation";
const MainSpacer = () => {
  const path = usePathname();
  const isHiddenSidebarPage =
    path.includes("signin") ||
    path.includes("register") ||
    path.includes("reset-password");
  return <>{!isHiddenSidebarPage && <div className="w-full h-20"></div>}</>;
};

export default MainSpacer;
