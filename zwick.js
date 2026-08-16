// ZWICK — Kurzimpuls-Verteiler
// Mystery: Höhe = niedrig, Breite = schmal, Tiefe = minimal

export function zwick(impulse) {
    console.log("[ZWICK] Kurzimpuls raus:", impulse);
    return {
        height: "mystery-low",
        width: "mystery-narrow",
        depth: "mystery-thin",
        impulse
    };
}
