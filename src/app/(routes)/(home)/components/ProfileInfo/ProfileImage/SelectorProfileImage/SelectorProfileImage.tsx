import { useState } from "react";
import { SelectorProfileImageProps } from "./types";
import { TabSelector } from "./TabSelector";
import { TabUpload } from "./TabUpload";
import { TabDelete } from "./TabDelete";

export function SelectorProfileImage({
  setShowDialog,
}: SelectorProfileImageProps) {
  const [showTab, setShowTab] = useState<"upload" | "delete" | null>(null);

  return (
    <div className="mt-2">
      {!showTab && <TabSelector setShowTab={setShowTab} />}
      {showTab === "upload" && (
        <TabUpload setShowDialog={setShowDialog} setShowTab={setShowTab} />
      )}
      {showTab === "delete" && (
        <TabDelete setShowDialog={setShowDialog} setShowTab={setShowTab} />
      )}
    </div>
  );
}
