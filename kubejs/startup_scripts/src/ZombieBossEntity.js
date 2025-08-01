// StartupEvents.registry('entity_type', event => {
//     let builder = event.create('minecraft:zombie', 'minecraft:zombie')
//     //builder.textureResource
//     builder.mobCategory('monster')
//     builder.sized(1.0, 3.0)
//     builder.modelSize(1.8, 2.2)
//     builder.setDeathSound('minecraft:entity.wither.death')
//     builder.setAmbientSound('minecraft:entity.wither.ambient')
//     builder.setHurtSound(context => {
//         const { entity, damageSource } = context;
//         switch (damageSource.getType()) {
//             case "fire":
//                 return "minecraft:entity.generic.burn";
//             case "fall":
//                 return "minecraft:entity.generic.hurt";
//             case "drown":
//                 return "minecraft:entity.generic.hurt";
//             case "explosion":
//                 return "minecraft:entity.generic.explode";
//             default:
//                 return "minecraft:entity.generic.explode";
//         }
//     })
//     builder.fireImmune(true)
//     builder.isPersistenceRequired(true)
//     builder.canBreatheUnderwater(true)
//     builder.isAffectedByPotions(entity => {
//         return entity.getActiveEffects().size() > 0;
//     })
//     builder.setWaterSlowDown(0.0)
//     builder.shouldDespawnInPeaceful(false);
// })