import { Cormorant_Garamond, Mulish } from "next/font/google";

export const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const mulish = Mulish({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});
