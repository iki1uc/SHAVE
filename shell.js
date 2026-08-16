// SHELL — Hauptverteiler
// Mystery: Höhe = höchste Stufe, Breite = alle Moves, Tiefe = tiefste Penetration

export const Shell = {
    distribute(impulse) {
        console.log("[SHELL] Verteilt Impuls:", impulse);
        return {
            height: "mystery-high",
            width: "mystery-all",
            depth: "mystery-deep",
            impulse
        };
    }
};
