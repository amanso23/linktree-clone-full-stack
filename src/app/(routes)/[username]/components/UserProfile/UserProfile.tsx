import Image from "next/image";
import { UserProfileProps } from "./types";
import { TreePalm } from "lucide-react";
import { MoreInfoProfile } from "../MoreInfoProfile";

export function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="relative flex flex-col items-center justify-between gap-2  ">
      {user.backgroundImage ? (
        <Image
          src={user.backgroundImage}
          alt="BackgroundImage"
          fill
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />
      ) : (
        <div className="absolute top-o left-0 h-full w-full bg-[#E4E9ED]" />
      )}

      <div className="flex flex-col items-center gap-2 pt-10 w-full px-5 z-10 max-w-2xl mx-auto min-h-screen">
        <MoreInfoProfile user={user} />
        <Image
          src={user.avatarUrl || "/default-avatar.web"}
          alt="ProfileImage"
          width={100}
          height={100}
          className="rounded-full aspect-square object-cover"
        />

        <p className="font-semibold text-2xl">@{user.username}</p>

        {user.bio && (
          <div className="my-2 ">
            <p className="text-center max-w-80">{user.bio}</p>
          </div>
        )}

        <div className="flex flex-col text-center gap-3 mt-6 w-full">
          {user.links.map(({ name, link }) => (
            <a key={name} href={link || ""} title={`Link to my ${name}`}>
              <p className="px-2 py-4 w-full rounded-full bg-white/65 transition-all duration-300 hover:bg-transparent border-3 border-black font-semibold text-xl shadow-2xl">
                {name}
              </p>
            </a>
          ))}
        </div>
        <div className="pt-5 pb-5 z-10">
          <div className="flex items-center justify-center gap-1 font-bold py-2 px-5 bg-white rounded-full shadow-md">
            <TreePalm className="size-5" />
            <p>Linktree clone</p>
          </div>
        </div>
      </div>
    </div>
  );
}
