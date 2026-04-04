import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileCTABar } from "@/components/shared/MobileCTABar";
import { ExitIntentModal } from "@/components/shared/ExitIntentModal";
import { SetmoreBooking } from "@/components/shared/SetmoreBooking";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileCTABar />
      <ExitIntentModal />
      <SetmoreBooking />
    </div>
  );
}
