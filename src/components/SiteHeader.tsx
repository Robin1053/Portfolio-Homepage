"use client";

import { useState } from "react";
import NextLink from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ColorModeToggle from "./ColorModeToggle";

const navItems = [
    { label: "Projekte", href: "/#projekte" },
    { label: "Über mich", href: "/#ueber-mich" },
    { label: "Kontakt", href: "/#kontakt" },
];

export default function SiteHeader() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <AppBar
            position="sticky"
            elevation={0}
            color="transparent"
            sx={(theme) => ({
                backdropFilter: "blur(8px)",
                backgroundColor: `color-mix(in srgb, ${(theme.vars || theme).palette.background.default} 72%, transparent)`,
                borderBottom: "1px solid",
                borderColor: "divider",
            })}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                        component={NextLink}
                        href="/"
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            fontFamily: "var(--font-accent), cursive",
                            color: "text.primary",
                            textDecoration: "none",
                            flexGrow: 1,
                        }}
                    >
                        robineb
                        <Box component="span" sx={{ color: "primary.main" }}>
                            .de
                        </Box>
                    </Typography>

                    {/* Desktop-Navigation */}
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
                    >
                        {navItems.map((item) => (
                            <Button
                                key={item.href}
                                component={NextLink}
                                href={item.href}
                                color="inherit"
                            >
                                {item.label}
                            </Button>
                        ))}
                        <ColorModeToggle />
                    </Stack>

                    {/* Mobile: Toggle + Burger-Menü */}
                    <Stack
                        direction="row"
                        spacing={0.5}
                        sx={{ display: { xs: "flex", sm: "none" }, alignItems: "center" }}
                    >
                        <ColorModeToggle />
                        <IconButton
                            aria-label="Menü öffnen"
                            color="inherit"
                            onClick={() => setDrawerOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Stack>
                </Toolbar>
            </Container>

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <List sx={{ width: 240 }}>
                    {navItems.map((item) => (
                        <ListItem key={item.href} disablePadding>
                            <ListItemButton
                                component={NextLink}
                                href={item.href}
                                onClick={() => setDrawerOpen(false)}
                            >
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </AppBar>
    );
}
