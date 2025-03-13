//profile user data (name, username, bio)

import { useUserInfo } from "@/hooks/useUser";

export function ProfileData() {
  const { user } = useUserInfo();

  if (!user) return;

  const { name, username, bio } = user;

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">{name}</h1>
      <h3 className="text-sm">@{username}</h3>
      <p className="text-pretty text-xs opacity-70 max-w-50">{bio}</p>
    </div>
  );
}
