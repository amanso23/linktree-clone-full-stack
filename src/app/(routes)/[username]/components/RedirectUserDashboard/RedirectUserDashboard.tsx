import { Button } from "@/components/ui/button";
import Link from "next/link";

export function RedirectUserDashboard() {
  return (
    <Link href={`/`} className="absolute top-0 right-0 m-4">
      <Button variant={"outline"}>Dashboard</Button>
    </Link>
  );
}
