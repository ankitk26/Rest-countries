import Header from "@/components/Header";
import CountryProvider from "@/provider/CountryProvider";
import "@/styles/global.css";
import { Nunito_Sans } from "next/font/google";

const font = Nunito_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html className={font.className}>
      <body>
        <Header />
        <CountryProvider>{children}</CountryProvider>
      </body>
    </html>
  );
}
