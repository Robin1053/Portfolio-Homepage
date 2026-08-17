import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import theme from "@/theme";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
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
      className={`${geist.variable} ${geistMono.variable}`}
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
