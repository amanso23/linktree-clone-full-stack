import Image from "next/image";
import { UserProfileProps } from "./types";

export function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="flex flex-col items-center justify-between gap-2 h-screen max-w-2xl mx-auto">
      {user.backgroundImage ? (
        <Image
          src={user.backgroundImage}
          alt="BackgroundImage"
          layout="fill"
          objectFit="contain"
          className="absolute top-0 left-0 w-full h-full"
        />
      ) : (
        <div className="absolute top-o left-0 h-full w-full bg-[#E4E9ED]" />
      )}

      <div></div>
    </div>
  );
}
