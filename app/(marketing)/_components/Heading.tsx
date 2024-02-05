// server 컴포넌트가 아닌, client 컴포넌트
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
// import { ArrowRight } from "@/node_modules/lucide-react/dist/lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents and Plans.
        <br />
        Welcome to <span className="underline">Notion</span>{" "}
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notion is the connected workspace <br />
        where better, faster work happens.
      </h3>
      <Button>
        Enter Notion
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
