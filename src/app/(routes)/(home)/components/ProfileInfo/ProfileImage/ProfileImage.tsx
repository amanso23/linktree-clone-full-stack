import { useUserInfo } from "@/hooks/useUser";
import { useState } from "react";
import Image from "next/image";
import { Edit, Edit2, Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { SelectorProfileImage } from "./SelectorProfileImage";

export function ProfileImage() {
  const [showDialog, setShowDialog] = useState(false);
  const { user } = useUserInfo();

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <div className="relative">
            <Image
              src={user?.avatarUrl || "/default-avatar.webp"}
              alt="Profile Image"
              width={300}
              height={300}
              className="w-20 h-auto aspect-square object-cover rounded-full"
            />

            <span className="bg-cyan-400 rounded-full size-8 absolute right-0 -bottom-2 flex items-center justify-center border-4 border-gray-100">
              {user?.avatarUrl ? (
                <Edit2 className="size-4 text-white" />
              ) : (
                <Plus className="size-6 text-white" />
              )}
            </span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload your avatar</DialogTitle>
          <DialogDescription asChild>
            <SelectorProfileImage setShowDialog={setShowDialog} />
          </DialogDescription>
        </DialogHeader>
        {/* <DialogFooter>
          <Button onClick={() => {}}>Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
