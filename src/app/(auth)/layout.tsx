import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth layout",
  description: "Auth layout description",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
