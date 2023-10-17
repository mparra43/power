import { ReactNode } from "react";
import { Footer, Navbar } from "./";


interface LayoutProps {
    children: ReactNode
  }


export const Layout = ({ children }:LayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
