"use client";

import { Button } from "@/components/ui/button";
import { useUserInfo } from "@/hooks/useUser";
import { useEffect, useState } from "react";

export function Profile() {
  const [copied, setCopied] = useState(false);
  const [origin, setOrigin] = useState("");

  const { user } = useUserInfo();

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  if (!user) return null;

  const copyToClipboard = () => {
    const link = document.querySelector(".link");
    if (!link) return;
    navigator.clipboard.writeText(link.innerHTML);
    setCopied(true);
  };

  return (
    <div className="bg-indigo-100 rounded-3xl">
      <div className="flex flex-wrap flex-col justify-center text-center py-2 px-4 items-center gap-2 md:flex-row md:justify-start ">
        <h2>✨ Your Linktree clone is live:</h2>
        <span className="link">
          {origin ? `${origin}/${user.username}` : "Loading..."}
        </span>
        <Button
          variant={"outline"}
          className="text-xs rounded-full"
          onClick={copyToClipboard}
        >
          {copied ? "Copied!" : "Copy your linktree URL"}
        </Button>
      </div>
    </div>
  );
}
