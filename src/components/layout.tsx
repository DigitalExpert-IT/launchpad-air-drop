import { Navigation } from "@/constants/navigation";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar data={Navigation} />
      <main>{children}</main>
    </>
  );
}
