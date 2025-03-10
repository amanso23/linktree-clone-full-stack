import { TreePalm } from "lucide-react";
import Profile from "./components/Profile/Profile";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-[60%_auto]">
        <section className="grid">
          <Profile />
          <h1>Profile info</h1>
          <div className="grid place-items-center opacity-60">
            <TreePalm className="w-auto h-16 " />
            <h2>Show the world who you are.</h2>
            <h3>Add a link to get started</h3>
          </div>
        </section>

        <section>
          <h1>Profile preview</h1>
        </section>
      </div>
      {children}
    </div>
  );
}
