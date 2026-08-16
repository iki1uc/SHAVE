// GICIK — Störimpuls-Verteiler
// Mystery: Höhe = mittel, Breite = DOOR-Bereich, Tiefe = kurz

export function gicik(impulse) {
    console.log("[GICIK] Störimpuls verteilt:", impulse);
    return {
        height: "mystery-mid",
        width: "mystery-door",
        depth: "mystery-short",
        impulse
    };
}
