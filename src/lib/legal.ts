// src/lib/legal.ts

export type Hoster = {
    name: string;
    address: string;
    privacyUrl: string;
    /** Sitz außerhalb der EU/des EWR → Drittlandübermittlung erläutern */
    thirdCountry: boolean;
};

const hosters = {
    vercel: {
        name: "Vercel Inc.",
        address: "440 N Barranca Avenue #4133, Covina, CA 91723, USA",
        privacyUrl: "https://vercel.com/legal/privacy-policy",
        thirdCountry: true,
    },
    oracle: {
        name: "Oracle Cloud Infrastructure (Oracle Corporation)",
        address:
            "2300 Oracle Way, Austin, TX 78741, USA — Rechenzentrum Frankfurt am Main, Deutschland",
        privacyUrl: "https://www.oracle.com/de/legal/privacy/",
        thirdCountry: false,
    },
} satisfies Record<string, Hoster>;

// Vercel setzt VERCEL=1 beim Build; die Rechtstexte werden statisch
// gerendert und nennen so je Instanz den tatsächlich ausliefernden Hoster.
const hoster: Hoster =
    process.env.VERCEL === "1" ? hosters.vercel : hosters.oracle;

export const legal = {
    name: process.env.NEXT_PUBLIC_LEGAL_NAME ?? "",
    street: process.env.NEXT_PUBLIC_LEGAL_STREET ?? "",
    city: process.env.NEXT_PUBLIC_LEGAL_CITY ?? "",
    email: process.env.NEXT_PUBLIC_LEGAL_EMAIL ?? "",
    hoster,
} as const;
