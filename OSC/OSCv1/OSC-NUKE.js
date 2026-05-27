player.onItemInteracted(FISHING_ROD, function () {
    // 5 concentric rings of primed TNT, centered 45 blocks above the player
    for (let ring = 1; ring <= 5; ring++) {
        let radius = ring * 3          // radii: 3, 6, 9, 12, 15
        let count = ring * 8           // TNT per ring: 8, 16, 24, 32, 40
        for (let i = 0; i < count; i++) {
            let angle = (2 * Math.PI * i) / count
            let dx = Math.round(radius * Math.cos(angle))
            let dz = Math.round(radius * Math.sin(angle))
            mobs.spawn(PRIMED_TNT, pos(dx, 45, dz))
        }
    }
})
