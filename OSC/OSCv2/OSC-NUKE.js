// OSC-NUKE v2: 5 concentric rings in the air, aimed where you look
// Horizontal target from posCamera, spawns 45 blocks up so TNT rains down
// ~2.5s falling + ~1.5s on ground before detonation
player.onItemInteracted(FISHING_ROD, function () {
    // Get horizontal aim direction, ignore Y — we set our own height
    let aim = posCamera(0, 0, 30).toWorld()
    let tx = aim.getValue(Axis.X)
    let tz = aim.getValue(Axis.Z)
    // Spawn rings 45 blocks above the player so they fall onto the target
    let ty = player.position().getValue(Axis.Y) + 45

    // 5 rings all spawned same tick = same fuse = one simultaneous blast
    for (let ring = 1; ring <= 5; ring++) {
        let radius = ring * 3
        let count = ring * 8
        for (let i = 0; i < count; i++) {
            let angle = (2 * Math.PI * i) / count
            let dx = Math.round(radius * Math.cos(angle))
            let dz = Math.round(radius * Math.sin(angle))
            mobs.spawn(PRIMED_TNT, world(tx + dx, ty, tz + dz))
        }
    }
})
