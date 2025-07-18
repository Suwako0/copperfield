LootJS.modifiers(event => {
        event.addLootTypeModifier(LootType.CHEST)
        .removeLoot('@wom')
        event.addLootTypeModifier(LootType.ENTITY)
        .removeLoot('@wom')
        event.addLootTypeModifier(LootType.ENTITY)
        .removeLoot('@epicfight')
});

ServerEvents.entityLootTables(event => {
        event.addEntity("minecraft:iron_golem", loot => {
                loot.addPool(pool => {
                        pool.addItem('minecraft:iron_nugget')
                        pool.addItem('minecraft:poppy')
                })
        })
})