import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  noPadding?: boolean;
  noPaddingX?: boolean;
  noPaddingY?: boolean;
  noMargin?: boolean;
  as?: "section" | "div" | "main" | "article";
}

/**
 * Global professional layout container
 * Optimized for ultra-wide screens (1440px–2560px+)
 */
export default function SectionContainer({
  children,
  className = "",
  size = "xl",
  noPadding = false,
  noPaddingX = false,
  noPaddingY = false,
  noMargin = false,
  as: Component = "section",
}: SectionContainerProps) {
  const maxWidths = {
    sm: "max-w-screen-sm",     // 640
    md: "max-w-screen-md",     // 768
    lg: "max-w-screen-lg",     // 1024
    xl: "max-w-7xl",           // 1280 (desktop standard)
    "2xl": "max-w-screen-2xl", // 1536 (ultra-wide)
    full: "max-w-full",
  };

  /**
   * Horizontal padding
   * - Mobile: 16px (px-4)
   * - Tablet: 24px (px-6)
   * - Desktop: 32px (px-8)
   * - Ultra-wide (xl+): 0px - max-width centering provides natural spacing
   */
  const paddingX =
    noPadding || noPaddingX
      ? ""
      : "px-4 sm:px-6 md:px-8 xl:px-0";

  /**
   * Vertical rhythm (section spacing)
   * Safe across all breakpoints
   */
  const paddingY =
    noPadding || noPaddingY
      ? ""
      : "py-16 sm:py-20 lg:py-24";

  const margin = noMargin ? "" : "mx-auto";

  const containerClasses = [
    "w-full",
    maxWidths[size],
    margin,
    paddingX,
    paddingY,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Component className={containerClasses}>{children}</Component>;
}
