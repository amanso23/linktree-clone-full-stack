"use client";

import { TreePalm } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Link, User } from "@prisma/client";
import { LoaderProfile } from "@/components/Shared";
import { StepConfigUserProvider } from "@/contexts";
import { UserProvider } from "@/contexts";
import {
  HandlerSteps,
  Profile,
  ProfileInfo,
} from "@/(routes)/(home)/components";

export default function Home({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [reload, setReload] = useState(false);
  const [infoUser, setInfoUser] = useState<(User & { links: Link[] }) | null>(
    null
  );

  useEffect(() => {
    const checkFirstLogin = async () => {
      const response = await fetch("/api/info-user");
      const data = await response.json();
      setInfoUser(data);
      setIsFirstVisit(data.firstLogin);
    };
    checkFirstLogin();

    if (reload) {
      checkFirstLogin();
      setReload(true);
    }
  }, [user?.id, reload, user]);

  if (!user || !infoUser) {
    return <LoaderProfile />;
  }

  if (isFirstVisit) {
    return (
      <StepConfigUserProvider>
        <HandlerSteps onReload={setReload} />
      </StepConfigUserProvider>
    );
  }

  return (
    <UserProvider>
      <div className="grid grid-cols-1 xl:grid-cols-[60%_auto]">
        <section className="grid">
          <Profile />
          <ProfileInfo onReload={setReload} />
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
    </UserProvider>
  );
}
