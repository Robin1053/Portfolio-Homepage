"use client";

import { createTheme } from "@mui/material/styles";

// CSS-Variablen-Theme mit Light- und Dark-Scheme.
// Der Modus wird über das Attribut data-mui-color-scheme am <html> umgeschaltet
// (siehe InitColorSchemeScript im Root-Layout und den Toggle im Header).
const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: "data",
    },
    colorSchemes: {
        light: {
            palette: {
                primary: { main: "#047857" },
                secondary: { main: "#b45309" },
                background: {
                    default: "#fafafa",
                    paper: "#ffffff",
                },
            },
        },
        dark: {
            palette: {
                primary: { main: "#34d399" },
                secondary: { main: "#fbbf24" },
                background: {
                    default: "#0a0a0a",
                    paper: "#121212",
                },
            },
        },
    },
    // Radius-System: Buttons/Chips 8, Cards 12 (siehe components unten).
    shape: {
        borderRadius: 8,
    },
    typography: {
        fontFamily: "var(--font-roboto), system-ui, sans-serif",
        h1: { fontWeight: 700, letterSpacing: "-0.02em" },
        h2: { fontWeight: 700, letterSpacing: "-0.02em" },
        h3: { fontWeight: 700, letterSpacing: "-0.01em" },
        h4: { fontWeight: 600 },
        h5: { fontWeight: 600 },
        h6: { fontWeight: 600 },
        button: { textTransform: "none", fontWeight: 600 },
    },
    components: {
        MuiLink: {
            defaultProps: { underline: "hover" },
        },
        MuiButton: {
            styleOverrides: {
                root: { borderRadius: 8 },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: { borderRadius: 12 },
            },
        },
    },
});

export default theme;
