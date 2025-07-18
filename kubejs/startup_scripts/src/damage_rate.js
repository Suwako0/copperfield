ForgeEvents.onEvent(
    'net.minecraftforge.event.entity.living.LivingHurtEvent',
    event => {
        global.livingHurt(event)
    }
)

global.livingHurt = event => {
    let { amount, source, entity } = event
    let { player } = source

    if (player && source.getType() == 'player') {
        const damage_rate = player.getAttributeValue('kubejs:generic.damage_rate')
        event.setAmount(amount * damage_rate)
    }
}