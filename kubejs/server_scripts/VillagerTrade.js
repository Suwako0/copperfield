MoreJSEvents.villagerTrades((event) => {
    event.removeVanillaTrades('minecraft:fisherman', 1)
    const tradeInfoLamprey = event.addTrade('minecraft:fisherman', 1, '12x youkaishomecoming:raw_lamprey', 'minecraft:emerald')
    tradeInfoLamprey.maxUses(10)
    const tradeInfoTuna = event.addTrade('minecraft:fisherman', 1, 'minecraft:emerald', '2x youkaishomecoming:raw_tuna')
    tradeInfoLamprey.maxUses(10)
});