// OSC-STAB v2: Instant stab where you aim, not where you stand
// Uses posCamera + groundPosition to target the bobber landing spot
// Alternating natural block / air+TNT pattern keeps each TNT trapped in place
player.onItemInteracted(FISHING_ROD, function () {
    // Target where the player is looking, snapped to ground
    let target = positions.groundPosition(posCamera(0, 0, 30)).toWorld()
    let tx = target.getValue(Axis.X)
    let ty = target.getValue(Axis.Y)
    let tz = target.getValue(Axis.Z)

    // Surface TNT at target
    mobs.spawn(PRIMED_TNT, world(tx, ty, tz))
    // Every other block down: carve air, spawn TNT — natural block between each
    // All same tick = all blow at once = instant stab
    for (let depth = ty - 2; depth >= ty - 64; depth -= 2) {
        blocks.place(AIR, world(tx, depth, tz))
        mobs.spawn(PRIMED_TNT, world(tx, depth, tz))
    }
})
