import { Button } from "@/components/ui/button";
import { ListSocialNetworksProps } from "./types";
import Image from "next/image";
import { ExternalLink, Link } from "lucide-react";
import { EditSocialNetwork } from "./EditSocialNetwork";
import { RemoveSocialNetwork } from "./RemoveSocialNetwork";

export function ListSocialNetworks({
  links,
  onReload,
}: ListSocialNetworksProps) {
  return (
    <div className="flex flex-col  gap-4 max-w-2xl mx-auto">
      {links &&
        links.map((link) => (
          <div
            key={link.name}
            className="flex items-center justify-between  gap-3 rounded-full bg-white px-4 py-4"
          >
            <div className="flex items-center gap-3">
              <div>
                <Image
                  src={link.icon || ""}
                  alt="Icon"
                  width={40}
                  height={40}
                />
              </div>

              <div className="flex flex-col">
                <h2 className="font-medium ">{link.name}</h2>
                <p className="text-sm opacity-70">{link.link}</p>
              </div>
            </div>

            <div className="flex gap-1 items-center">
              <Button asChild variant={"outline"}>
                <a href={`${link.link}`} target="_blank">
                  <Link />
                </a>
              </Button>
              <EditSocialNetwork link={link} onReload={onReload} />
              <RemoveSocialNetwork link={link} onReload={onReload} />
            </div>
          </div>
        ))}
    </div>
  );
}
