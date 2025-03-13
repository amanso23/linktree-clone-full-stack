import { Button } from "@/components/ui/button";
import { TabDeleteProps } from "./types";
import { ChevronLeft } from "lucide-react";
import axios from "axios";
import { useUserInfo } from "@/hooks/useUser";
import Image from "next/image";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

export function TabDelete({ setShowDialog, setShowTab }: TabDeleteProps) {
  const { reloadUser, user } = useUserInfo();

  if (!user) return null;

  const { avatarUrl } = user;

  const onDeleteAvatar = async () => {
    const response = await axios.patch("/api/update-user", {
      avatarUrl: "",
    });
    if (response.status === 200) {
      toast("Avatar Removed ", {
        description: "Your avatar has been successfully removed.",
        duration: 3000,
        action: {
          label: "Undo",
          onClick: () => console.log("Undo clicked"),
        },
      });

      setShowDialog(false);
      reloadUser();
    }
    return;
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        className="flex gap-1 items-center text-sm cursor-pointer hover:bg-slate-100 p-2 w-fit rounded-lg"
        onClick={() => setShowTab(null)}
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </div>

      <Dialog>
        <DialogTrigger>
          <Image
            src={avatarUrl || "/default-avatar.webp"}
            alt="ProfileImage"
            width={300}
            height={300}
            className="w-30 h-auto aspect-square rounded-full object-cover m-auto cursor-pointer"
          />
        </DialogTrigger>
        <DialogContent className="max-w-96 h-auto aspect-square p-0">
          <DialogTitle className="hidden"></DialogTitle>
          <Image
            src={avatarUrl || "/default-avatar.webp"}
            alt="DialogProfileImage"
            width={300}
            height={300}
            className="w-full h-full object-cover aspect-square rounded-lg"
          />
        </DialogContent>
      </Dialog>

      <div className="flex flex-col gap-1 mt-4 ">
        <Button className="w-full" onClick={() => setShowTab(null)}>
          Cancel
        </Button>
        <Button className="w-full" onClick={onDeleteAvatar}>
          Delete my avatar
        </Button>
      </div>
    </div>
  );
}
