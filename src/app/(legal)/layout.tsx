import Container from "@mui/material/Container";

// Gemeinsames Layout für Impressum und Datenschutzerklärung.
// Die Seiten nutzen semantisches HTML (h1–h4, p, ul); hier bekommen die
// Elemente ihr Styling, da der Tailwind-Preflight sie zurücksetzt.
export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Container
            maxWidth="md"
            sx={{
                py: { xs: 6, md: 10 },
                "& h1": { typography: "h3", mb: 4 },
                "& h2": { typography: "h5", mt: 5, mb: 2 },
                "& h3": { typography: "h6", mt: 4, mb: 1.5 },
                "& h4": {
                    typography: "subtitle1",
                    fontWeight: 600,
                    mt: 3,
                    mb: 1,
                },
                "& p, & li": {
                    typography: "body1",
                    color: "text.secondary",
                    lineHeight: 1.75,
                    mb: 2,
                },
                "& ul": { pl: 3, listStyle: "disc" },
                "& a": { color: "primary.main" },
            }}
        >
            {children}
        </Container>
    );
}
