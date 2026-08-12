// src/lib/legal.ts

export const legal = {
    name: process.env.NEXT_PUBLIC_LEGAL_NAME ?? "",
    street: process.env.NEXT_PUBLIC_LEGAL_STREET ?? "",
    city: process.env.NEXT_PUBLIC_LEGAL_CITY ?? "",
    email: process.env.NEXT_PUBLIC_LEGAL_EMAIL ?? "",
    hoster:
        process.env.NEXT_PUBLIC_LEGAL_HOSTER ??
        "Oracle Corporation, 2300 Oracle Way, Austin, TX 78741, USA — Rechenzentrum Frankfurt am Main, Deutschland",
} as const;