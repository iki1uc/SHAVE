// CHARM — Charm-Verteiler
// Mystery: Höhe = charm-level, Breite = breit, Tiefe = mittel

export function charm(impulse) {
    console.log("[CHARM] Charm-Impuls verteilt:", impulse);
    return {
        height: "mystery-charm",
        width: "mystery-wide",
        depth: "mystery-mid",
        impulse
    };
}
