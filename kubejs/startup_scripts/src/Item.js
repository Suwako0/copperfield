StartupEvents.registry('item',e=>{
    //神秘花粉末
    e.create('mystery_pollen','basic'),
    //神秘沙质
    e.create('mystery_sand','basic'),
    //随机魔宠袋
    e.create('random_pet_bag','basic'),
    //魔力下界合金锭
    e.create('mana_netherite_ingot','basic'),
    //魔力钻石板
    e.create('mana_diamond_sheet','basic'),
    //魔力下界合金板
    e.create('mana_netherite_sheet','basic'),
    //石英炼体
    e.create('quartz_refining_body','basic').maxStackSize(64),
    //源质钢板
    e.create('elecmentium_sheet','basic'),
    //泰拉钢板
    e.create('terrasteel_sheet','basic')
    //秘境炉石
    e.create('dungeons_hearthstone','basic').maxStackSize(1)
    e.create('dungeons_hearthstone_water','basic').maxStackSize(1)
    //秘境奖币
    e.create('dungeons_reward_coin','basic').maxStackSize(64),
    e.create('dungeons_reward_coin_stack','basic').maxStackSize(64),
    //秘境奖励袋
    e.create('dungeons_reward_bag_mine','basic').texture('kubejs:item/dungeons_reward_bag')
    e.create('dungeons_reward_bag_upgrade_materail','basic').texture('kubejs:item/dungeons_reward_bag')
    e.create('dungeons_reward_bag_tech','basic').texture('kubejs:item/dungeons_reward_bag')
    //秘境兑币
    e.create('dungeons_charge_coin_normal','basic')
    e.create('dungeons_charge_coin_hero','basic')
    e.create('dungeons_charge_coin_epic','basic')
    //钥石-天灾亡灵
    e.create('dungeons_key_undead_normal','basic').texture('kubejs:item/dungeons_key1').tag('kubejs:dungenos_key').maxStackSize(1)
    e.create('dungeons_key_undead_hero','basic').texture('kubejs:item/dungeons_key1').tag('kubejs:dungenos_key').maxStackSize(1)
    e.create('dungeons_key_undead_epic','basic').texture('kubejs:item/dungeons_key1').tag('kubejs:dungenos_key').maxStackSize(1)
    //钥石-千丝之织
    e.create('dungeons_key_spider_normal','basic').texture('kubejs:item/dungeons_key2').tag('kubejs:dungenos_key').maxStackSize(1)
    e.create('dungeons_key_spider_hero','basic').texture('kubejs:item/dungeons_key2').tag('kubejs:dungenos_key').maxStackSize(1)
    e.create('dungeons_key_spider_epic','basic').texture('kubejs:item/dungeons_key2').tag('kubejs:dungenos_key').maxStackSize(1)
    //钥石-残月高悬
    e.create('dungeons_key_moon_normal','basic').texture('kubejs:item/dungeons_key3').tag('kubejs:dungenos_key').maxStackSize(1)
    e.create('dungeons_key_moon_hero','basic').texture('kubejs:item/dungeons_key3').tag('kubejs:dungenos_key').maxStackSize(1)
    e.create('dungeons_key_moon_epic','basic').texture('kubejs:item/dungeons_key3').tag('kubejs:dungenos_key').maxStackSize(1)
    //列王遗物
    e.create('boss_remains','basic').tag('kubejs:dungenos_key').maxStackSize(1)
    //列王之殇钥石 霜星
    e.create('dungeons_key_boss_shuangxing','basic').texture('kubejs:item/dungeons_key_boss').tag('kubejs:dungenos_key').maxStackSize(1)
    //列王之殇钥石 震怒的死者之王
    e.create('dungeons_key_boss_sizhezhiwang','basic').texture('kubejs:item/dungeons_key_boss').tag('kubejs:dungenos_key').maxStackSize(1)
    //列王之殇钥石 利维坦
    e.create('dungeons_key_boss_liweitan','basic').texture('kubejs:item/dungeons_key_boss').tag('kubejs:dungenos_key').maxStackSize(1)
    //列王之殇钥石 焰魔
    e.create('dungeons_key_boss_yanmo','basic').texture('kubejs:item/dungeons_key_boss').tag('kubejs:dungenos_key').maxStackSize(1)
    //列王之殇钥石 下界合金巨兽
    e.create('dungeons_key_boss_xiajiehejinjushou','basic').texture('kubejs:item/dungeons_key_boss').tag('kubejs:dungenos_key').maxStackSize(1)
    //列王之殇钥石 骑士巨像
    e.create('dungeons_key_boss_qishijuxiang','basic').texture('kubejs:item/dungeons_key_boss').tag('kubejs:dungenos_key').maxStackSize(1)
    //列王之殇钥石 斯库拉
    e.create('dungeons_key_boss_sikula','basic').texture('kubejs:item/dungeons_key_boss').tag('kubejs:dungenos_key').maxStackSize(1)
    //列王之殇钥石 咒翼灵骸
    e.create('dungeons_key_boss_zhouyilinghai','basic').texture('kubejs:item/dungeons_key_boss').tag('kubejs:dungenos_key').maxStackSize(1)
    //列王之殇钥石 远古遗魂
    e.create('dungeons_key_boss_yuanguyihun','basic').texture('kubejs:item/dungeons_key_boss').tag('kubejs:dungenos_key').maxStackSize(1)
    //列王之殇钥石 末影守卫
    e.create('dungeons_key_boss_moyingshouwei','basic').texture('kubejs:item/dungeons_key_boss').tag('kubejs:dungenos_key').maxStackSize(1)
    //列王之殇钥石 飓旋守卫者
    e.create('dungeons_key_boss_juxuanshouhuzhe','basic').texture('kubejs:item/dungeons_key_boss').tag('kubejs:dungenos_key').maxStackSize(1)
    //列王之殇钥石 爱国者
    e.create('dungeons_key_boss_aiguozhe','basic').texture('kubejs:item/dungeons_key_boss').tag('kubejs:dungenos_key').maxStackSize(1)
    //史诗武器包
    e.create('epic_weapon_package_agony','basic').texture('kubejs:item/epic_weapon_package').tag('kubejs:epic_weapon_bag').maxStackSize(1)
    e.create('epic_weapon_package_tormented_mind','basic').texture('kubejs:item/epic_weapon_package').tag('kubejs:epic_weapon_bag').maxStackSize(1)
    e.create('epic_weapon_package_ruine','basic').texture('kubejs:item/epic_weapon_package').tag('kubejs:epic_weapon_bag').maxStackSize(1)
    e.create('epic_weapon_package_ender_blaster','basic').texture('kubejs:item/epic_weapon_package').tag('kubejs:epic_weapon_bag').maxStackSize(1)
    e.create('epic_weapon_package_satsujin','basic').texture('kubejs:item/epic_weapon_package').tag('kubejs:epic_weapon_bag').maxStackSize(1)
    e.create('epic_weapon_package_herrscher','basic').texture('kubejs:item/epic_weapon_package').tag('kubejs:epic_weapon_bag').maxStackSize(1)
    e.create('epic_weapon_package_gesetz','basic').texture('kubejs:item/epic_weapon_package').tag('kubejs:epic_weapon_bag').maxStackSize(1)
    e.create('epic_weapon_package_moonless','basic').texture('kubejs:item/epic_weapon_package').tag('kubejs:epic_weapon_bag').maxStackSize(1)
    e.create('epic_weapon_package_solar','basic').texture('kubejs:item/epic_weapon_package').tag('kubejs:epic_weapon_bag').maxStackSize(1)
    e.create('epic_weapon_package_demon_seal','basic').texture('kubejs:item/epic_weapon_package').tag('kubejs:epic_weapon_bag').maxStackSize(1)

    e.create('zombie_summoner', 'basic').texture('kubejs:item/zombie_summoner').maxStackSize(1).maxDamage(20)
    //宝石加工
    e.create('gem_origin', 'basic').texture('kubejs:item/gem_origin').maxStackSize(64)
    e.create('gem_origin_red', 'basic').texture('kubejs:item/gem_origin_red').maxStackSize(64)
    e.create('gem_origin_green', 'basic').texture('kubejs:item/gem_origin_green').maxStackSize(64)
    e.create('gem_origin_blue', 'basic').texture('kubejs:item/gem_origin_blue').maxStackSize(64)
    e.create('gem_origin_yellow', 'basic').texture('kubejs:item/gem_origin_yellow').maxStackSize(64)
    //终焉之钥
    e.create('final_key', 'basic').maxStackSize(1)

    e.create('student_ring')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => true)
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "botania:pixie_spawn_chance",
                    '123e4567-e89b-12d3-a456-426614173999',
                    0.20,
                    'addition'
                )
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    attributeModificationContext.modify(
                        "minecraft:generic.luck",
                        "identifier",
                        1.0,
                        'addition'
                    );
                    attributeModificationContext.modify(
                        "minecraft:generic.movement_speed",
                        "identifier",
                        0.1,
                        'multiply_total'
                    );
                })
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => {
                    return false;
                })
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:ring")

    e.create('custom_dungeons_ring')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => true)
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "kubejs:generic.damage_rate",
                    '123e4567-e89b-12d3-a456-426614174000',
                    0.25,
                    'addition'
                )
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    attributeModificationContext.modify(
                        "minecraft:generic.luck",
                        "identifier",
                        1.0,
                        'addition'
                    );
                    attributeModificationContext.modify(
                        "minecraft:generic.attack_speed",
                        "identifier",
                        0.15,
                        'addition'
                    );
                    attributeModificationContext.modify(
                        "minecraft:generic.movement_speed",
                        "identifier",
                        0.1,
                        'multiply_total'
                    );
                    attributeModificationContext.modify(
                        "minecraft:generic.knockback_resistance",
                        "identifier",
                        0.1,
                        'addition'
                    );
                })
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => {
                    return false;
                })
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:ring")

     e.create('botanicreator_ring')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => true)
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "kubejs:generic.damage_rate",
                    UUID,
                    0.20,
                    'multiply_total'
                )
                .addAttribute(
                    "minecraft:generic.block_interaction_range",
                    UUID,
                    1,
                    'addition'
                )
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    // attributeModificationContext.modify(
                    //     "minecraft:generic.block_interaction_range",
                    //     "identifier",
                    //     1,
                    //     'addition'
                    // );
                    attributeModificationContext.modify(
                        "irons_spellbooks:mana_regen",
                        "identifier",
                        0.20,
                        'multiply_total'
                    );
                    attributeModificationContext.modify(
                        "irons_spellbooks:spell_power",
                        "identifier",
                        0.30,
                        'multiply_total'
                    );
                    attributeModificationContext.modify(
                        "spellbooks_attribute:magic_damage",
                        "identifier",
                        0.15,
                        'multiply_total'
                    );
                })
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => {
                    return false;
                })
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:ring")

    e.create('ender_ring')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => true)
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "irons_spellbooks:max_mana",
                    UUID,
                    125,
                    'addition'
                )
                .addAttribute(
                    "irons_spellbooks:ender_spell_power",
                    UUID,
                    1.0,
                    'multiply_total'
                )
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => {
                    return false;
                })
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:ring")
})

ItemEvents.modification(e => {
    //Armors
    e.modify('mythicbotany:alfsteel_helmet', item => {
        item.addAttribute("irons_spellbooks:max_mana", "123e4567-e89b-12d3-a456-426614174000", "Mana", 100, "Addition")
        item.addAttribute("kubejs:generic.damage_rate", "123e4567-e89b-12d3-a456-426614174100", "DamageRate", 0.1, "Addition")
    })
    e.modify('mythicbotany:alfsteel_chestplate', item => {
        item.addAttribute("irons_spellbooks:max_mana", "123e4567-e89b-12d3-a456-426614174001", "Mana", 100, "Addition")
        item.addAttribute("kubejs:generic.damage_rate", "123e4567-e89b-12d3-a456-426614174101", "DamageRate", 0.1, "Addition")
    })
    e.modify('mythicbotany:alfsteel_leggings', item => {
        item.addAttribute("irons_spellbooks:max_mana", "123e4567-e89b-12d3-a456-426614174002", "Mana", 100, "Addition")
        item.addAttribute("kubejs:generic.damage_rate", "123e4567-e89b-12d3-a456-426614174102", "DamageRate", 0.1, "Addition")
    })
    e.modify('mythicbotany:alfsteel_boots', item => {
        item.addAttribute("irons_spellbooks:max_mana", "123e4567-e89b-12d3-a456-426614174003", "Mana", 100, "Addition")
        item.addAttribute("kubejs:generic.damage_rate", "123e4567-e89b-12d3-a456-426614174103", "DamageRate", 0.1, "Addition")
    })

    e.modify('botania:terrasteel_helmet', item => {
        item.addAttribute("irons_spellbooks:max_mana", "123e4567-e89b-12d3-a456-426614174010", "Mana", 65, "Addition")
        item.addAttribute("kubejs:generic.damage_rate", "123e4567-e89b-12d3-a456-426614174015", "DamageRate", 0.05, "Addition")
    })
    e.modify('botania:terrasteel_chestplate', item => {
        item.addAttribute("irons_spellbooks:max_mana", "123e4567-e89b-12d3-a456-426614174011", "Mana", 65, "Addition")
        item.addAttribute("kubejs:generic.damage_rate", "123e4567-e89b-12d3-a456-426614174016", "DamageRate", 0.05, "Addition")
    })
    e.modify('botania:terrasteel_leggings', item => {
        item.addAttribute("irons_spellbooks:max_mana", "123e4567-e89b-12d3-a456-426614174012", "Mana", 65, "Addition")
        item.addAttribute("kubejs:generic.damage_rate", "123e4567-e89b-12d3-a456-426614174017", "DamageRate", 0.1, "Addition")
    })
    e.modify('botania:terrasteel_boots', item => {
        item.addAttribute("irons_spellbooks:max_mana", "123e4567-e89b-12d3-a456-426614174013", "Mana", 65, "Addition")
        item.addAttribute("kubejs:generic.damage_rate", "123e4567-e89b-12d3-a456-426614174018", "DamageRate", 0.05, "Addition")
    })
    e.modify('wukong:dasheng_h', item => {
        item.armorProtection = 7.0
        item.armorToughness = 4.0
        item.armorKnockbackResistance = 0.10
        item.addAttribute("irons_spellbooks:max_mana", "123e4567-e89b-12d3-a456-426614174004", "Mana", 100, "Addition")
        item.addAttribute("kubejs:generic.damage_rate", "123e4567-e89b-12d3-a456-426614174005", "DamageRate", 0.1, "Addition")
        item.addAttribute("irons_spellbooks:spell_power", "123e4567-e89b-12d3-a456-426614174006", "SpellPower", 0.1, "multiply_total")
    })
    e.modify('wukong:dasheng_c', item => {
        item.armorProtection = 12.0
        item.armorToughness = 5.0
        item.armorKnockbackResistance = 0.10
        item.addAttribute("irons_spellbooks:max_mana", "123e4567-e89b-12d3-a456-426614174005", "Mana", 100, "Addition")
        item.addAttribute("kubejs:generic.damage_rate", "123e4567-e89b-12d3-a456-426614174007", "DamageRate", 0.1, "Addition")
        item.addAttribute("irons_spellbooks:spell_power", "123e4567-e89b-12d3-a456-426614174008", "SpellPower", 0.1, "multiply_total")
    })
    e.modify('wukong:dasheng_l', item => {
        item.armorToughness = 4.0
        item.armorKnockbackResistance = 0.10
        item.addAttribute("irons_spellbooks:max_mana", "123e4567-e89b-12d3-a456-426614174009", "Mana", 100, "Addition")
        item.addAttribute("kubejs:generic.damage_rate", "123e4567-e89b-12d3-a456-426614175010", "DamageRate", 0.1, "Addition")
        item.addAttribute("irons_spellbooks:spell_power", "123e4567-e89b-12d3-a456-426614175011", "SpellPower", 0.1, "multiply_total")
    })
    e.modify('wukong:dasheng_f', item => {
        item.armorProtection = 7.0
        item.armorToughness = 4.0
        item.armorKnockbackResistance = 0.10
        item.addAttribute("irons_spellbooks:max_mana", "123e4567-e89b-12d3-a456-426614175012", "Mana", 100, "Addition")
        item.addAttribute("kubejs:generic.damage_rate", "123e4567-e89b-12d3-a456-426614175013", "DamageRate", 0.1, "Addition")
        item.addAttribute("irons_spellbooks:spell_power", "123e4567-e89b-12d3-a456-426614175014", "SpellPower", 0.1, "multiply_total")
    })
    //Weapons
    e.modify('wukong:jingubang', item => {
        item.attackDamage = 10.0
        item.addAttribute("kubejs:generic.damage_rate", "123e4567-e89b-12d3-a456-426614154005", "DamageRate", 0.1, "Addition")
    })
    e.modify('simplyswords:enigma', item => {
        item.attackDamage = 10.5
        item.attackSpeed = -3.23
    })
    e.modify('simplyswords:flamewind', item => {
        item.attackDamage = 9.5
    })
    e.modify('simplyswords:whisperwind', item => {
        item.attackDamage = 8.5
    })
    e.modify('simplyswords:molten_edge', item => {
        item.attackDamage = 9.5
    })
    e.modify('simplyswords:soulrender', item => {
        item.attackDamage = 9.5
    })
    e.modify('simplyswords:twisted_blade', item => {
        item.attackDamage = 4.5
    })
    e.modify('simplyswords:waxweaver', item => {
        item.attackDamage = 11.5
        item.addAttribute("kubejs:generic.damage_rate", "123e4567-e89b-12d3-a456-426614175013", "DamageRate", 0.1, "Addition")
        item.addAttribute("attributeslib:crit_chance", "123e4567-e89b-12d3-a456-426614175014", "CritChance", 0.15, "Addition")
    })
    e.modify('simplyswords:waxweaver', item => {
        item.attackDamage = 11.5
        item.addAttribute("kubejs:generic.damage_rate", "123e4567-e89b-12d3-a456-426614175013", "DamageRate", 0.1, "Addition")
        item.addAttribute("attributeslib:crit_chance", "123e4567-e89b-12d3-a456-426614175014", "CritChance", 0.15, "Addition")
    })
    e.modify('simplyswords:soulstealer', item => {
        item.attackDamage = 5.5
        item.addAttribute("kubejs:generic.damage_rate", "123e4567-e89b-12d3-a456-426614175013", "DamageRate", 0.15, "multiply_total")
        item.addAttribute("attributeslib:prot_pierce", "123e4567-e89b-12d3-a456-426614175014", "ProtPierce", 3, "Addition")
        item.addAttribute("attributeslib:current_hp_damage", "123e4567-e89b-12d3-a456-426614175014", "LifeSteal", 0.05, "Addition")
    })
    e.modify('simplyswords:tempest', item => {
        item.addAttribute("minecraft:generic.movement_speed", "123e4567-e89b-12d3-a456-426614175016", "Speed", 0.1, "multiply_total")
    })
    e.modify('simplyswords:waking_lichblade', item => {
        item.attackDamage = 12.5
        item.addAttribute("kubejs:generic.damage_rate", "123e4567-e89b-12d3-a456-426614175011", "DamageRate", 0.05, "multiply_total")
    })
    e.modify('simplyswords:awakened_lichblade', item => {
        item.attackDamage = 13
        item.addAttribute("kubejs:generic.damage_rate", "123e4567-e89b-12d3-a456-426614175025", "DamageRate", 0.1, "multiply_total")
        item.addAttribute("attributeslib:crit_damage", "123e4567-e89b-12d3-a456-426614175026", "CritDamage", 0.25, "multiply_total")
    })
})