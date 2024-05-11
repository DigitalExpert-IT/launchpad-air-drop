import { Navigation } from "@/constants/navigation";
import Navbar from "./navbar";

interface LayoutProps{
  children: React.ReactNode
}

export default function Layout({ children } : LayoutProps) {
  return (
    <>
      <Navbar data={Navigation} />
      <main>{children}</main>
    </>
  );
}
