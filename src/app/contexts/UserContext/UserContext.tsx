import { createContext, useEffect, useState } from "react";
import { UserContextType, UserProviderProps } from "./types";
import { useUser } from "@clerk/nextjs";
import { Link, User } from "@prisma/client";

export const UserContext = createContext<UserContextType>({
  user: null,
  isLoading: false,
  links: null,
  reloadUser: () => {},
});

export function UserProvider({ children }: UserProviderProps) {
  const { user } = useUser();
  const [infoUser, setInfoUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [links, setLinks] = useState<Link[] | null>(null);

  const fetchUserInfo = async () => {
    if (!user) return;

    try {
      setIsLoading(true);
      const response = await fetch("api/info-user");
      const data = await response.json();

      setInfoUser(data);
      setLinks(data.links || []);
    } catch (error) {
      console.error("Error fetching user info:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, [user]);

  const reloadUser = () => {
    fetchUserInfo();
  };

  const data = {
    user: infoUser,
    isLoading,
    links,
    reloadUser,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}
