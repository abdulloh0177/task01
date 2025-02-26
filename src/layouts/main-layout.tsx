import HeaderComponent from "@/components/header-component";
import FooterComponent from "@/components/footer-component";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
};

export default MainLayout;
