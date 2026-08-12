"use client";

import NextLink from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Wird in next.config.ts aus der package.json gesetzt.
const appVersion = process.env.NEXT_PUBLIC_APP_VERSION;

export default function SiteFooter() {
    return (
        <Box
            component="footer"
            sx={{ borderTop: "1px solid", borderColor: "divider", py: 4, mt: 8 }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    sx={{ alignItems: "center", justifyContent: "space-between" }}
                >
                    <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                        <Typography variant="body2" color="text.secondary">
                            © {new Date().getFullYear()} Robineb
                        </Typography>
                        {appVersion && (
                            <Chip
                                label={`v${appVersion}`}
                                size="small"
                                variant="outlined"
                                sx={{ fontFamily: "monospace" }}
                            />
                        )}
                    </Stack>

                    <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
                        <Link
                            component={NextLink}
                            href="/impressum"
                            variant="body2"
                            color="text.secondary"
                        >
                            Impressum
                        </Link>
                        <Link
                            component={NextLink}
                            href="/datenschutz"
                            variant="body2"
                            color="text.secondary"
                        >
                            Datenschutz
                        </Link>
                        <IconButton
                            component="a"
                            href="https://github.com/Robin1053"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub-Profil"
                            size="small"
                            sx={{ color: "text.secondary" }}
                        >
                            <GitHubIcon fontSize="small" />
                        </IconButton>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
