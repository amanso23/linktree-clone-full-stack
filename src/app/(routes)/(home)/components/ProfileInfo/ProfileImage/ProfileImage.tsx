import { useUserInfo } from "@/hooks/useUser";
import { useState } from "react";
import Image from "next/image";
import { Edit, Edit2, Edit2Icon, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { SelectorProfileImage } from "./SelectorProfileImage";

export function ProfileImage() {
  const [showDialog, setShowDialog] = useState(false);
  const { user } = useUserInfo();

  console.log(showDialog);

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <div className="w-20 h-auto aspect-square rounded-full  cursor-pointer">
          {user?.avatarUrl ? (
            <Image
              src={user?.avatarUrl}
              alt="ProfileImage"
              width={300}
              height={300}
              className="w-full h-auto aspect-square transition-all duration-300 hover:brightness-70 object-cover rounded-full"
            />
          ) : (
            <div className="flex items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-100 border w-full h-auto aspect-square">
              <Plus className="w-7 h-7" />
            </div>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload your avatar</DialogTitle>
          <DialogDescription asChild>
            <SelectorProfileImage setShowDialog={setShowDialog} />
          </DialogDescription>
        </DialogHeader>
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue={user?.name ?? ""}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue={`@${user?.username}`}
              className="col-span-3"
            />
          </div>
        </div> */}
        {/* <DialogFooter>
          <Button onClick={() => {}}>Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
