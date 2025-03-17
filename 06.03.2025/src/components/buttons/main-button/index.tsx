import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MainButton() {
  return (
    <Button>
      <Link href="/" >Main page</Link>
    </Button>
  );
}
