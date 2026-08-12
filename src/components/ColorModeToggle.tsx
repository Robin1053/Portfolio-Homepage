"use client";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useColorScheme } from "@mui/material/styles";

export default function ColorModeToggle() {
    const { mode, systemMode, setMode } = useColorScheme();

    // Vor der Hydration ist mode undefined — Platzhalter in gleicher Größe
    // rendern, damit nichts springt.
    if (!mode) {
        return <IconButton aria-label="Farbschema umschalten" disabled />;
    }

    const resolved = mode === "system" ? systemMode : mode;
    const next = resolved === "dark" ? "light" : "dark";

    return (
        <Tooltip title={next === "dark" ? "Dunkles Design" : "Helles Design"}>
            <IconButton
                aria-label="Farbschema umschalten"
                onClick={() => setMode(next)}
                color="inherit"
            >
                {resolved === "dark" ? (
                    <LightModeOutlinedIcon fontSize="small" />
                ) : (
                    <DarkModeOutlinedIcon fontSize="small" />
                )}
            </IconButton>
        </Tooltip>
    );
}
