import Navbar from "@/components/layout/header";

import { ReactNode } from "react";

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
