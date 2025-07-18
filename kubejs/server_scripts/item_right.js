function ClearCustomDungeon(event) {
    event.server.runCommandSilent(`execute in kubejs:custom_dungeons run fill 2 20 2 45 7 45 minecraft:air`)
    event.server.runCommandSilent(`execute in kubejs:custom_dungeons run fill 2 20 2 45 35 45 minecraft:air`)
    event.server.runCommandSilent(`execute in kubejs:custom_dungeons run fill 2 50 2 45 35 45 minecraft:air`)
}

ItemEvents.rightClicked(event => {
    if (!event.item.hasTag('kubejs:dungenos_key'))  return;
    event.server.runCommandSilent(`execute in kubejs:custom_dungeons run forceload add 1 1`)
    event.server.runCommandSilent(`execute in kubejs:custom_dungeons run tp @a 24 22 24`)
    event.server.runCommandSilent(`execute in kubejs:custom_dungeons run effect give @a minecraft:slow_falling 5`)
    event.server.runCommandSilent(`execute in kubejs:custom_dungeons run weather clear`)
    ClearCustomDungeon(event)
    event.server.runCommandSilent(`execute in kubejs:custom_dungeons run place template dungeons_arise:custom_dungeons/custom_dungeons 0 5 0`)
    if (event.item.id == ('kubejs:dungeons_key_undead_normal')) {
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run open_gateway 24 24 24 kubejs:undead_normal`)
    }
    if (event.item.id == ('kubejs:dungeons_key_undead_hero')) {
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run open_gateway 24 24 24 kubejs:undead_hero`)
    }
    if (event.item.id == ('kubejs:dungeons_key_undead_epic')) {
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run open_gateway 24 24 24 kubejs:undead_epic`)
    }
    if (event.item.id == ('kubejs:dungeons_key_spider_normal')) {
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run open_gateway 24 24 24 kubejs:spider_normal`)
    }
    if (event.item.id == ('kubejs:dungeons_key_spider_hero')) {
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run open_gateway 24 24 24 kubejs:spider_hero`)
    }
    if (event.item.id == ('kubejs:dungeons_key_spider_epic')) {
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run open_gateway 24 24 24 kubejs:spider_epic`)
    }
    if (event.item.id == ('kubejs:dungeons_key_moon_normal')) {
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run open_gateway 24 24 24 kubejs:moon_normal`)
    }
    if (event.item.id == ('kubejs:dungeons_key_moon_hero')) {
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run open_gateway 24 24 24 kubejs:moon_hero`)
    }
    if (event.item.id == ('kubejs:dungeons_key_moon_epic')) {
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run open_gateway 24 24 24 kubejs:moon_epic`)
    }
    if (event.item.id == ('kubejs:dungeons_key_boss_shuangxing')) {
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run open_gateway 24 24 24 kubejs:boss_shuangxing`)
    }
    if (event.item.id == ('kubejs:dungeons_key_boss_sizhezhiwang')) {
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run open_gateway 24 24 24 kubejs:boss_sizhezhiwang`)
    }
    if (event.item.id == ('kubejs:dungeons_key_boss_liweitan')) {
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run open_gateway 24 24 24 kubejs:boss_liweitan`)
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run fill 2 20 2 45 7 45 minecraft:water`)
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run fill 2 20 2 45 35 45 minecraft:water`)
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run fill 2 43 2 45 35 45 minecraft:water`)
    }
    if (event.item.id == ('kubejs:dungeons_key_boss_yanmo')) {
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run open_gateway 24 24 24 kubejs:boss_yanmo`)
    }
    if (event.item.id == ('kubejs:dungeons_key_boss_xiajiehejinjushou')) {
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run open_gateway 24 24 24 kubejs:boss_xiajiehejinjushou`)
    }
    if (event.item.id == ('kubejs:dungeons_key_boss_qishijuxiang')) {
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run open_gateway 24 24 24 kubejs:boss_qishijuxiang`)
    }
    if (event.item.id == ('kubejs:dungeons_key_boss_sikula')) {
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run open_gateway 24 24 24 kubejs:boss_sikula`)
    }
    if (event.item.id == ('kubejs:dungeons_key_boss_zhouyilinghai')) {
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run open_gateway 24 24 24 kubejs:boss_zhouyilinghai`)
    }
    if (event.item.id == ('kubejs:dungeons_key_boss_yuanguyihun')) {
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run open_gateway 24 24 24 kubejs:boss_yuanguyihun`)
    }
    if (event.item.id == ('kubejs:dungeons_key_boss_moyingshouwei')) {
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run open_gateway 24 24 24 kubejs:boss_moyingshouwei`)
    }
    if (event.item.id == ('kubejs:dungeons_key_boss_juxuanshouhuzhe')) {
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run open_gateway 24 24 24 kubejs:boss_juxuanshouhuzhe`)
    }
    if (event.item.id == ('kubejs:dungeons_key_boss_aiguozhe')) {
        event.server.runCommandSilent(`execute in kubejs:custom_dungeons run open_gateway 24 24 24 kubejs:boss_aiguozhe`)
    }

    event.item.shrink(1)
})

ItemEvents.rightClicked(event => {
    if (!event.item.hasTag('kubejs:epic_weapon_bag'))  return;
    if (event.item.id == ('kubejs:epic_weapon_package_agony')) {
        event.server.runCommandSilent(`give ${event.player.name.getString()} wom:agony`)
    }
    if (event.item.id == ('kubejs:epic_weapon_package_tormented_mind')) {
        event.server.runCommandSilent(`give ${event.player.name.getString()} wom:tormented_mind`)
    }
    if (event.item.id == ('kubejs:epic_weapon_package_ruine')) {
        event.server.runCommandSilent(`give ${event.player.name.getString()} wom:ruine`)
    }
    if (event.item.id == ('kubejs:epic_weapon_package_ender_blaster')) {
        event.server.runCommandSilent(`give ${event.player.name.getString()} wom:ender_blaster`)
    }
    if (event.item.id == ('kubejs:epic_weapon_package_satsujin')) {
        event.server.runCommandSilent(`give ${event.player.name.getString()} wom:satsujin`)
    }
    if (event.item.id == ('kubejs:epic_weapon_package_herrscher')) {
        event.server.runCommandSilent(`give ${event.player.name.getString()} wom:herrscher`)
    }
    if (event.item.id == ('kubejs:epic_weapon_package_gesetz')) {
        event.server.runCommandSilent(`give ${event.player.name.getString()} wom:gesetz`)
    }
    if (event.item.id == ('kubejs:epic_weapon_package_moonless')) {
        event.server.runCommandSilent(`give ${event.player.name.getString()} wom:moonless`)
    }
    if (event.item.id == ('kubejs:epic_weapon_package_solar')) {
        event.server.runCommandSilent(`give ${event.player.name.getString()} wom:solar`)
    }
    if (event.item.id == ('kubejs:epic_weapon_package_demon_seal')) {
        event.server.runCommandSilent(`give ${event.player.name.getString()} wom:demon_seal`)
    }
    event.item.shrink(1)
})

ItemEvents.rightClicked('kubejs:dungeons_hearthstone', event => {
    event.server.runCommandSilent(`execute in kubejs:custom_dungeons run forceload add 1 1`)
    event.server.runCommandSilent(`execute in kubejs:custom_dungeons run tp ${event.player.name.getString()} 24 24 24`)
    event.server.runCommandSilent(`execute in kubejs:custom_dungeons run effect give @a minecraft:slow_falling 5`)
    event.server.runCommandSilent(`execute in kubejs:custom_dungeons run weather clear`)
    ClearCustomDungeon(event)
    event.server.runCommandSilent(`execute in kubejs:custom_dungeons run place template dungeons_arise:custom_dungeons/custom_dungeons 0 5 0`)
})

ItemEvents.rightClicked('kubejs:dungeons_hearthstone_water', event => {
    event.server.runCommandSilent(`execute in kubejs:custom_dungeons run forceload add 1 1`)
    event.server.runCommandSilent(`execute in kubejs:custom_dungeons run tp ${event.player.name.getString()} 24 22 24`)
    event.server.runCommandSilent(`execute in kubejs:custom_dungeons run effect give @a minecraft:slow_falling 5`)
    event.server.runCommandSilent(`execute in kubejs:custom_dungeons run weather clear`)
    ClearCustomDungeon(event)
    event.server.runCommandSilent(`execute in kubejs:custom_dungeons run place template dungeons_arise:custom_dungeons/custom_dungeons 0 5 0`)
    event.server.runCommandSilent(`execute in kubejs:custom_dungeons run fill 2 20 2 45 7 45 minecraft:water`)
    event.server.runCommandSilent(`execute in kubejs:custom_dungeons run fill 2 20 2 45 35 45 minecraft:water`)
    event.server.runCommandSilent(`execute in kubejs:custom_dungeons run fill 2 43 2 45 35 45 minecraft:water`)
})

ItemEvents.rightClicked('kubejs:dungeons_reward_bag_mine', event => {
    event.server.runCommandSilent(`loot give ${event.player.name.getString()} loot kubejs:dungeons/loot_reward_bag_mine`)
    event.item.shrink(1)
})

ItemEvents.rightClicked('kubejs:dungeons_reward_bag_upgrade_materail', event => {
    event.server.runCommandSilent(`loot give ${event.player.name.getString()} loot kubejs:dungeons/loot_reward_bag_upgrade_materail`)
    event.item.shrink(1)
})

ItemEvents.rightClicked('kubejs:dungeons_reward_bag_tech', event => {
    event.server.runCommandSilent(`loot give ${event.player.name.getString()} loot kubejs:dungeons/loot_reward_bag_tech`)
    event.item.shrink(1)
})

BlockEvents.rightClicked('ftbquests:barrier', event => {
  const { server, player, block } = event;
  if (player && player.getHeldItem(event.hand) == 'kubejs:final_key') {
    server.runCommandSilent(`/setblock ${block.x} ${block.y} ${block.z} air`)
    server.runCommandSilent('/playsound minecraft:block.anvil.break ambient @a')
  }
});

ItemEvents.rightClicked('kubejs:mystery_pollen', event => {
    event.player.tell(Component.yellow('随风而散~'))
    event.item.shrink(1)
})

ItemEvents.rightClicked('kubejs:random_pet_bag', event => {
    const random = Math.floor(Math.random() * 11) + 1
    const player = event.player
    switch(random) {
        case 1:
            event.server.runCommandSilent(`/summon alshanex_familiars:archmage_pet ${player.x} ${player.y} ${player.z}`)
            break
        case 2:
            event.server.runCommandSilent(`/summon alshanex_familiars:bard_pet ${player.x} ${player.y} ${player.z}`)
            break
        case 3:
            event.server.runCommandSilent(`/summon alshanex_familiars:cleric_pet ${player.x} ${player.y} ${player.z}`)
            break
        case 4:
            event.server.runCommandSilent(`/summon alshanex_familiars:druid_pet ${player.x} ${player.y} ${player.z}`)
            break
        case 5:
            event.server.runCommandSilent(`/summon alshanex_familiars:hunter_pet ${player.x} ${player.y} ${player.z}`)
            break
        case 6:
            event.server.runCommandSilent(`/summon alshanex_familiars:illusionist_pet ${player.x} ${player.y} ${player.z}`)
            break
        case 7:
            event.server.runCommandSilent(`/summon alshanex_familiars:mage_pet ${player.x} ${player.y} ${player.z}`)
            break
        case 8:
            event.server.runCommandSilent(`/summon alshanex_familiars:necromancer_pet ${player.x} ${player.y} ${player.z}`)
            break
        case 9:
            event.server.runCommandSilent(`/summon alshanex_familiars:plague_pet ${player.x} ${player.y} ${player.z}`)
            break
        case 10:
            event.server.runCommandSilent(`/summon alshanex_familiars:scorcher_pet ${player.x} ${player.y} ${player.z}`)
            break
        case 11:
            event.server.runCommandSilent(`/summon alshanex_familiars:summoner_pet ${player.x} ${player.y} ${player.z}`)
            break
        // js的sc好像不用写Default也能编过
    }
    player.tell(Component.yellow('[CopperfieldCore]已召唤魔宠!'))
    event.item.shrink(1)
})

ItemEvents.rightClicked('kubejs:zombie_summoner', event => {
    const { player, item, level } = event
    let zombie = level.createEntity('minecraft:warden')
    zombie.x = player.x
    zombie.y = player.y
    zombie.z = player.z
    zombie.maxHealth = 300
    let nbt = zombie.getNbt()
    nbt.putByte("NoAI", 1)
    nbt.putByte("Silent", 1)
    nbt.putByte("PersistenceRequired", 1)
    nbt.putByte("IsBaby", 0)
    nbt.putFloat("Health", 300)
    nbt.putString("DeathLootTable", "entities/empty")
    zombie.setNbt(nbt)
    zombie.setCustomName(Component.blue('测试傀儡'))
    zombie.setCustomNameVisible(true)
    // 添加持久化数据标记
    zombie.persistentData.putLong('spawnTime', Date.now())
    zombie.persistentData.putUUID('summoner', player.uuid)
    zombie.persistentData.putInt('isCustomZombie', 1)
    // 将僵尸加入世界
    level.addFreshEntity(zombie)

    player.tell(Component.blue('[CopperfieldCore]DPS测试开始'))
    item.hurt(1, player.level.random, player)
    if (item.getDamageValue() >= item.getMaxDamage()) {
        item.shrink(1)
    }
})

ItemEvents.entityInteracted('irons_spellbooks:legendary_ink', event => {
    const entity = event.target;
    const item = event.item;
    if (entity && entity.type.startsWith('alshanex_familiars:')) {
        if (entity.maxHealth < 450) {
            entity.maxHealth += 10;
            if(entity.maxHealth > 450) {
                entity.maxHealth = 450
            }
            item.shrink(1)
        } else {
            event.player.tell(Text.red('[CopperfieldCore]这个魔宠血量已经不能再提升了...'));
        }
    }
})

ItemEvents.entityInteracted('fruitsdelight:orange_marinated_pork', event => {
    const entity = event.target;
    const item = event.item;
    if (entity && entity.type.startsWith('alshanex_familiars:')) {
        const tagStr = entity.getUuid().toString()
        event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:regeneration 3600 1`)
        event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:charged 3600 1`)
        item.shrink(1)
    }
})