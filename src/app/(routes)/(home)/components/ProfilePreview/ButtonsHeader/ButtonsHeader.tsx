import { Megaphone, Share } from "lucide-react";

export function ButtonsHeader() {
  return (
    <ul className="flex justify-end gap-3 self-end ">
      <li className="border border-white bg-white/40 rounded-full p-2 shadow-md hover:bg-transparent cursor-pointer transition-all duration-300">
        <Megaphone strokeWidth={1} />
      </li>
      <li className="flex items-center gap-2 border bg-white/40 border-white rounded-full p-2 shadow-md hover:bg-transparent cursor-pointer transition-all duration-300">
        <Share strokeWidth={1} />
        Share
      </li>
    </ul>
  );
}
