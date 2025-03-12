import { useUserInfo } from "@/hooks/useUser";
import { ProfileImage } from "./ProfileImage";
import { ProfileInfoProps } from "./types";

export function ProfileInfo({ onReload }: ProfileInfoProps) {
  const { user } = useUserInfo();

  return (
    <section className="flex gap-x-2 p-4">
      <ProfileImage />
      <div>{user?.name}</div>
    </section>
  );
}
