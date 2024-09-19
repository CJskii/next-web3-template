import Link from "next/link";
import {
  GitHubIcon,
  TelegramIcon,
  DiscordIcon,
  XIcon,
} from "@/assets/icons/social";
import { Typography } from "./ui/typography";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

interface FooterData {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

const footerLinks: FooterData[] = [
  {
    label: "Terms of Service",
    href: "/terms",
  },
  {
    label: "Cookie Policy",
    href: "/cookie",
  },
  {
    label: "Legal Notice",
    href: "/legal",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const socialLinks: FooterData[] = [
  {
    label: "GitHub",
    href: "https://github.com/your-profile",
    icon: <GitHubIcon />,
  },
  {
    label: "Telegram",
    href: "https://t.me/your-telegram",
    icon: <TelegramIcon />,
  },
  {
    label: "Discord",
    href: "https://discord.com/invite/your-invite",
    icon: <DiscordIcon />,
  },
  {
    label: "Twitter/X",
    href: "https://twitter.com/your-profile",
    icon: <XIcon />,
  },
];

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent />
    </FooterContainer>
  );
};

const FooterContent: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 w-full p-4">
      {/* Company Info */}
      <div className="flex flex-col justify-center items-center text-muted-foreground">
        <p>© 2024 CJski</p>
        <Link href="/example">
          <Typography variant={"extraSmall"}>View Examples</Typography>
        </Link>
      </div>

      {/* Footer Links (Terms, Cookie Policy, etc.) */}
      <div className="flex flex-col lg:flex-row gap-4">
        {footerLinks.map((link, index) => (
          <FooterLink key={index} href={link.href}>
            {link.label}
          </FooterLink>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex flex-row gap-4">
        {socialLinks.map((social, index) => (
          <FooterIconLink key={index} href={social.href} label={social.label}>
            {social.icon}
          </FooterIconLink>
        ))}
      </div>
    </div>
  );
};

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground hover:text-muted-foreground/60 transition"
    >
      {children}
    </Link>
  );
};

const FooterIconLink: React.FC<{
  href: string;
  label: string;
  children: React.ReactNode;
}> = ({ href, label, children }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-gray-500 hover:text-gray-900 transition"
    >
      {children}
    </Link>
  );
};

const FooterContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <footer className="bg-white/50 dark:bg-black/50 rounded-t-xl px-6 pb-10 pt-20 md:p-16 md:py-16 flex flex-col lg:flex-row items-start justify-between gap-4">
      {children}
    </footer>
  );
};
