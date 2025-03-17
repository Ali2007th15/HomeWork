import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center gap-5">
      <Image
        alt="not-found picture"
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        width={500}
        height={500}
      />
      <Link href="/">
        <Button variant="outline">To main page</Button>
      </Link>
    </div>
  );
}
