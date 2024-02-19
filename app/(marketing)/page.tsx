// routing
// http://localhost:3000/test

import { Button } from "@/components/ui/button";
import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";

// 라우팅 안되게 하고 싶으면, _ 붙이면 됨
// _ : 안에 폴더 전부 라우팅 안됨 (라우팅 X, 컴포넌트로 사용 O)
// () : () 붙인 폴더만 라우팅 안됨

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
