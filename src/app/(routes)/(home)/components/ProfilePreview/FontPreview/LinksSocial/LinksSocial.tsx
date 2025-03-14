import { useUserInfo } from "@/hooks/useUser";
import Image from "next/image";

export function LinksSocial() {
  const { links } = useUserInfo();

  if (!links) return null;

  return (
    <ul className="flex item-center flex-wrap gap-2 mt-4">
      {links.map(({ name, link, icon }) => (
        <li key={name}>
          <a
            href={link || ""}
            rel="noopener noreferrer"
            target="_blank"
            title={`Link to my ${name}`}
          >
            <Image src={icon || ""} alt="SocialIcon" width={30} height={30} />
          </a>
        </li>
      ))}
    </ul>
  );
}
