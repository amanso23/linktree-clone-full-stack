import { ProfileImage } from "./ProfileImage";
import { ProfileInfoProps } from "./types";
import { BlockInfo } from "./ProfileImage/BlockInfo";
import { EditBackground } from "./EditBackground";
import { AddLinkForm } from "./AddLinkForm";

export function ProfileInfo({ onReload }: ProfileInfoProps) {
  return (
    <section className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <ProfileImage />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          <BlockInfo />
          <EditBackground onReload={onReload} />
        </div>
        <AddLinkForm onReload={onReload} />
      </div>
    </section>
  );
}
