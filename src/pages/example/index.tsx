import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { ConnectWalletButton } from "@/components/ui/connect-button";
import { ThemeToggler } from "@/components/ui/theme-toggler";
import { Typography } from "@/components/ui/typography";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { NextPage } from "next";

interface Props {}

/**
 * This is an example page
 * - It shows how to use the Typography component
 * - It shows how to use the Button component
 * - It shows how to use the PageLayout component
 */

const ExamplePage: NextPage<Props> = ({}) => {
  return (
    <PageLayout
      title="Example Page"
      description="This is an example page"
      flexDirection="row"
      justify="evenly"
      align="start"
      gap={12}
    >
      <div className="flex flex-col gap-4">
        <Typography variant="h1">Example h1 header</Typography>
        <Typography variant="h2">Example h2 header</Typography>
        <Typography variant="h3">Example h3 header</Typography>
        <Typography variant="h4">Example h4 header</Typography>

        <Typography variant={"paragraph"}>Example paragraph text</Typography>
        <Typography variant={"small"}>Example small text</Typography>
        <Typography variant={"extraSmall"}>Example extra small text</Typography>
        <Typography variant={"muted"}>Example muted text</Typography>
        <Typography variant={"lead"}>Example lead text</Typography>
        <Typography variant={"large"}>Example large text</Typography>
        <Typography variant={"blockquote"}>Example blockquote text</Typography>
        <Typography variant={"list"}>
          <li>Example list item 1</li>
          <li>Example list item 2</li>
          <li>Example list item 3</li>
        </Typography>
        <Typography variant={"inlineCode"}>Example inline code</Typography>
      </div>

      <div className="flex flex-col gap-8 justify-center items-center">
        <Typography variant="h1">Button Examples</Typography>
        <ThemeToggler />
        <Button>Default Button</Button>
        <Button variant="destructive">Destructive Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Button variant="link">Link Button</Button>
        <ConnectButton />
        <ConnectWalletButton />
      </div>
    </PageLayout>
  );
};

export default ExamplePage;
