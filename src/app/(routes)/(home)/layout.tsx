import { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full bg-gray-100">
      {children}
      <Toaster />
    </main>
  );
}
