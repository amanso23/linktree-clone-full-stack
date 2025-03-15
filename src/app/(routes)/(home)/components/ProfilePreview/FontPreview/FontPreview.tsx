import { useUserInfo } from "@/hooks/useUser";
import { Palmtree, TreePalm } from "lucide-react";
import Image from "next/image";
import { LinksSocial } from "./LinksSocial";

export function FontPreview() {
  const { user, links } = useUserInfo();

  if (!user) return null;

  const { backgroundImage, avatarUrl, username, bio } = user;
  return (
    <div className="relative mx-auto border-white border-[5px] rounded-[2.5rem] shadow-2xl">
      <div className="relative rounded-[2rem] overflow-hidden w-[290px] h-[590px] overflow-y-auto">
        {backgroundImage ? (
          <Image
            layout="fill"
            src={backgroundImage}
            alt="ProfileImage"
            className="absolute w-full h-full object-cover"
          />
        ) : (
          <div className="absolute w-full h-full bg-[#E4E9ED]"></div>
        )}

        <div className="relative z-10 flex flex-col items-center p-6 justify-between h-full">
          <Image
            src={avatarUrl || "/default-avatar.webp"}
            alt="Avatar"
            width={60}
            height={60}
            className="rounded-full object-cover aspect-square"
          />

          <h3 className="font-medium mt-1">@{username}</h3>
          {bio && <p className="text-pretty text-xs mt-2">{bio}</p>}

          <LinksSocial />

          <div className="flex items-center justify-center gap-1 font-bold py-1.5 px-3 bg-white rounded-full shadow-md">
            <TreePalm className="size-4" />
            <p className="text-xs">Linktree clone</p>
          </div>
        </div>
      </div>
    </div>
  );
}
