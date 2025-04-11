import { Roboto, Outfit } from "next/font/google";

export const font_body = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-body",
});

export const font_display = Outfit({
  weight: ["400", "700", "900"],
  style: ["normal"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-display",
});
