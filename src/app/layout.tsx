import { PageLayout } from "./client";
import "./global.css";
import "react-circular-progressbar/dist/styles.css";
import "flag-icons/css/flag-icons.min.css";

export const metadata = {
  title: "EnReach User Dashboard",
  description: "EnReach User Dashboard",
};

import { Albert_Sans, Alexandria } from "next/font/google";
import { cn } from "@nextui-org/react";
import ContextProvider from "@/config/context";
const albertSans = Albert_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal',],
  variable: '--font-albert-sans',
});

const alexandria = Alexandria({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-alexandria',
});

const fonts = [albertSans, alexandria]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookies = null
  return (
    <html lang="en" className={cn("dark", fonts.map(item => item.variable).join(" "), "font-AlbertSans")}>
      <body>
        <ContextProvider cookies={cookies}>
          <PageLayout>{children}</PageLayout>
        </ContextProvider>
      </body>

    </html>
  );
}
