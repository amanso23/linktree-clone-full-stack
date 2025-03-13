//profile user data (name, username, bio)

import { useUserInfo } from "@/hooks/useUser";

export function ProfileData() {
  const { user } = useUserInfo();

  if (!user) return null;

  const { name, username, bio } = user;

  return (
    <div className="flex flex-col items-start">
      {name ? (
        <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
      ) : (
        <h1 className="text-2xl font-semibold text-gray-500">
          No name available
        </h1>
      )}

      {username ? (
        <h3 className=" text-gray-600 opacity-80">@{username}</h3>
      ) : (
        <h3 className=" text-gray-400">No username available</h3>
      )}

      {bio ? (
        <p className="text-sm text-gray-700 text-pretty">{bio}</p>
      ) : (
        <p className="text-sm text-gray-400">No bio available</p>
      )}
    </div>
  );
}
