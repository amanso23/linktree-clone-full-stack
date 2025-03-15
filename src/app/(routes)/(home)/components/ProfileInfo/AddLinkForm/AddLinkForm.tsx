import { AddLinkFormProps } from "./types";
import { AddLinkForm as Form } from "./AddLink.form";
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
import { useState } from "react";

export function AddLinkForm({ onReload }: AddLinkFormProps) {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <Button variant="outline">Add new link</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form onReload={onReload} setShowDialog={setShowDialog} />
      </DialogContent>
    </Dialog>
  );
}
