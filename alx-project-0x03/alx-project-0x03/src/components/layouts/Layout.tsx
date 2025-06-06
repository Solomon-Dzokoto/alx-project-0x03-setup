import { LayoutProps } from "@/interfaces"; // Adjusted import path
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
