import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ButtonAbout() {
  return (
    <Button>
      <Link href="/about">About</Link>
    </Button>
  );
}
