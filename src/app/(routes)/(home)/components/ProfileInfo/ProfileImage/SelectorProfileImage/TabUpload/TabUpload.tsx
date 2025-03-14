import { useState } from "react";
import { TabUploadProps } from "./types";
import { ChevronLeft } from "lucide-react";
import { UploadButton } from "@/lib/uploadthing";
import { Button } from "@/components/ui/button";
import { useUserInfo } from "@/hooks/useUser";
import Image from "next/image";
import axios from "axios";
import { toast } from "sonner";

export function TabUpload({ setShowDialog, setShowTab }: TabUploadProps) {
  const { user, reloadUser } = useUserInfo();
  const [avatarUrl, setAvatarUrl] = useState("");

  const onUploadAvatar = async () => {
    const response = await axios.patch("api/update-user", {
      avatarUrl,
    });

    if (response.status === 200) {
      toast("Avatar Uploaded", {
        description: "Your avatar has been successfully uploaded.",
      });
      setShowDialog(false);
      reloadUser();
    }
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

      {!avatarUrl ? (
        <UploadButton
          className="rounded-md text-slate-800 bg-slate-200 w-full h-full p-4"
          endpoint={"profileImage"}
          onClientUploadComplete={(res) => {
            setAvatarUrl(res?.[0].ufsUrl);
          }}
          onUploadError={(error: Error) => {
            console.error(error);
          }}
        />
      ) : (
        <Image
          src={avatarUrl}
          alt="ProfileImage"
          width={300}
          height={300}
          className="w-30 h-auto rounded-full self-center aspect-square"
        />
      )}

      <Button className="w-full" onClick={onUploadAvatar}>
        Upload
      </Button>
    </div>
  );
}
