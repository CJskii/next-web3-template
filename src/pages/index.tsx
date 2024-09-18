import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { NextPage } from "next/types";
import React from "react";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const HomePage: NextPage = () => {
  return (
    <PageLayout title="Homepage" description="Welcome to next-web-template">
      <Typography variant="h1">Welcome to next-web3-template</Typography>
      <Typography variant="h2">
        A template for building web3 native applications
      </Typography>
      <div className="flex justify-center items-center gap-12 my-4">
        <GitHubLogoIcon className="w-12 h-12 inline-block" />
      </div>

      {/* TODO: Add button to view repo on github + star repo + fork repo */}
      <Link
        href="https://github.com/new?template_name=next-web3-template&template_owner=CJskii"
        target="_blank"
      >
        <Button>Get Started</Button>
      </Link>
    </PageLayout>
  );
};

export default HomePage;
