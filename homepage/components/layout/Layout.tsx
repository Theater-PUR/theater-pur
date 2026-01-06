import { Header, type HeaderProps } from "./Header";
import { Footer, type FooterProps } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  headerProps?: HeaderProps;
  footerProps?: FooterProps;
}

export function Layout({ children, headerProps, footerProps }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header {...headerProps} />
      <main className="flex-1 pt-20">{children}</main>
      <Footer {...footerProps} />
    </div>
  );
}
