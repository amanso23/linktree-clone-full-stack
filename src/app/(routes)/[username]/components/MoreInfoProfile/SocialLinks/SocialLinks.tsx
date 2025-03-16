"use client";

import { Link } from "lucide-react";
import { SocialLinksProps } from "./types";
import { Button } from "@/components/ui/button";
import { dataLinks } from "./data";
import Image from "next/image";

export function SocialLinks({ userName }: SocialLinksProps) {
  const copyToClipboard = () => {
    const url = `${window.location.origin}/${userName}`;

    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("URL copied to clipboard");
      })
      .catch((error) => {
        console.error("Failed to copy URL:", error);
      });
  };

  return (
    <div className="overflow-auto">
      <div className="flex items-center gap-4 my-2">
        <div
          className="flex flex-col items-center gap-2 cursor-pointer "
          onClick={copyToClipboard}
        >
          <Button variant={"outline"}>
            <Link className="size-5" />
          </Button>
          <p className="font-semibold text-xs">Copy</p>
        </div>

        {dataLinks.map(({ id, link, icon, social }) => (
          <a
            href={`${link}/${userName}`}
            target="_blank"
            rel="noreferrer"
            key={id}
            className="flex flex-col gap-2 items-center justify-center"
          >
            <Image
              src={icon}
              alt="SocialIcon"
              width={40}
              height={40}
              className="hover:scale-110 transition-all duration-300"
            />
            <p className="text-xs font-semibold">{social}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
