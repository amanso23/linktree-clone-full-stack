import { useUserInfo } from "@/hooks/useUser";
import { useState } from "react";
import Image from "next/image";
import { Edit2, Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { SelectorProfileImage } from "./SelectorProfileImage";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

export function ProfileImage() {
  const [showDialog, setShowDialog] = useState(false);
  const { user } = useUserInfo();

  if (!user) return null;

  return (
    <TooltipProvider>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogTrigger asChild>
          <div className="relative cursor-pointer">
            <Tooltip open={true}>
              <TooltipTrigger asChild disabled>
                <Image
                  src={user.avatarUrl || "/default-avatar.webp"}
                  alt="Profile Image"
                  width={300}
                  height={300}
                  className="w-20 h-auto aspect-square object-cover rounded-full"
                />
              </TooltipTrigger>
              <TooltipContent
                align="center"
                side="right"
                className="bg-black  text-white p-2 rounded-md shadow-md"
              >
                <p className="text-sm">Upload your avatar</p>
                <TooltipArrow className="fill-black" />
              </TooltipContent>
            </Tooltip>
            <span className="bg-cyan-400 rounded-full size-9 absolute right-0 -bottom-2 flex items-center justify-center border-4 border-gray-100">
              {user.avatarUrl ? (
                <Edit2 className="size-4 text-white" />
              ) : (
                <Plus className="size-6 text-white" />
              )}
            </span>
          </div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Upload your avatar</DialogTitle>
            <DialogDescription>
              Select an image to set as your new avatar.
            </DialogDescription>
          </DialogHeader>
          <SelectorProfileImage setShowDialog={setShowDialog} />
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
}
