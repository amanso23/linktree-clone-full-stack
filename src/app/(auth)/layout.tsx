import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth layout",
  description: "Auth layout description",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid grid-cols-1 place-items-center h-screen">
      {children}
    </main>
  );
}
