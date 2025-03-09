import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth layout",
  description: "Auth layout description",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 place-items-center h-full">{children}</div>
  );
}
