import { useState } from "react";
import { EditBackgroundProps } from "./types";
import { Eclipse } from "lucide-react";
import { useUserInfo } from "@/hooks/useUser";
import Image from "next/image";

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
import axios from "axios";
import { toast } from "sonner";
import { UploadButton } from "@/lib/uploadthing";

export function EditBackground({ onReload }: EditBackgroundProps) {
  const [showDialog, setShowDialog] = useState(false);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState("");

  const { user, reloadUser } = useUserInfo();

  if (!user) return null;

  const { backgroundImage } = user;

  const onChangeBackground = async () => {
    const response = await axios.patch("/api/update-user", {
      backgroundImage: backgroundImageUrl,
    });
    if (response.status === 200) {
      toast("Background updated ", {
        description: "Your background has been successfully updated.",
        duration: 3000,
        action: {
          label: "Undo",
          onClick: () => console.log("Undo clicked"),
        },
      });
      setShowDialog(false);
      reloadUser();
      onReload(true);
      setBackgroundImageUrl("");
    }
  };

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Eclipse className="size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload background</DialogTitle>
          <DialogDescription>
            Customize your profile background by entering an image URL. Click
          </DialogDescription>
        </DialogHeader>
        {backgroundImageUrl ? (
          <Image
            alt="BackgroundImage"
            src={backgroundImageUrl}
            width={300}
            height={300}
            className="w-full auto"
          />
        ) : (
          <UploadButton
            className="rounded-md h-full bg-gray-300 text-black py-4"
            endpoint={"profileImage"}
            onClientUploadComplete={(res) => {
              setBackgroundImageUrl(res?.[0].ufsUrl);
            }}
            onUploadError={(error) => {
              console.error(error);
            }}
          />
        )}

        <DialogFooter>
          <div className="flex flex-col gap-1 w-full">
            <Button
              type="submit"
              className="w-full"
              onClick={onChangeBackground}
            >
              Save changes
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
