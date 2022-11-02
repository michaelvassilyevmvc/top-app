import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: "s" | "m" | "l";
  color?: "ghost" | "red" | "green" | "grey" | "primary";
  href?: string;
}
