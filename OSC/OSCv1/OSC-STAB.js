// OSC-STAB: Stab shot — instant vertical blast, no lateral spread
// Pattern: natural block, air+TNT, natural block, air+TNT, ...
// Each TNT is sandwiched between solid blocks so it can't fall.
// All spawned same tick = same fuse = one simultaneous explosion.
player.onItemInteracted(FISHING_ROD, function () {
    // One on the surface
    mobs.spawn(PRIMED_TNT, pos(0, 0, 0))
    // Every other block going down: carve 1-block air gap, drop TNT in it
    // The natural blocks above and below each gap trap the TNT in place
    for (let depth = -2; depth >= -64; depth -= 2) {
        blocks.place(AIR, pos(0, depth, 0))
        mobs.spawn(PRIMED_TNT, pos(0, depth, 0))
    }
})
