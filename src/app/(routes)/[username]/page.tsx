"use client";

import { LoaderProfile } from "@/components/Shared";
import { Link, User } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { NotFoundUser, UserProfile } from "./components";

export default function Page() {
  const params = useParams();
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [infoUser, setInfoUser] = useState<(User & { links: Link[] }) | null>(
    null
  );

  const { username } = params;
  const router = useRouter();

  console.log(infoUser);

  useEffect(() => {
    if (!username) router.push("/");
    getInfoUser();
    if (reload) {
      getInfoUser();
      setReload(false);
    }
  }, [username, reload, router]);

  const getInfoUser = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/info-user/${username}`);
      const data = await response.json();
      setInfoUser(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoaderProfile />;
  }

  if (!infoUser) {
    return <NotFoundUser />;
  }

  return (
    <div>
      <UserProfile user={infoUser} />
    </div>
  );
}
