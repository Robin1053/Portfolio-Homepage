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
        title: "Portfolio & Homepage",
        description:
            "Diese Website — gebaut mit Next.js (App Router), MUI und TypeScript. Mit Dark Mode, CI/CD-Deployment und Versionierung im Footer.",
        tech: ["Next.js", "MUI", "TypeScript"],
        code: "https://github.com/Robin1053/Portfolio-Homepage",
    },
    {
        title: "Nächstes Projekt",
        description:
            "Platzhalter für das nächste Projekt — Beschreibung, Tech-Stack und Links einfach hier in src/app/page.tsx ergänzen.",
        tech: ["Demnächst"],
        code: null,
    },
] as const;

const skills = [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "MUI",
    "Node.js",
    "Tailwind CSS",
    "Git",
    "CI/CD",
];

export default function Home() {
    return (
        <>
            {/* Hero */}
            <Container maxWidth="lg" sx={{ py: { xs: 10, md: 16 } }}>
                <Stack spacing={3} sx={{ maxWidth: 720 }}>
                    <Typography variant="overline" color="primary">
                        Willkommen auf robineb.de
                    </Typography>
                    <Typography variant="h2" component="h1">
                        Hi, ich bin Robin.{" "}
                        <Box
                            component="span"
                            sx={{
                                // CSS-Variablen statt sx-Callback: Diese Seite ist eine
                                // Server Component, Funktions-Props sind hier nicht erlaubt.
                                background:
                                    "linear-gradient(90deg, var(--mui-palette-primary-main), var(--mui-palette-secondary-main))",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            Ich baue moderne Web-Apps.
                        </Box>
                    </Typography>
                    <Typography variant="h6" component="p" color="text.secondary">
                        Webentwicklung mit React, Next.js und TypeScript — von der Idee
                        bis zum Deployment.
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
            </Container>

            {/* Projekte */}
            <Container maxWidth="lg" id="projekte" sx={{ py: { xs: 6, md: 10 } }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Projekte
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 4 }}>
                    Eine Auswahl an Dingen, an denen ich gearbeitet habe.
                </Typography>
                <Grid container spacing={3}>
                    {projects.map((project) => (
                        <Grid key={project.title} size={{ xs: 12, sm: 6, md: 4 }}>
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
                                            <Chip key={tech} label={tech} size="small" />
                                        ))}
                                    </Stack>
                                </CardContent>
                                {project.code && (
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
                                )}
                            </Card>
                        </Grid>
                    ))}
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
                            Kurzer Platzhaltertext: Wer ich bin, was mich an Software
                            begeistert und woran ich gerade arbeite. Diesen Abschnitt in{" "}
                            <code>src/app/page.tsx</code> mit eigenem Inhalt füllen.
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h4" component="h2" gutterBottom>
                            Skills
                        </Typography>
                        <Stack
                            direction="row"
                            spacing={1}
                            useFlexGap
                            sx={{ flexWrap: "wrap" }}
                        >
                            {skills.map((skill) => (
                                <Chip key={skill} label={skill} variant="outlined" />
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
                        Ob Projekt, Frage oder Feedback — schreib mir gerne.
                    </Typography>
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        sx={{ justifyContent: "center" }}
                    >
                        {legal.email && (
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<MailOutlinedIcon />}
                                href={`mailto:${legal.email}`}
                            >
                                E-Mail schreiben
                            </Button>
                        )}
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
