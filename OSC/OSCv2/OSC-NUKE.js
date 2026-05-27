// OSC-NUKE v2: 5 concentric rings, all same tick, centered where you aim
// Uses posCamera to project where the player is looking, then
// groundPosition to snap to terrain — approximates bobber landing spot
player.onItemInteracted(FISHING_ROD, function () {
    // Target where the player is looking, snapped to ground
    let target = positions.groundPosition(posCamera(0, 0, 30)).toWorld()
    let tx = target.getValue(Axis.X)
    let ty = target.getValue(Axis.Y)
    let tz = target.getValue(Axis.Z)

    // 5 rings all spawned same tick = same fuse = one simultaneous blast
    for (let ring = 1; ring <= 5; ring++) {
        let radius = ring * 3
        let count = ring * 8
        for (let i = 0; i < count; i++) {
            let angle = (2 * Math.PI * i) / count
            let dx = Math.round(radius * Math.cos(angle))
            let dz = Math.round(radius * Math.sin(angle))
            mobs.spawn(PRIMED_TNT, world(tx + dx, ty + 1, tz + dz))
        }
    }
})
