import { useUserInfo } from "@/hooks/useUser";
import Image from "next/image";

export function LinksSocial() {
  const { links } = useUserInfo();

  if (!links) return null;

  return (
    <div className="flex flex-col text-center gap-2 mt-6 w-full">
      {links.map(({ name, link }) => (
        <a key={name} href={link || ""} title={`Link to my ${name}`}>
          <p className="px-1 py-1.5 w-full rounded-full bg-white/65 transition-all duration-300 hover:bg-transparent border border-black font-semibold">
            {name}
          </p>
        </a>
      ))}
    </div>
  );
}
