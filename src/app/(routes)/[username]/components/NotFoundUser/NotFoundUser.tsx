import { Button } from "@/components/ui/button";
import { TreePalm } from "lucide-react";
import Link from "next/link";

export function NotFoundUser() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-8 text-gray-900">
      <TreePalm className="w-60 h-auto text-green-400" />
      <h1 className="text-7xl font-extrabold text-center drop-shadow-lg">
        Oops! Page not found
      </h1>

      <p className="text-xl text-center max-w-lg mx-auto">
        Looks like the page you are looking for not exist. Want this to be your
        username?
      </p>

      <Link href={"/"}>
        <Button
          variant="outline"
          className="text-lg px-6 py-6  bg-gray-900 border-gray-900 text-white hover:bg-gray-white hover:text-black hover:bg-transparent transition duration-300 ease-in-out"
        >
          Create your profile
        </Button>
      </Link>
    </div>
  );
}
