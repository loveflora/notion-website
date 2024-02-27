import { Nav } from "./_components/nav";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Nav />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default MarketingLayout;
