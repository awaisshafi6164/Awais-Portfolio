import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MouseFollower from './MouseFollower';
import BackgroundEffects from './BackgroundEffects';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <MouseFollower />
      <BackgroundEffects />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
