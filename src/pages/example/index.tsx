import { PageLayout } from "@/components/page-layout";
import { Typography } from "@/components/ui/typography";
import { NextPage } from "next";

interface Props {}

/**
 * This is an example page
 * - It shows how to use the Typography component
 * - It shows how to use the PageLayout component
 * - It shows how to use the NextPage type
 * - It shows how to use the Props interface
 */

const ExamplePage: NextPage<Props> = ({}) => {
  return (
    <PageLayout title="Example Page" description="This is an example page">
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
    </PageLayout>
  );
};

export default ExamplePage;
