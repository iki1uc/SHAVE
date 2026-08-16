// NOHERO — Antiheld-Verteiler
// Mystery: Höhe = hart, Breite = direkt, Tiefe = mittel

export function nohero(impulse) {
    console.log("[NOHERO] Antiheld-Impuls raus:", impulse);
    return {
        height: "mystery-hard",
        width: "mystery-direct",
        depth: "mystery-mid",
        impulse
    };
}
