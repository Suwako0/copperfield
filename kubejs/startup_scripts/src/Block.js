StartupEvents.registry("block", e=>{
    e.create("alfheim_crystal_block", "basic")
    .soundType('amethyst')
    .hardness(10)
    .resistance(9.5)
    .requiresTool(true)
    .tagBlock('minecraft:needs_diamond_tool')
    .tagBlock('minecraft:mineable/pickaxe')
})