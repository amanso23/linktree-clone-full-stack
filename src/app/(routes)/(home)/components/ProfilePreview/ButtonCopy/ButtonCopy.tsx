"use client";

import { Button } from "@/components/ui/button";
import { useUserInfo } from "@/hooks/useUser";
import { Copy } from "lucide-react";
import { useState } from "react";

export function ButtonCopy() {
  const [isCopy, setIsCopy] = useState(false);
  const { user } = useUserInfo();

  if (!user) return null;

  const copyToClipboard = async () => {
    const url = `${window.location.origin}/${user.username}`;
    await navigator.clipboard
      .writeText(url)
      .then(() => {
        setIsCopy(true);
      })
      .catch((error) => {
        console.error(error);
      });
    setTimeout(() => {
      setIsCopy(false);
    }, 2000);
  };

  return (
    <div>
      <div className="border border-white px-2 py-2 rounded-full flex justify-center gap-3 items-center cursor-pointer min-w-96">
        <span>
          {window.location.origin}/
          <span className="font-bold">{user.username}</span>
        </span>
        <Button
          onClick={copyToClipboard}
          className=" transition-all duration-300 "
        >
          {isCopy ? "Copied" : "Copy"}
        </Button>
      </div>
    </div>
  );
}
