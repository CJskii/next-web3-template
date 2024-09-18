import { ConnectButton } from "@rainbow-me/rainbowkit";
import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { NextPage } from "next/types";
import { ThemeToggler } from "@/components/ui/theme-toggler";

const HomePage: NextPage = () => {
  return (
    <PageLayout title="Homepage" description="Welcome to next-web-template">
      <ConnectButton />
      <Button>Click me</Button>
      <ThemeToggler />
    </PageLayout>
  );
};

export default HomePage;
