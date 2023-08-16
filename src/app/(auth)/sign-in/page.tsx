import Link from "next/link";
import { FC } from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";
import SignIn from "@/app/(auth)/sign-in/SignIn";

// url = /sign-in, (auth) folder is only for organizational purposes
const Page: FC = () => {
  return (
    <div className="absolute inset-0">
      <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "self-start -mt-20"
          )}
        >
          Home
        </Link>

        <SignIn />
      </div>
    </div>
  );
};

export default Page;
