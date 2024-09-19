import { PageLayout } from "@/components/page-layout";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NextPage } from "next";

// TODO: Fix 404 page causing entire layout to re-render

const Custom404: NextPage = () => {
  return (
    <PageLayout
      title="Page Not Found"
      description="This page could not be found"
      justify="center"
    >
      <div className="flex flex-col justify-center items-center gap-8 text-center">
        <Typography variant="h1">404 - Page Not Found</Typography>
        <Typography variant="paragraph">
          Oops! The page you are looking for does not exist or has been moved.
        </Typography>
        <Link href="/" passHref>
          <Button className="gap-2">Go Back to Homepage</Button>
        </Link>
      </div>
    </PageLayout>
  );
};

export default Custom404;
