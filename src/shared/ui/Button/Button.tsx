import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonProps =
  | (SharedProps & { href: string } & Omit<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        "className" | "href"
      >)
  | (SharedProps & { href?: undefined } & Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        "className"
      >);

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...rest
}: ButtonProps) {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {variant === "primary" && (
        <>
          <div className={styles.blob1} aria-hidden="true" />
          <div className={styles.blob2} aria-hidden="true" />
        </>
      )}
      <div className={styles.inner}>{children}</div>
    </>
  );

  if (rest.href !== undefined) {
    const { href, ...anchorRest } = rest as { href: string } &
      Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {content}
    </button>
  );
}
