"use client";

import { Button } from "@/components/ui/button";
import { useUserInfo } from "@/hooks/useUser";
import Link from "next/link";
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
    const currentUrl = `${origin}/${user.username}`;
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
  };

  return (
    <div className="bg-indigo-100 rounded-3xl border border-violet-600">
      <div className="flex flex-wrap flex-col justify-center text-center py-2 px-4 items-center gap-2 md:flex-row md:justify-start ">
        <h2>✨ Your Linktree clone is live:</h2>
        <Link
          href={origin && `${origin}/${user.username}`}
          className="link font-bold text-violet-600 transition-all duration-200 hover:underline"
        >
          {origin ? `${origin}/${user.username}` : "Loading..."}
        </Link>
        <Button
          variant={"outline"}
          className="text-xs "
          onClick={copyToClipboard}
        >
          {copied ? "Copied!" : "Copy"}
        </Button>

        <a href=""></a>
      </div>
    </div>
  );
}
