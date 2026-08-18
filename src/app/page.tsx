import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { legal } from "@/lib/legal";

const projects = [
    {
        title: "MUI Utility",
        description:
            "Utility-Komponenten für MUI-Projekte: ActionButton, Notifications, OTP-Input, Passwortfeld u. v. m. Als npm-Paket veröffentlicht.",
        tech: ["React", "TypeScript", "MUI"],
        code: "https://github.com/Robin1053/Mui-Utility",
    },
    {
        title: "VISCA Bridge",
        description: "VISCA-Bridge: Python-Backend zur Steuerung von PTZ-Kameras über TCP/RS-232, mit automatischem Reconnect und systemd-Deployment auf Raspberry Pi",
        tech: ["Python", "Serielle Kommunikation", "VISCA"],
        code: "https://github.com/Robin1053/visca-bridge",
    },
    {
        title: "Portfolio & Homepage",
        description:
            "Diese Website, gebaut mit Next.js (App Router), MUI und TypeScript. Mit Dark Mode, CI/CD-Deployment und Versionierung im Footer.",
        tech: ["Next.js", "MUI", "TypeScript"],
        code: "https://github.com/Robin1053/Portfolio-Homepage",
    },

] as const;

const skillGroups = [
    { label: "Sprachen", items: ["C", "C++", "Python"] },
    { label: "Hardware & Steuerung", items: ["Steuerungsprogrammierung", "Elektronik"] },
    { label: "Werkzeuge", items: ["Git", "CI/CD"] },
] as const;

// Echtes C-Idiom (volatile-Flag aus der ISR, Superloop mit WFI) als
// Hero-Visual. Zeilen mit dim: true werden als Kommentar abgesetzt.
const heroCode: ReadonlyArray<{ text: string; dim?: boolean }> = [
    { text: "/* main.c */", dim: true },
    { text: "static volatile bool btn_event;" },
    { text: "" },
    { text: "void gpio_isr(void) {" },
    { text: "    btn_event = true;" },
    { text: "}" },
    { text: "" },
    { text: "int main(void) {" },
    { text: "    clock_init();" },
    { text: "    gpio_init();" },
    { text: "" },
    { text: "    for (;;) {" },
    { text: "        if (btn_event) {" },
    { text: "            btn_event = false;" },
    { text: "            led_toggle();" },
    { text: "        }" },
    { text: "        wfi(); /* schlafen bis Interrupt */" },
    { text: "    }" },
    { text: "}" },
];

const monoFont = "var(--font-roboto-mono), ui-monospace, monospace";

export default function Home() {
    return (
        <>
            {/* Hero: asymmetrischer Split, links Text, rechts Code-Panel */}
            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
                <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: "center" }}>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Stack spacing={3}>
                            <Typography
                                variant="overline"
                                color="primary"
                                sx={{ fontFamily: monoFont, letterSpacing: "0.14em" }}
                            >
                                Embedded Software
                            </Typography>
                            <Typography variant="h2" component="h1">
                                Hi, ich bin Robin.{" "}
                                <Box
                                    component="span"
                                    sx={{
                                        color: "primary.main",
                                        fontFamily: "var(--font-accent), cursive",
                                    }}
                                >
                                    Ich bringe Code auf Hardware.
                                </Box>
                            </Typography>
                            <Typography variant="h6" component="p" color="text.secondary">
                                Firmware und Steuerungssoftware in C und C++, von der
                                Schaltung bis zum getesteten Release.
                            </Typography>
                            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                                <Button variant="contained" size="large" href="#projekte">
                                    Projekte ansehen
                                </Button>
                                <Button variant="outlined" size="large" href="#kontakt">
                                    Kontakt aufnehmen
                                </Button>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Paper
                            variant="outlined"
                            sx={{
                                p: 3,
                                borderRadius: "12px",
                                overflowX: "auto",
                                bgcolor: "background.paper",
                            }}
                        >
                            <Box
                                component="pre"
                                sx={{
                                    m: 0,
                                    fontFamily: monoFont,
                                    fontSize: "0.8125rem",
                                    lineHeight: 1.7,
                                }}
                            >
                                {heroCode.map((line, i) => (
                                    <Box
                                        key={i}
                                        component="span"
                                        sx={{
                                            display: "block",
                                            color: line.dim
                                                ? "text.disabled"
                                                : "text.secondary",
                                        }}
                                    >
                                        {line.text || " "}
                                    </Box>
                                ))}
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            {/* Projekte: asymmetrisches Raster statt gleicher Karten */}
            <Container maxWidth="lg" id="projekte" sx={{ py: { xs: 6, md: 10 } }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Projekte
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 4, maxWidth: "65ch" }}>
                    Eine Auswahl an Dingen, an denen ich gearbeitet habe.
                </Typography>
                <Grid container spacing={3}>
                    {projects.map((project, index) => (
                        <Grid
                            key={project.title}
                            size={{ xs: 12, md: index === 0 ? 7 : 5 }}
                        >
                            <Card
                                variant="outlined"
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    transition: "border-color 0.2s, transform 0.2s",
                                    "&:hover": {
                                        borderColor: "primary.main",
                                        transform: "translateY(-4px)",
                                    },
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" component="h3" gutterBottom>
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 2 }}
                                    >
                                        {project.description}
                                    </Typography>
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        useFlexGap
                                        sx={{ flexWrap: "wrap" }}
                                    >
                                        {project.tech.map((tech) => (
                                            <Chip
                                                key={tech}
                                                label={tech}
                                                size="small"
                                                sx={{ fontFamily: monoFont }}
                                            />
                                        ))}
                                    </Stack>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="small"
                                        startIcon={<GitHubIcon />}
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Code
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                    <Grid size={{ xs: 12 }}>
                        {/* Platzhalter-Slot: nächstes (Embedded-)Projekt in
                            src/app/page.tsx bei `projects` ergänzen. */}
                        <Box
                            sx={{
                                border: "1px dashed",
                                borderColor: "divider",
                                borderRadius: "12px",
                                px: 3,
                                py: 2.5,
                            }}
                        >
                            <Typography variant="body2" color="text.secondary">
                                Das nächste Projekt bekommt hier seinen Platz. Aktuell in
                                Arbeit: mehr Embedded.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Über mich / Skills */}
            <Container maxWidth="lg" id="ueber-mich" sx={{ py: { xs: 6, md: 10 } }}>
                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h4" component="h2" gutterBottom>
                            Über mich
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 2 }}>
                            Mich interessiert die Stelle, an der Software auf Hardware
                            trifft: Steuerungen programmieren, Schaltungen verstehen und
                            Firmware schreiben, die zuverlässig läuft.
                        </Typography>
                        <Typography color="text.secondary">
                            Sauberes Handwerk gehört für mich auch bei Embedded-Projekten
                            dazu: Versionskontrolle mit Git, automatisierte Builds und
                            reproduzierbare Releases über CI/CD.
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h4" component="h2" gutterBottom>
                            Skills
                        </Typography>
                        <Stack spacing={2.5}>
                            {skillGroups.map((group) => (
                                <Box key={group.label}>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 1 }}
                                    >
                                        {group.label}
                                    </Typography>
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        useFlexGap
                                        sx={{ flexWrap: "wrap" }}
                                    >
                                        {group.items.map((skill) => (
                                            <Chip
                                                key={skill}
                                                label={skill}
                                                variant="outlined"
                                                sx={{ fontFamily: monoFont }}
                                            />
                                        ))}
                                    </Stack>
                                </Box>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

            {/* Kontakt */}
            <Container maxWidth="md" id="kontakt" sx={{ py: { xs: 6, md: 10 } }}>
                <Card
                    variant="outlined"
                    sx={{ textAlign: "center", px: { xs: 3, md: 8 }, py: { xs: 5, md: 7 } }}
                >
                    <Typography variant="h4" component="h2" gutterBottom>
                        Lass uns reden
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 4 }}>
                        Ob Projekt, Frage oder Feedback: Schreib mir gerne.
                    </Typography>
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        sx={{ justifyContent: "center" }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<MailOutlinedIcon />}
                            href={`mailto:robin.eberle@robineb.de`}
                        >
                            E-Mail schreiben
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            startIcon={<GitHubIcon />}
                            href="https://github.com/Robin1053"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </Button>
                    </Stack>
                </Card>
            </Container>
        </>
    );
}
