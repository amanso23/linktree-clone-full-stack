import { ChevronRight, ImageUp, Trash2 } from "lucide-react";
import { TabSelectorProps } from "./types";
import { useUserInfo } from "@/hooks/useUser";

export function TabSelector({ setShowTab }: TabSelectorProps) {
  const { user } = useUserInfo();

  return (
    <ul className="flex flex-col gap-4 items-center cursor-pointer text-black">
      <li
        className="flex justify-between items-center gap-4 rounded-lg p-2 w-full h-fit hover:bg-gray-100"
        onClick={() => setShowTab("upload")}
      >
        <div className="flex items-center gap-4">
          <ImageUp className="opacity-70 text-violet-600" strokeWidth={1} />
          <div className="flex flex-col">
            <h2 className="block font-semibold">Upload your own</h2>
            <h4 className="text-xs opacity-70">
              Choose an image from your divide
            </h4>
          </div>
        </div>
        <ChevronRight className="h-4 w-4" />
      </li>

      {user?.avatarUrl && (
        <li
          className="flex justify-between items-center gap-4 rounded-lg p-2 w-full h-fit hover:bg-gray-100"
          onClick={() => setShowTab("delete")}
        >
          <div className="flex items-center gap-4">
            <Trash2 className="opacity-70 text-red-500" strokeWidth={1} />
            <div className="flex flex-col">
              <h2 className="block font-semibold">Delete</h2>
              <h4 className="text-xs opacity-70">Delete current image</h4>
            </div>
          </div>
          <ChevronRight className="h-4 w-4" />
        </li>
      )}
    </ul>
  );
}
