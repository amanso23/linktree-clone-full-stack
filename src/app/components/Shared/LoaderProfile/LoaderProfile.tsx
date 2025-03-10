import { LoaderCircle } from "lucide-react";

export function LoaderProfile() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <LoaderCircle className="w-auto h-10 animate-spin" />
      <p>Loading linktree</p>
    </div>
  );
}
