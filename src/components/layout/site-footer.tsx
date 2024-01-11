import Link from "next/link";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-muted bg-background">
      <div className="container flex flex-row justify-between py-4">
        <div className="break-normal text-base text-muted-foreground">
          Made by{" "}
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="underline text-primary underline-offset-[5px]"
          >
            Noel Rohi
          </Link>
        </div>
        <div className="flex space-x-1">
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </footer>
  );
}
