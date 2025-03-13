import { useUserInfo } from "@/hooks/useUser";
import { useState } from "react";
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
import { toast } from "sonner";
import { ProfileForm } from "./ProfileForm";

export function BlockInfo() {
  const { reloadUser, user } = useUserInfo();
  const [openDialog, setOpenDialog] = useState(false);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  if (!user) return;

  const handleEditProfile = async () => {
    const response = await axios.patch("/api/update-user", {
      name,
      username,
      bio,
    });
    if (response.status === 200) {
      toast("User Uploaded", {
        description: "Your user has been successfully uploaded.",
        duration: 3000,
        action: {
          label: "Undo",
          onClick: () => console.log("Undo clicked"),
        },
      });
      setOpenDialog(false);
      reloadUser();
    }
  };

  return (
    <div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm setOpenDialog={setOpenDialog} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
