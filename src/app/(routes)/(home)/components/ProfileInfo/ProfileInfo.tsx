import { ProfileImage } from "./ProfileImage";
import { ProfileInfoProps } from "./types";
import { BlockInfo } from "./ProfileImage/BlockInfo";
import { ProfileData } from "./ProfileData";

export function ProfileInfo({ onReload }: ProfileInfoProps) {
  return (
    <section className="flex justify-between items-center p-6">
      <div className="flex items-center gap-4">
        <ProfileImage />
        <ProfileData />
      </div>
      <BlockInfo />
    </section>
  );
}
