let $RangedAttribute = Java.loadClass(
    'net.minecraft.world.entity.ai.attributes.RangedAttribute'
)

StartupEvents.registry('attribute', event => {
    event.createCustom('kubejs:generic.damage_rate', () => {
        return new $RangedAttribute(
            'attribute.name.:generic.damage_rate',
            0.85,
            0.85,
            2.5
        )
    })
})

ForgeModEvents.onEvent(
    'net.minecraftforge.event.entity.EntityAttributeModificationEvent',
    event => {
        if (!event.has('player', 'kubejs:generic.damage_rate')) {
            event.add('player', 'kubejs:generic.damage_rate')
        }
    }
)