import { Lock } from "lucide-react";
import { FontPreview } from "./FontPreview";
export function ProfilePreview() {
  return (
    <div className="flex flex-col gap-4 h-full w-full items-center text-center">
      <div className="flex items-center gap-1"></div>
      <FontPreview />
      <p className="text-sm font-semibold">Profile preview</p>
    </div>
  );
}
