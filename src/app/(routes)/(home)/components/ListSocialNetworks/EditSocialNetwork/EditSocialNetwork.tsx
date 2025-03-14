import { Button } from "@/components/ui/button";
import { EditSocialNetworkProps } from "./types";

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
import { useState } from "react";

export function EditSocialNetwork({ link, onReload }: EditSocialNetworkProps) {
  const [linkUrl, setLinkUrl] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  console.log(linkUrl);

  const onEditSocialNetwork = async () => {
    const response = await axios.patch("/api/update-link", {
      linkId: link.id,
      link: linkUrl,
    });
    if (response.status === 200) {
      onReload((prevState) => !prevState);
      setShowDialog(false);
    }
  };

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit link</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            New URL
          </Label>
          <Input
            id="name"
            defaultValue={link.link || ""}
            className="col-span-3"
            onChange={({ target }) => setLinkUrl(target.value)}
          />
        </div>

        <DialogFooter>
          <Button type="submit" onClick={onEditSocialNetwork}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
