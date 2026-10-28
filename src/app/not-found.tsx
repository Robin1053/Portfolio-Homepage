import type { Metadata } from "next";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
};

const monoFont = "var(--font-roboto-mono), ui-monospace, monospace";

export default function NotFound() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        py: { xs: 10, md: 16 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack spacing={3} sx={{ alignItems: "center", textAlign: "center" }}>
        <Typography
          variant="overline"
          color="primary"
          sx={{ fontFamily: monoFont, letterSpacing: "0.14em" }}
        >
          Fehler 404
        </Typography>
        <Typography
          component="p"
          aria-hidden
          sx={{
            fontFamily: "var(--font-accent), cursive",
            fontWeight: 700,
            fontSize: { xs: "6rem", md: "9rem" },
            lineHeight: 1,
            color: "primary.main",
          }}
        >
          404
        </Typography>
        <Typography variant="h4" component="h1">
          Ich weiß nicht, was du hier willst, ich habe nur eine Seite.
        </Typography>

        {/* Kleiner Embedded-Gag passend zum Code-Panel auf der Startseite */}
        <Paper
          variant="outlined"
          sx={{ px: 3, py: 2, borderRadius: "12px", bgcolor: "background.paper" }}
        >
          <Box
            component="pre"
            sx={{
              m: 0,
              fontFamily: monoFont,
              fontSize: "0.8125rem",
              lineHeight: 1.7,
              textAlign: "left",
            }}
          >
            <Box component="span" sx={{ display: "block", color: "text.disabled" }}>
              {"/* Seite nicht gefunden */"}
            </Box>
            <Box component="span" sx={{ display: "block", color: "text.secondary" }}>
              {"return -ENOENT;"}
            </Box>
          </Box>
        </Paper>

        <Button
          variant="contained"
          size="large"
          href="/"
          startIcon={<HomeOutlinedIcon />}
        >
          Zurück zur Startseite
        </Button>
      </Stack>
    </Container>
  );
}
