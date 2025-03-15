import { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard user page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full min-h-screen bg-gray-100">
      {children}
      <Toaster />
    </main>
  );
}
