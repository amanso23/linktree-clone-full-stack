import { useStepConfig } from "@/hooks/useStepConfig";
import Image from "next/image";
import { Props } from "./types";
import { Button } from "@/components/ui/button";

export function Summary({ onReload }: Props) {
  const { infoUser } = useStepConfig();

  const { avatarUrl, name, platforms, typeUser, username } = infoUser;

  return (
    <section className="text-center">
      <h2 className="text-2xl">Your linktree is ready</h2>
      <p>Its time to share to the world</p>

      <div className="flex flex-col items-center mt-4 gap-1">
        <Image
          src={avatarUrl}
          width={300}
          height={300}
          className="rounded-full max-w-20 min-h-20  object-cover "
          alt="ProfilePhoto"
        />

        <h1 className="text-2xl font-semibold text-black">{name}</h1>
        <h3>@{username}</h3>
        <span className="px-4 py-1 text-xs border rounded-full">
          {typeUser}
        </span>

        <ul className="flex flex-col self-start gap-4 mt-2">
          {platforms.map(({ icon, link, name }) => (
            <li key={name}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={link}
                title={`Link to my ${name}`}
                className="flex items-center gap-2"
              >
                <Image src={icon} alt="SocialIcon" width={30} height={30} />
                <p>{name}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Button className="mt-4 w-full" onClick={onReload}>
        Continue to the profile
      </Button>
    </section>
  );
}
