ServerEvents.recipes(e =>{
    //<---------- 永恒之门 ---------->
    e.remove({output: '@gateways'})
    //<---------- 铁魔法 ---------->
    e.shaped('irons_spellbooks:arcane_salvage',[
        ['','irons_spellbooks:arcane_essence',''],
        ['irons_spellbooks:arcane_essence','minecraft:netherite_scrap','irons_spellbooks:arcane_essence'],
        ['','irons_spellbooks:arcane_essence','']
    ]);
    //<---------- 精妙背包 ---------->
    //空白升级模板
    e.replaceInput({output:'sophisticatedbackpacks:upgrade_base'},'minecraft:iron_ingot', 'create:iron_sheet')
    e.replaceInput({output:'sophisticatedbackpacks:upgrade_base'},'minecraft:string', 'botania:mana_string')
    //<----------史诗战斗 ---------->
    e.remove({output: 'cdmoveset:yamato'})
    //阎魔刀配方移除
    //DPS傀儡
    e.shaped('kubejs:zombie_summoner',[
        ['#botania:mystical_flowers','#botania:mystical_flowers','#botania:mystical_flowers'],
        ['#botania:mystical_flowers','minecraft:lapis_lazuli','#botania:mystical_flowers'],
        ['#botania:mystical_flowers','#botania:mystical_flowers','#botania:mystical_flowers']
    ]);
    //石大剑
    e.remove({output: 'epicfight:stone_greatsword'})
    e.shaped('epicfight:stone_greatsword',[
        ['','minecraft:stone','minecraft:cobblestone'],
        ['minecraft:stone','minecraft:cobblestone','minecraft:stone'],
        ['botania:livingwood_planks','minecraft:stone','']
    ]);
    //结构指南针
    e.remove({output: 'structurecompass:structure_compass'})
    e.shaped('structurecompass:structure_compass',[
        ['botania:livingrock','create:iron_sheet','botania:livingrock'],
        ['create:iron_sheet','minecraft:compass','create:iron_sheet'],
        ['botania:livingrock','create:iron_sheet','botania:livingrock']
    ]);
    //农场贸易
    //小市场
    e.remove({output: 'farmingforblockheads:market'})
    e.shaped('farmingforblockheads:market',[
        ['create:iron_sheet','minecraft:red_wool','create:iron_sheet'],
        ['minecraft:crimson_planks','gag:no_solicitors','minecraft:crimson_planks'],
        ['minecraft:crimson_planks','minecraft:crimson_planks','minecraft:crimson_planks']
    ]);
    //铁大剑
    e.remove({output: 'epicfight:iron_greatsword'})
    e.shaped('epicfight:iron_greatsword',[
        ['','create:iron_sheet','create:iron_sheet'],
        ['create:iron_sheet','create:iron_sheet','create:iron_sheet'],
        ['botania:livingwood_planks','create:iron_sheet','']
    ]);
    //铁长矛
    e.replaceInput({output:'epicfight:iron_spear'},'minecraft:iron_sword', 'create:iron_sheet')
    //铁太刀
    e.replaceInput({output:'epicfight:iron_tachi'},'minecraft:iron_ingot', 'create:iron_sheet')
    //铁长剑
    e.replaceInput({output:'epicfight:iron_longsword'},'minecraft:iron_ingot', 'create:iron_sheet')
    //铁匕首
    e.replaceInput({output:'epicfight:iron_dagger'},'minecraft:iron_ingot', 'create:iron_sheet')
    //金大剑
    e.remove({output: 'epicfight:golden_greatsword'})
    e.shaped('epicfight:golden_greatsword',[
        ['','create:golden_sheet','create:golden_sheet'],
        ['create:golden_sheet','create:golden_sheet','create:golden_sheet'],
        ['botania:livingwood_planks','create:golden_sheet','']
    ]);
    //金长矛
    e.replaceInput({output:'epicfight:golden_spear'},'minecraft:golden_sword', 'create:golden_sheet')
    //金太刀
    e.replaceInput({output:'epicfight:golden_tachi'},'minecraft:gold_ingot', 'create:golden_sheet')
    //金长剑
    e.replaceInput({output:'epicfight:golden_longsword'},'minecraft:gold_ingot', 'create:golden_sheet')
    //金匕首
    e.replaceInput({output:'epicfight:golden_dagger'},'minecraft:gold_ingot', 'create:golden_sheet')
    //钻石大剑
    e.remove({output: 'epicfight:diamond_greatsword'})
    e.shaped('epicfight:diamond_greatsword',[
        ['','kubejs:mana_diamond_sheet','kubejs:mana_diamond_sheet'],
        ['kubejs:mana_diamond_sheet','kubejs:mana_diamond_sheet','kubejs:mana_diamond_sheet'],
        ['botania:livingwood_planks','kubejs:mana_diamond_sheet','']
    ]);
    //钻石长矛
    e.replaceInput({output:'epicfight:diamond_spear'},'minecraft:diamond_sword', 'kubejs:mana_diamond_sheet')
    //钻石太刀
    e.replaceInput({output:'epicfight:diamond_tachi'},'minecraft:diamond', 'kubejs:mana_diamond_sheet')
    //钻石长剑
    e.replaceInput({output:'epicfight:diamond_longsword'},'minecraft:diamond', 'kubejs:mana_diamond_sheet')
    //钻石匕首
    e.replaceInput({output:'epicfight:diamond_dagger'},'minecraft:diamond', 'kubejs:mana_diamond_sheet')
    //下界合金大剑
    e.remove({output: 'epicfight:netherite_greatsword'})
    e.smithing('epicfight:netherite_greatsword', 'epicfight:diamond_greatsword', 'kubejs:mana_netherite_sheet')
    //下界合金长矛
    e.remove({output: 'epicfight:netherite_spear'})
    e.smithing('epicfight:netherite_spear', 'epicfight:diamond_spear', 'kubejs:mana_netherite_sheet')
    //下界合金太刀
    e.remove({output: 'epicfight:netherite_tachi'})
    e.smithing('epicfight:netherite_tachi', 'epicfight:diamond_tachi', 'kubejs:mana_netherite_sheet')
    //下界合金长剑
    e.remove({output: 'epicfight:netherite_longsword'})
    e.smithing('epicfight:netherite_longsword', 'epicfight:diamond_longsword', 'kubejs:mana_netherite_sheet')
    //下界合金匕首
    e.remove({output: 'epicfight:netherite_dagger'})
    e.smithing('epicfight:netherite_dagger', 'epicfight:diamond_dagger', 'kubejs:mana_netherite_sheet')
    //下界合金杖
    e.smithing('wom:netherite_staff', 'wom:diamond_staff', 'kubejs:mana_netherite_sheet')
    //移除wom附属包合成
    e.remove({output: '@wom'})
    //安提修斯
    e.shaped('wom:antitheus',[
        ['minecraft:wither_rose','kubejs:mana_netherite_sheet','minecraft:wither_rose'],
        ['minecraft:nether_star','wom:demon_seal','minecraft:nether_star'],
        ['minecraft:wither_rose','kubejs:mana_netherite_sheet','minecraft:wither_rose']
    ]);
    e.remove({output: 'refm:end_upgrade'})
    e.remove({output: 'refm:wither_upgrade'})
    e.remove({output: 'refm:ocean_upgrade'})
    //铁刺剑
    e.remove({output: 'refm:iron_rapier'})
    e.shaped('refm:iron_rapier',[
        ['','',''],
        ['botania:manasteel_ingot','',''],
        ['minecraft:stick','create:iron_sheet','create:iron_sheet']
    ]);
    //金刺剑
    e.remove({output: 'refm:gold_rapier'})
    e.shaped('refm:gold_rapier',[
        ['','',''],
        ['botania:manasteel_ingot','',''],
        ['minecraft:stick','create:golden_sheet','create:golden_sheet']
    ]);
    //钻石刺剑
    e.remove({output: 'refm:diamond_rapier'})
    e.shaped('refm:diamond_rapier',[
        ['','',''],
        ['botania:manasteel_ingot','',''],
        ['minecraft:stick','kubejs:mana_diamond_sheet','kubejs:mana_diamond_sheet']
    ]);
    //下界合金刺剑
    e.remove({output: 'refm:netherite_rapier'})
    e.smithing('refm:netherite_rapier', 'refm:diamond_rapier', 'kubejs:mana_netherite_sheet')
    //机械融合站 移除
    e.remove({output: 'cataclysm:mechanical_fusion_anvil'})
    //<---------- 简易刀剑 ---------->
    e.replaceInput(
    { mod: 'simplyswords' },
    'minecraft:iron_ingot',
    'create:iron_sheet'
    );
    e.replaceInput(
    { mod: 'simplyswords' },
    'minecraft:gold_ingot',
    'create:golden_sheet'
    );
    e.replaceInput(
    { mod: 'simplyswords' },
    'minecraft:gold_ingot',
    'create:golden_sheet'
    );
    e.replaceInput(
    { mod: 'simplyswords' },
    'minecraft:diamond',
    'kubejs:mana_diamond_sheet'
    );
    e.replaceInput(
    { mod: 'simplyswords' },
    'minecraft:netherite_ingot',
    'kubejs:mana_netherite_sheet'
    );
   //<---------- 神化 ---------->
   e.shaped('kubejs:gem_origin',[
        ['apotheosis:gem_dust','botania:livingrock','apotheosis:gem_dust'],
        ['botania:livingrock','minecraft:diamond','botania:livingrock'],
        ['apotheosis:gem_dust','botania:livingrock','apotheosis:gem_dust']
    ]);
   //<---------- GAG ---------->
    e.remove({output: '@gag'})
    //禁止推销标志
    e.shaped('gag:no_solicitors',[
        ['#minecraft:planks','minecraft:emerald','#minecraft:planks'],
        ['#minecraft:planks','minecraft:painting','#minecraft:planks'],
        ['#minecraft:planks','#minecraft:planks','#minecraft:planks']
    ]);
    //闪电炉石
    e.shaped('gag:energized_hearthstone',[
        ['','irons_spellbooks:lightning_bottle',''],
        ['irons_spellbooks:lightning_bottle','gag:hearthstone','irons_spellbooks:lightning_bottle'],
        ['','irons_spellbooks:lightning_bottle','']
    ]);
    //逃生绳索
    e.shaped('gag:escape_rope',[
        ['','botania:mana_string','botania:mana_string'],
        ['','minecraft:slime_ball','botania:mana_string'],
        ['botania:mana_string','','']
    ]);

    //<---------- Tom的简易存储 ---------->
    //合成终端
    e.replaceInput({output:'toms_storage:ts.storage_terminal'},'minecraft:glowstone', 'botania:livingrock_bricks')

    //<---------- 机械动力 ---------->
    const create = e.recipes.create
    //混合神秘沙质
    create.mixing(['kubejs:mystery_sand', Item.of('kubejs:mystery_sand').withChance(0.25)],['kubejs:mystery_pollen', 'minecraft:gravel'])
    //移除沙砾水洗铁粒
    e.remove({ id: 'create:splashing/gravel' });
    //混合神秘沙质水洗
    create.splashing([Item.of('minecraft:iron_nugget').withChance(0.7),Item.of('minecraft:iron_nugget').withChance(0.5), Item.of('minecraft:gold_nugget').withChance(0.2)], 'kubejs:mystery_sand')
    //安山合金
    e.replaceInput({output:'create:andesite_alloy'},'minecraft:iron_nugget', 'botania:livingrock')
    //辊压机 深板岩
    create.compacting('minecraft:deepslate',[Item.of('minecraft:stone', 2)])
    //辊压机 魔力钻石板
    create.pressing('kubejs:mana_diamond_sheet','botania:mana_diamond')
    //辊压机 魔力下界合金板
    create.pressing('kubejs:mana_netherite_sheet','kubejs:mana_netherite_ingot')
    //辊压机 泰拉钢板
    create.pressing('kubejs:terrasteel_sheet','botania:terrasteel_ingot')
    //辊压机 源质钢板
    create.pressing('kubejs:elecmentium_sheet','botania:elementium_ingot')
    //搅拌机 花肥
    e.remove({output:'botania:fertilizer'})
    create.mixing('botania:fertilizer',['minecraft:bone_meal', '#forge:dyes'])
    //奥术源质
    create.mixing('irons_spellbooks:arcane_essence',['under_the_moon:sweptwood_leaves', '#botania:petals']).heated()
    //普通墨水
    create.mixing('irons_spellbooks:common_ink',['minecraft:black_dye', 'kubejs:mystery_pollen']).heated()
    //卓越墨水
    create.deploying('irons_spellbooks:uncommon_ink',['irons_spellbooks:common_ink','minecraft:copper_ingot'])
    //高级墨水
    create.deploying('irons_spellbooks:rare_ink',['irons_spellbooks:uncommon_ink','minecraft:iron_ingot'])
    //史诗墨水
    create.deploying('irons_spellbooks:epic_ink',['irons_spellbooks:rare_ink','minecraft:gold_ingot'])
    //传说墨水
    create.deploying('irons_spellbooks:legendary_ink',['irons_spellbooks:epic_ink','minecraft:amethyst_shard'])
    //活木
    create.deploying('botania:livingwood_log',['#minecraft:logs','botania:pure_daisy']).keepHeldItem()
    //活石
    create.deploying('botania:livingrock',['minecraft:stone','botania:pure_daisy']).keepHeldItem()
    //下界岩
    create.deploying('minecraft:netherrack',['minecraft:gravel','botania:pure_daisy']).keepHeldItem()
    //列王遗物
    create.deploying('kubejs:boss_remains',['mythicbotany:alfsteel_ingot','irons_spellbooks:blood_vial'])
    e.remove({output:'apotheosis:gem_fused_slate'})
    //宝石融合岩板
    create.mixing('apotheosis:gem_fused_slate',['apotheosis:gem_dust', Item.of('#apotheosis:deepslate', 4)]).heated()
    //月石
    create.mixing([Item.of('under_the_moon:moonstone').withChance(0.5), 'minecraft:cobblestone'],[Item.of('minecraft:diorite', 2), 'minecraft:glow_ink_sac']).heated()
    create.mixing([Item.of('under_the_moon:moonstone'), Item.of('under_the_moon:moonstone').withChance(0.3)],[Item.of('minecraft:diorite', 2), 'minecraft:glow_ink_sac']).superheated()
    //刺剑末影升级
    create.mixing('refm:end_upgrade',[Item.of('minecraft:end_stone', 8), 'minecraft:ender_eye']).heated()
    //刺剑凋零升级
    create.mixing('refm:wither_upgrade',[Item.of('minecraft:soul_sand', 8), 'minecraft:wither_skeleton_skull']).heated()
    //刺剑海洋升级
    create.mixing('refm:ocean_upgrade',[Item.of('minecraft:prismarine_bricks', 8), 'minecraft:nautilus_shell']).heated()
    //四色宝石胚体
    create.splashing('kubejs:gem_origin_blue', 'kubejs:gem_origin')
    create.haunting('kubejs:gem_origin_green', 'kubejs:gem_origin')
    e.smoking('kubejs:gem_origin_yellow', 'kubejs:gem_origin')
    e.blasting('kubejs:gem_origin_red', 'kubejs:gem_origin')
    //神秘花粉末
    create.milling(['kubejs:mystery_pollen', Item.of('kubejs:mystery_pollen', 1).withChance(0.5)], '#botania:mystical_flowers');
    //宝石粉
    create.milling([Item.of("apotheosis:gem_dust", 1).withChance(0.05), Item.of("irons_spellbooks:arcane_essence", 1).withChance(0.1)], 'botania:mana_powder');
    //下界合金碎片产线
    create.filling('kubejs:quartz_refining_body', ['botania:quartz_elven', Fluid.of('create:honey', 1000)]);
    create.mixing(Item.of('minecraft:netherite_scrap').withChance(0.5), ['kubejs:quartz_refining_body', 'minecraft:netherrack']).superheated();
    //动力合成器 大圣套
    create.mechanical_crafting('wukong:dasheng_h',
        [
            "ABBBA",
            "BDCDB",
            "BCECB",
            "BDCDB",
            "ABBBA",
        ],
        {
            A:"kubejs:terrasteel_sheet",
            B:"mythicbotany:alfsteel_ingot",
            C:"alexscaves:sweet_tooth",
            D:"kubejs:mana_netherite_sheet",
            E:"traveloptics:echo_winglet"
        }
    );
    create.mechanical_crafting('wukong:dasheng_c',
        [
            "ABBBA",
            "BDCDB",
            "BCECB",
            "BDCDB",
            "ABBBA",
        ],
        {
            A:"kubejs:terrasteel_sheet",
            B:"mythicbotany:alfsteel_ingot",
            C:"cataclysm:witherite_ingot",
            D:"kubejs:mana_netherite_sheet",
            E:"cataclysm:abyssal_egg"
        }
    );
    create.mechanical_crafting('wukong:dasheng_l',
        [
            "ABBBA",
            "BDCDB",
            "BCECB",
            "BDCDB",
            "ABBBA",
        ],
        {
            A:"kubejs:terrasteel_sheet",
            B:"mythicbotany:alfsteel_ingot",
            C:"alexscaves:tectonic_shard",
            D:"kubejs:mana_netherite_sheet",
            E:"cataclysm:essence_of_the_storm"
        }
    );
    create.mechanical_crafting('wukong:dasheng_f',
        [
            "ABBBA",
            "BDCDB",
            "BCECB",
            "BDCDB",
            "ABBBA",
        ],
        {
            A:"kubejs:terrasteel_sheet",
            B:"mythicbotany:alfsteel_ingot",
            C:"cataclysm:ignitium_ingot",
            D:"kubejs:mana_netherite_sheet",
            E:"cataclysm:ancient_metal_block"
        }
    );
    //动力合成 窃魂
    create.mechanical_crafting('simplyswords:soulstealer',
        [
            "   AA",
            "   DA",
            " BE  ",
            " CB  ",
            "F    ",
        ],
        {
            A:"kubejs:terrasteel_sheet",
            B:"botania:gaia_ingot",
            C:"cataclysm:gauntlet_of_guard",
            D:"alexscaves:amber_curiosity",
            E:"alexscaves:primitive_club",
            F:"legendary_monsters:corrupted_soul"
        }
    );
    //动力合成 织蜡
    create.mechanical_crafting('simplyswords:waxweaver',
        [
            "   AA",
            "  BDA",
            "  DC ",
            "GE   ",
            "FG   ",
        ],
        {
            A:"kubejs:terrasteel_sheet",
            B:"alexscaves:scarlet_neodymium_ingot",
            C:"alexscaves:azure_neodymium_ingot",
            D:"minecraft:totem_of_undying",
            E:"cataclysm:monstrous_horn",
            F:"legendary_monsters:cloud_rod",
            G:"minecraft:torch"
        }
    );
    //动力合成 烈风
    create.mechanical_crafting('simplyswords:tempest',
        [
            " ABA ",
            "AFCFA",
            "BFDFB",
            "AFEFA",
            " ABA ",
        ],
        {
            A:"kubejs:terrasteel_sheet",
            B:"legendary_monsters:molten_metal_ingot",
            C:"alexscaves:fissile_core",
            D:"cataclysm:remnant_skull",
            E:"alexscaves:uranium_rod",
            F:"minecraft:torch"
        }
    );
    //<---------- 植物魔法 ---------->
    const botania = e.recipes.botania
    //魔法水晶
    e.replaceInput({output:'botania:mana_pylon'},'botania:mana_diamond', 'kubejs:mana_diamond_sheet')
    //自然水晶
    e.replaceInput({output:'botania:natura_pylon'},'botania:terrasteel_nugget', 'kubejs:terrasteel_sheet')
    //魔力发射器
    e.remove({output:'botania:mana_spreader'})
    e.shaped('botania:mana_spreader',[
        ['#botania:livingwood_logs','#botania:livingwood_logs','#botania:livingwood_logs'],
        ['create:copper_sheet','#botania:petals',''],
        ['#botania:livingwood_logs','#botania:livingwood_logs','#botania:livingwood_logs']
    ]);
    //魔力发射器
    e.remove({output:'botania:elven_spreader'})
    e.shaped('botania:elven_spreader',[
        ['#botania:dreamwood_logs','#botania:dreamwood_logs','#botania:dreamwood_logs'],
        ['kubejs:elecmentium_sheet','#botania:petals',''],
        ['#botania:dreamwood_logs','#botania:dreamwood_logs','#botania:dreamwood_logs']
    ]);
    //魔力转化 魔力下界合金锭
    botania.mana_infusion("kubejs:mana_netherite_ingot", "minecraft:netherite_ingot", 50000, "botania:alchemy_catalyst")
    //符文祭坛 炉石
    botania.runic_altar("gag:hearthstone", ["minecraft:amethyst_shard", "minecraft:amethyst_shard", "minecraft:obsidian", "minecraft:obsidian", "botania:mana_powder"], 2000)
    //符文祭坛 木杖
    botania.runic_altar("wom:wooden_staff", ["minecraft:stick", "#minecraft:logs", "#minecraft:logs", "minecraft:stick"], 100)
    //符文祭坛 石杖
    botania.runic_altar("wom:stone_staff", ["minecraft:stick", "minecraft:stone", "minecraft:stone", "minecraft:stick"], 150)
    //符文祭坛 金杖
    botania.runic_altar("wom:golden_staff", ["minecraft:stick", "create:golden_sheet", "create:golden_sheet", "minecraft:stick"], 200)
    //符文祭坛 铁杖
    botania.runic_altar("wom:iron_staff", ["minecraft:stick", "create:iron_sheet", "create:iron_sheet", "minecraft:stick"], 200)
    //符文祭坛 钻石杖
    botania.runic_altar("wom:diamond_staff", ["minecraft:stick", "kubejs:mana_diamond_sheet", "kubejs:mana_diamond_sheet", "minecraft:stick"], 300)
    //白雏菊转化 下界岩
    botania.pure_daisy("minecraft:netherrack", "minecraft:gravel", 1)
    //魔力转化 青金石
    botania.mana_infusion("minecraft:lapis_lazuli", ["minecraft:amethyst_shard"], 2000)
    //魔力转化 秘境炉石海洋版
    botania.mana_infusion("kubejs:dungeons_hearthstone_water", ["kubejs:dungeons_hearthstone"], 2000)
    //魔力转化 回响碎片
    botania.mana_infusion("minecraft:echo_shard", ["irons_spellbooks:arcane_salvage"], 10000)
    //魔力转化 紫水晶母岩
    botania.mana_infusion("minecraft:budding_amethyst", ["minecraft:amethyst_block"], 50000)
    //凝矿兰 锌矿石
    botania.orechid("create:zinc_ore", "minecraft:stone", 3500)
    //泰拉凝聚板 终焉之钥
    botania.terra_plate("kubejs:final_key", ["cataclysm:essence_of_the_storm", "cataclysm:cursium_ingot", "cataclysm:tidal_claws", "alexscaves:tectonic_shard", "alexscaves:immortal_embryo", "legendary_monsters:withered_bone", "legendary_monsters:nature_crystal", "botania:golden_grass", "mythicbotany:dream_cherry"], 1000000)
    //<---------- KubeJs ---------->
    //秘境兑币-普通难度
    e.shaped('kubejs:dungeons_charge_coin_normal',[
        ['','under_the_moon:moonstone',''],
        ['minecraft:obsidian','kubejs:elecmentium_sheet','minecraft:obsidian'],
        ['','under_the_moon:moonstone','']
    ]);
    //秘境兑币-英雄难度
    e.shaped('kubejs:dungeons_charge_coin_hero',[
        ['','under_the_moon:moonstone',''],
        ['minecraft:crying_obsidian','kubejs:terrasteel_sheet','minecraft:crying_obsidian'],
        ['','under_the_moon:moonstone','']
    ]);
})