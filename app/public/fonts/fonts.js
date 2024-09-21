// import localFont from "next/font/local";
import {
  Figtree,
  Roboto,
  Noto_Kufi_Arabic,
  Noto_Sans_Hebrew,
  Noto_Sans_JP,
  Poppins,
} from "next/font/google";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const noto_sans_jp = Noto_Sans_JP({ subsets: ["latin"] });
export const noto_kufi_arabic = Noto_Kufi_Arabic({ subsets: ["latin"] });
export const noto_sans_hebrew = Noto_Sans_Hebrew({ subsets: ["latin"] });
export const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });
export const figtree = Figtree({ subsets: ["latin"] });
export const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});
