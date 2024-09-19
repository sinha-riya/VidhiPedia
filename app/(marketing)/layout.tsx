import React from 'react';
import Footer from './footer';


type Props = {
  children: React.ReactNode;
};

const MarketingLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer className="absolute bottom-0 left-0 w-full" />
    </div>
  );
};

export default MarketingLayout;