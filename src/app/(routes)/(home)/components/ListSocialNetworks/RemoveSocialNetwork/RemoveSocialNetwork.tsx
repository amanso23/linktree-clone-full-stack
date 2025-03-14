import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RemoveSocialNetworkProps } from "./types";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Trash } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useUserInfo } from "@/hooks/useUser";

export function RemoveSocialNetwork({
  link,
  onReload,
}: RemoveSocialNetworkProps) {
  const [showDialog, setShowDialog] = useState(false);

  const { reloadUser } = useUserInfo();

  const onRemoveSocialNetwork = async (linkId: string) => {
    const response = await axios.delete("/api/delete-link", {
      data: {
        linkId,
      },
    });

    if (response.status === 200) {
      toast("Deleted Successfully!", {
        description: "The resource has been successfully deleted.",
      });
    }
    setShowDialog(false);
    onReload((prevState) => !prevState);
    reloadUser();
  };
  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Trash className="text-red-600" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Removal</DialogTitle>
          <DialogDescription>
            Are you sure you want to remove this link? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowDialog(false)}>
            Cancel
          </Button>
          <Button onClick={() => onRemoveSocialNetwork(link.id)}>Remove</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
