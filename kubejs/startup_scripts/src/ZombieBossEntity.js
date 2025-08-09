StartupEvents.registry('entity_type', event => {
    let builder = event.create('manba', 'minecraft:zombie')
    builder.textureResource(entity => {
        return "kubejs:textures/entity/manba.png"
    })
    builder.modelResource(entity => {
        return "kubejs:geo/entity/sasuke.geo.json"
    })
    builder.mobCategory('monster')
    builder.sized(2, 2)
    builder.modelSize(2, 2)
    builder.setDeathSound('minecraft:entity.wither.death')
    builder.setAmbientSound('minecraft:entity.wither.ambient')
    builder.setHurtSound(context => {
        const { entity, damageSource } = context;
        switch (damageSource.getType()) {
            case "fire":
                return "minecraft:entity.generic.burn";
            case "fall":
                return "minecraft:entity.generic.hurt";
            case "drown":
                return "minecraft:entity.generic.hurt";
            case "explosion":
                return "minecraft:entity.generic.explode";
            default:
                return "minecraft:entity.generic.explode";
        }
    })
    builder.fireImmune(true)
    builder.isPersistenceRequired(true)
    builder.canBreatheUnderwater(true)
    builder.isAffectedByPotions(entity => {
        return entity.getActiveEffects().size() > 0;
    })
    builder.setWaterSlowDown(0.0)
    builder.shouldDespawnInPeaceful(true);
    builder.canJump(true)
    builder.canHoldItem(context => {
            return true;
    })
    builder.canTakeItem(context => {
            return true;
    })
    let Axis = Java.loadClass("com.mojang.math.Axis")
    builder.addRenderItemLayer(entity => "right_hand", itemLayerBuilder => {
        itemLayerBuilder.renderItem(context => {
            let {
                poseStack,
            } = context
            poseStack.translate(0.05, -0.5, -0.5)
            poseStack.mulPose(Axis.YP.rotationDegrees(90))
            poseStack.mulPose(Axis.ZP.rotationDegrees(-40))
        })
    })
    builder.addArmorItemLayer(armorBuilder => {
        armorBuilder
            .setHeadArmorBone((e) => "head")
            .setChestArmorBone((e) => "body")
            .setRightLegArmorBone((e) => "right_leg")
            .setLeftLegArmorBone((e) => "left_leg")
            .setRightFootArmorBone((e) => "right_foot")
            .setLeftFootArmorBone((e) => "left_foot")
            .setMainHandArmorBone((e) => "right_arm")
            .setOffhandArmorBone((e) => "left_arm")
            .setLeftShoulderArmorBone(e => "left_shoulder")
            .setRightShoulderArmorBone(e => "right_shoulder")
            .renderArmor(context => {
                let {
                    poseStack,
                    bone,
                } = context
                if (bone.name === "head") {
                } else if (bone.name == "body") {
                    poseStack.translate(0, -0.3, 0.0)
                } else if (bone.name == "left_foot") {
                    poseStack.translate(0.3, -4, 0)
                    poseStack.scale(1.8, 5, 1.8)
                } else if (bone.name == "right_foot") {
                    poseStack.translate(-0.3, -2.1, 0)
                    poseStack.scale(1.8, 5, 1.8)
                } else if (bone.name == "left_shoulder") {
                    poseStack.translate(-0.6, 43.3, 0)
                    poseStack.scale(1.7, 6.5, 1.7)
                } else if (bone.name == "right_shoulder") {
                    poseStack.translate(0.6, 43.3, 0)
                    poseStack.scale(1.7, 6.5, 1.7)
                }
            })
    })
})