"use client";

import { useState } from "react";
import { Copy, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  url: string;
  className?: string;
};

export function ShareButtons({ title, url, className }: Props) {
  const [copied, setCopied] = useState(false);

  const shareText = encodeURIComponent(`${title}`);
  const shareUrl = encodeURIComponent(url);
  const xLink = `https://x.com/intent/tweet?text=${shareText}&url=${shareUrl}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  };

  return (
    <div className={cn("flex gap-2", className)}>
      <Button asChild variant="subtle" size="sm" className="gap-2">
        <a href={xLink} target="_blank" rel="noreferrer">
          <Share2 className="h-4 w-4" />
          Share on X
        </a>
      </Button>
      <Button variant="subtle" size="sm" className="gap-2" onClick={handleCopy}>
        <Copy className="h-4 w-4" />
        {copied ? "Copied" : "Copy link"}
      </Button>
    </div>
  );
}


