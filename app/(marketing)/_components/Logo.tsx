import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

export const Logo = () => {
  return (
    <div className="flex items-center w-full p-6 pg-background z-50"></div>
    <Image/>
  );
};
