import { useUserInfo } from "@/hooks/useUser";
import Image from "next/image";
import { Lock } from "lucide-react";
import { ButtonsHeader } from "./ButtonsHeader";
import { ButtonCopy } from "./ButtonCopy";
import { FontPreview } from "./FontPreview";
export function ProfilePreview() {
  const { user, links } = useUserInfo();

  if (!user) return null;

  const { avatarUrl, backgroundImage, bio, name, username } = user;

  return (
    <div className="flex flex-col gap-6 h-full w-full items-center text-center">
      <ButtonsHeader />
      <ButtonCopy />

      <FontPreview />

      <div className="flex items-center gap-2">
        <p className="cursor-pointer">Hide linktree logo</p>
        <Lock className="size-4" />
      </div>
    </div>
  );
}
