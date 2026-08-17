import type { Metadata } from "next";
import { Baloo_2, Roboto, Roboto_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import theme from "@/theme";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

// Akzent-Font für einzelne Display-Elemente (Logo, Hero-Highlight).
const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-accent",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://robineb.de"),
  title: {
    default: "Robineb · Portfolio",
    template: "%s · Robineb",
  },
  description:
    "Portfolio von Robin: Embedded-Softwareentwicklung mit C, C++ und Steuerungstechnik, von der Schaltung bis zur Firmware.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: InitColorSchemeScript setzt das
    // data-mui-color-scheme-Attribut vor der Hydration.
    <html
      lang="de"
      className={`${roboto.variable} ${robotoMono.variable} ${baloo.variable}`}
      suppressHydrationWarning
    >
      <body>
        <InitColorSchemeScript attribute="data" />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Box
              sx={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}
            >
              <SiteHeader />
              <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
              </Box>
              <SiteFooter />
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
