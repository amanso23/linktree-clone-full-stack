import { MoreInfoProfileProps } from "./types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { SocialLinks } from "./SocialLinks";

export function MoreInfoProfile({ user }: MoreInfoProfileProps) {
  return (
    <div className="max-w-lg w-full mx-auto flex items-end justify-end">
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <MoreHorizontal className="size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Share your linktree</DialogTitle>
            <div className="gap-4 py-4 ">
              <div className="p-4 rounded-lg bg-teal-800 text-white flex flex-col items-center justify-center">
                <Image
                  src={user.avatarUrl || "/default-avatar.webp"}
                  alt="Avatar"
                  width={96}
                  height={96}
                  className="rounded-full aspect-square object-cover"
                />
                <p className="font-semibold text-xl">@{user.username}</p>
              </div>
            </div>
            <SocialLinks userName={user.username} />
          </DialogHeader>

          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
