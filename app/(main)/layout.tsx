import { MobileHeader } from "@/components/header-mobile";
import { Sidebar } from "@/components/sidebar";

type Props = {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex"/>
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="max-w-[1056px] mx-auto pt-6 h-full">
          {children}
        </div>
      </main>
      <script src="https://cdn.botpress.cloud/webchat/v2.1/inject.js"></script>
      <script src="https://mediafiles.botpress.cloud/400e584b-ba16-48ae-9b2e-e4c71d8b2f3c/webchat/v2.1/config.js"></script>
    </>
  );
}

export default MainLayout;
