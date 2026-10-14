// src/lib/legal.ts

export const legal = {
    name: process.env.NEXT_PUBLIC_LEGAL_NAME ?? "",
    street: process.env.NEXT_PUBLIC_LEGAL_STREET ?? "",
    city: process.env.NEXT_PUBLIC_LEGAL_CITY ?? "",
    email: process.env.NEXT_PUBLIC_LEGAL_EMAIL ?? "",
    hoster: {
        name: "Vercel Inc.",
        address: "440 N Barranca Avenue #4133, Covina, CA 91723, USA",
        privacyUrl: "https://vercel.com/legal/privacy-policy",
    },
} as const;
