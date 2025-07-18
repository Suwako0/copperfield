EntityEvents.spawned(event => {
    //末影使者
    if (event.entity.type === 'legendary_monsters:endersent') {
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:absorption infinite 10`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] alexscaves:rage infinite 0`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 2`)
            }
        })
    }
    //潜影模仿者
    if (event.entity.type === 'legendary_monsters:shulker_mimic') {
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:absorption infinite 10`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] alexscaves:rage infinite 0`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 2`)
            }
        })
    }
    //骷髅巨龙
    if (event.entity.type === 'legendary_monsters:skeletosaurus') {
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:absorption infinite 10`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] alexscaves:rage infinite 0`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 2`)
            }
        })
    }
    //憎恶凋零
    if (event.entity.type === 'legendary_monsters:withered_abomination') {
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:absorption infinite 10`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] alexscaves:rage infinite 0`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 2`)
            }
        });
    }
    //熔岩食者
    if (event.entity.type === 'legendary_monsters:lava_eater') {
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:absorption infinite 10`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] alexscaves:rage infinite 0`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 2`)
            }
        })
    }
    //冰冻魔像
    if (event.entity.type === 'legendary_monsters:frostbitten_golem') {
        event.server.scheduleInTicks(5, callback =>{if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:absorption infinite 10`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] alexscaves:rage infinite 0`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 2`)
            }})
    }
    //狂生巨像
    if (event.entity.type === 'legendary_monsters:overgrown_colossus') {
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:absorption infinite 10`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] alexscaves:rage infinite 0`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 2`)
            }
        })
    }
    //古老守护者
    if (event.entity.type === 'legendary_monsters:ancient_guardian') {
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:absorption infinite 10`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] alexscaves:rage infinite 0`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 2`)
            }
        });
    }
    //癫狂圣骑士
    if (event.entity.type === 'legendary_monsters:posessed_paladin') {
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:absorption infinite 10`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] alexscaves:rage infinite 0`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 2`)
            }
        })
    }
    //沙丘哨兵
    if (event.entity.type === 'legendary_monsters:dune_sentinel') {
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:absorption infinite 10`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] alexscaves:rage infinite 0`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 2`)
            }
        })
    }
    //腐化英雄
    if (event.entity.type === 'graveyard:lich') {
        event.entity.maxHealth = 600
        event.entity.health = event.entity.maxHealth
    }
    //凋零
    if (event.entity.type === 'minecraft:wither') {
        event.entity.maxHealth = 750
        event.entity.health = event.entity.maxHealth
    }
    //末影龙
    if (event.entity.type === 'minecraft:ender_dragon') {
        event.entity.maxHealth = 1000
        event.entity.health = event.entity.maxHealth
    }
    //盖亚
    if (event.entity.type === 'botania:doppleganger') {
        event.entity.maxHealth *= 2.2
        event.entity.health = event.entity.maxHealth
        event.server.scheduleInTicks(5, callback =>{
            const tagStr = event.entity.getUuid().toString()
            event.entity.addTag(tagStr);
            event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:charged infinite 0`)
            event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:glowing infinite 0`)
        })
    }
    //怪人
    if (event.entity.type === 'illageandspillage:freakager') {
        event.entity.maxHealth = 250
        event.entity.health = event.entity.maxHealth
        event.server.scheduleInTicks(5, callback =>{
            const tagStr = event.entity.getUuid().toString()
            event.entity.addTag(tagStr);
            event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:charged infinite 0`)
            event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:strength infinite 0`)
        })
    }
    //腐败蜘蛛
    if (event.entity.type === 'illageandspillage:ragno') {
        event.entity.maxHealth = 200
        event.entity.health = event.entity.maxHealth
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:regeneration infinite 0`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:speed infinite 0`)
            }
        })
    }
    //死者之王
    if (event.entity.type === 'irons_spellbooks:dead_king') {
        event.entity.maxHealth = 1500
        event.entity.health = event.entity.maxHealth
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:charged infinite 2`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 0`)
            }
        })
    }
    //末影守卫
    if (event.entity.type === 'cataclysm:ender_guardian') {
        event.entity.maxHealth = 1350
        event.entity.health = event.entity.maxHealth
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:strength infinite 1`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:speed infinite 1`)
            }
        })
    }
    //咒翼灵
    if (event.entity.type === 'cataclysm:maledictus') {
        event.entity.maxHealth = 1300
        event.entity.health = event.entity.maxHealth
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:strength infinite 1`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:speed infinite 1`)
            }
        })
    }
    //瞑煌龙
    if (event.entity.type === 'alexscaves:luxtructosaurus') {
        event.entity.maxHealth = 1400
        event.entity.health = event.entity.maxHealth
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:strength infinite 1`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 0`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:charged infinite 0`)
            }
        })
    }
    //口香糖蠕虫
    if (event.entity.type === 'alexscaves:gum_worm') {
        event.entity.maxHealth = 600
        event.entity.health = event.entity.maxHealth
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:strength infinite 1`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 0`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:charged infinite 0`)
            }
        });
    }
    //远古遗魂
    if (event.entity.type === 'cataclysm:ancient_remnant') {
        event.entity.maxHealth = 2750
        event.entity.health = event.entity.maxHealth
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:strength infinite 1`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:speed infinite 1`)
            }
        })
    }
    //先驱者
    if (event.entity.type === 'cataclysm:the_harbinger') {
        event.entity.maxHealth = 2300
        event.entity.health = event.entity.maxHealth
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:strength infinite 1`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:speed infinite 1`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 0`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:charged infinite 0`)
            }
        })

    }
    //下界合金巨兽
    if (event.entity.type === 'cataclysm:netherite_monstrosity') {
        event.entity.maxHealth = 2400
        event.entity.health = event.entity.maxHealth
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:strength infinite 2`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:speed infinite 0`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 0`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:charged infinite 0`)
            }
        })
    }
    //焰魔
    if (event.entity.type === 'cataclysm:ignis') {
        event.entity.maxHealth = 2200
        event.entity.health = event.entity.maxHealth
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:strength infinite 2`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:speed infinite 0`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 0`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:charged infinite 0`)
            }
        })
    }
    //震怒的死者之王
    if (event.entity.type === 'traveloptics:enraged_dead_king') {
        event.entity.maxHealth = 2800
        event.entity.health = event.entity.maxHealth
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:strength infinite 1`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:charged infinite 6`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 1`)
            }
        })
    }
    //利维坦
    if (event.entity.type === 'cataclysm:the_leviathan') {
        event.entity.maxHealth = 2900
        event.entity.health = event.entity.maxHealth
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:strength infinite 3`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 0`)
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:charged infinite 0`)
            }
        })
    }
    //斯库拉
    if (event.entity.type === 'cataclysm:scylla') {
        event.entity.maxHealth = 2900
        event.entity.health = event.entity.maxHealth
        event.server.scheduleInTicks(5, callback =>{
            const tagStr = event.entity.getUuid().toString()
            event.entity.addTag(tagStr);
            event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:strength infinite 4`)
            event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:speed infinite 0`)
            event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 0`)
            event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:charged infinite 0`)
        })
    }
    //魔宠
    if (event.entity.type === 'alshanex_familiars:archmage_pet') {
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 0`)
            }
        })
    }
    if (event.entity.type === 'alshanex_familiars:bard_pet') {
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 0`)
            }
        })
    }
    if (event.entity.type === 'alshanex_familiars:cleric_pet') {
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 0`)
            }
        })
    }
    if (event.entity.type === 'alshanex_familiars:druid_pet') {
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 0`)
            }
        })
    }
    if (event.entity.type === 'alshanex_familiars:hunter_pet') {
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 0`)
            }
        })
    }
    if (event.entity.type === 'alshanex_familiars:illusionist_pet') {
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 0`)
            }
        })
    }
    if (event.entity.type === 'alshanex_familiars:mage_pet') {
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 0`)
            }
        })
    }
    if (event.entity.type === 'alshanex_familiars:necromancer_pet') {
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 0`)
            }
        })
    }
    if (event.entity.type === 'alshanex_familiars:plague_pet') {
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 0`)
            }
        })
    }
    if (event.entity.type === 'alshanex_familiars:scorcher_pet') {
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 0`)
            }
        })
    }
    if (event.entity.type === 'alshanex_familiars:summoner_pet') {
        event.server.scheduleInTicks(5, callback =>{
            if (event.entity && event.entity.isAlive()) {
                const tagStr = event.entity.getUuid().toString()
                event.entity.addTag(tagStr);
                event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] irons_spellbooks:oakskin infinite 0`)
            }
        })
    }
})

EntityEvents.death(event => {
    const entity = event.entity
    const killer = event.source.getPlayer()
    // 检查是否是我们自定义的僵尸（不用校验值了，找得到key就行）
    if (entity.type === 'minecraft:warden' && entity.persistentData.contains('isCustomZombie')) {
        const spawnTime = entity.persistentData.getLong('spawnTime')
        const summonerUuid = entity.persistentData.getUUID('summoner')
        const killTime = Date.now()
        const timeTaken = (killTime - spawnTime) / 1000 // 转换为秒
        // 如果有击杀者且召唤者在线
        if (killer && killer.type === 'minecraft:player') {
            if (killer.uuid.toString() === summonerUuid.toString()) {
                const time = timeTaken.toFixed(2);
                killer.tell(Component.blue(`[CopperfieldCore]已击杀测试傀儡，用时: ${time}秒，平均DPS为${((entity.maxHealth + 1) / time).toFixed(3)}/秒`))
            }
            else {
                killer.tell(Component.blue(`[CopperfieldCore]你击杀了不是你召唤的测试傀儡...`))
            }
        }
    }
    if (entity.type === 'traveloptics:the_nightwarden'){
        event.server.runCommandSilent('/gamerule doDaylightCycle true')
        event.server.runCommandSilent('/time set 100')
    }
    if (entity.type === 'minecraft:player'){
        event.server.runCommandSilent(`/effect give @e[type=traveloptics:the_nightwarden] minecraft:instant_health 1 3`)
    }
})

EntityEvents.hurt(event => {
    const attacter = event.attacker;
    //玩家免疫魔宠伤害(这样写免疫不了中毒之类的DOT，暂时没想到解决方法)
    if (event.entity && event.entity.type === 'minecraft:player') {
        const source = event.source;
        if (source && source.actual && source.actual.type.startsWith('alshanex_familiars:')) {
            event.cancel();
        }
    }
    //魔宠免疫玩家/魔宠伤害
    if (event.entity.type === 'alshanex_familiars:archmage_pet') {
        const source = event.source;
        if (source.player) {
            event.cancel();
        }
        else if (attacker && attacker.type.startsWith('alshanex_familiars:')) {
            event.cancel();
        }
    }
    if (event.entity.type === 'alshanex_familiars:bard_pet') {
        const source = event.source;
        if (source.player) {
            event.cancel();
        }
        else if (attacker && attacker.type.startsWith('alshanex_familiars:')) {
            event.cancel();
        }
    }
    if (event.entity.type === 'alshanex_familiars:cleric_pet') {
        const source = event.source;
        if (source.player) {
            event.cancel();
        }
        else if (attacker && attacker.type.startsWith('alshanex_familiars:')) {
            event.cancel();
        }
    }
    if (event.entity.type === 'alshanex_familiars:druid_pet') {
        const source = event.source;
        if (source.player) {
            event.cancel();
        }
        else if (attacker && attacker.type.startsWith('alshanex_familiars:')) {
            event.cancel();
        }
    }
    if (event.entity.type === 'alshanex_familiars:hunter_pet') {
        const source = event.source;
        if (source.player) {
            event.cancel();
        }
        else if (attacker && attacker.type.startsWith('alshanex_familiars:')) {
            event.cancel();
        }
    }
    if (event.entity.type === 'alshanex_familiars:illusionist_pet') {
        const source = event.source;
        if (source.player) {
            event.cancel();
        }
        else if (attacker && attacker.type.startsWith('alshanex_familiars:')) {
            event.cancel();
        }
    }
    if (event.entity.type === 'alshanex_familiars:mage_pet') {
        const source = event.source;
        if (source.player) {
            event.cancel();
        }
        else if (attacker && attacker.type.startsWith('alshanex_familiars:')) {
            event.cancel();
        }
    }
    if (event.entity.type === 'alshanex_familiars:necromancer_pet') {
        const source = event.source;
        if (source.player) {
            event.cancel();
        }
        else if (attacker && attacker.type.startsWith('alshanex_familiars:')) {
            event.cancel();
        }
    }
    if (event.entity.type === 'alshanex_familiars:plague_pet') {
        const source = event.source;
        if (source.player) {
            event.cancel();
        }
        else if (attacker && attacker.type.startsWith('alshanex_familiars:')) {
            event.cancel();
        }
    }
    if (event.entity.type === 'alshanex_familiars:scorcher_pet') {
        const source = event.source;
        if (source.player) {
            event.cancel();
        }
        else if (attacker && attacker.type.startsWith('alshanex_familiars:')) {
            event.cancel();
        }
    }
    if (event.entity.type === 'alshanex_familiars:summoner_pet') {
        const source = event.source;
        if (source.player) {
            event.cancel();
        }
        else if (attacker && attacker.type.startsWith('alshanex_familiars:')) {
            event.cancel();
        }
    }
    //守夜人召唤物免疫守夜人伤害
    if (event.entity.getTags().contains('spawn_by_nightguard')) {
        if (attacker && (attacker.type === 'traveloptics:the_nightwarden' || attacker.type === 'traveloptics:void_tome' || attacker.type === 'traveloptics:voidshelf_golem')) {
            event.cancel();
        }
    }
    //守夜人免疫召唤物伤害
    if (event.entity.type === 'traveloptics:the_nightwarden' || event.entity.type === 'traveloptics:void_tome' || event.entity.type === 'traveloptics:voidshelf_golem') {
        if (attacker && attacker.getTags().contains('spawn_by_nightguard')) {
            event.cancel();
        }
    }
});

//守夜人相关
EntityEvents.spawned(event => {
    const entity = event.entity;
    let nightGuard = undefined;
    if (entity.type === 'traveloptics:the_nightwarden') {
        entity.setCustomName(Component.lightPurple('夜巡者，腐化的科波菲尔导师'))
        entity.maxHealth = 5000
        entity.health = entity.maxHealth
        event.server.runCommandSilent('/gamerule doDaylightCycle false')
        event.server.runCommandSilent('/time set midnight')
        event.server.scheduleInTicks(5, callback =>{
            const tagStr = entity.getUuid().toString()
            entity.addTag(tagStr);
            event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:strength infinite 9`)
            event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:speed infinite 0`)
            event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] alexscaves:rage infinite 0`)
            event.server.runCommandSilent(`/effect give @e[tag=${tagStr}] minecraft:glowing infinite 0`)
        })
        NightGuardTickLoop(event.server, entity, event.level);
    }
    if (entity.getTags().contains('spawn_by_nightguard')) {
        NightGuardSpawnEntityTickLoop(event.server, entity, event.level);
    }
})

function NightGuardTickLoop(server, entity, level) {
    server.scheduleInTicks(1000, task => {
        if (entity && entity.isAlive()) {
            server.runCommandSilent(`/execute in kubejs:the_past run tp @e[type=traveloptics:the_nightwarden] 24 35 27`)
            server.runCommandSilent('/kill @e[tag=spawn_by_nightguard]')
            server.runCommandSilent(`/tell @a §3击杀召唤的魔法生物,阻止夜巡者回血!`)
            let spawnCount = entity.health < 2500 ? 4 : 2;
            for (let i = 0; i < spawnCount; i++) {
                const random = Math.floor(Math.random() * 3) + 1
                switch (random) {
                    case 1:
                        SpawnEntity(server, entity, level, 'graveyard:skeleton_creeper', '魔法苦力怕')
                        break;
                    case 2:
                        SpawnEntity(server, entity, level, 'cataclysm:deepling_brute', '渊灵深暗者')
                        break;
                    case 3:
                        SpawnEntity(server, entity, level, 'cataclysm:koboleton', '嗜血骷髅狗头人')
                        break;
                }
            }
            server.runCommandSilent('/effect give @e[type=traveloptics:the_nightwarden] minecraft:absorption 20 1')
            server.runCommandSilent('/effect give @e[tag=spawn_by_nightguard] minecraft:absorption 20 1')
            server.runCommandSilent('/effect give @e[tag=spawn_by_nightguard] irons_spellbooks:charged infinite 9')
            server.runCommandSilent('/effect give @e[tag=spawn_by_nightguard] minecraft:glowing infinite 0')
            server.runCommandSilent('/effect give @e[tag=spawn_by_nightguard] minecraft:resistance infinite 2')
            server.runCommandSilent(`/effect give @e[tag=spawn_by_nightguard] alexscaves:rage infinite 2`)
            NightGuardTickLoop(server, entity, level);
        }
    })
}

function NightGuardSpawnEntityTickLoop(server, entity, level) {
    server.scheduleInTicks(30, task => {
        if (entity && entity.isAlive()) {
             server.runCommandSilent(`/effect give @e[type=traveloptics:the_nightwarden] minecraft:instant_health 1 0`)
             NightGuardSpawnEntityTickLoop(server, entity, level)
        }
    })
}

EntityJSEvents.addGoalSelectors('cataclysm:koboleton', event => {
    const entity = event.getEntity();
    if (!entity || !entity.getTags().contains('spawn_by_nightguard')) {
        return;
    }
    event.arbitraryGoal(1, (e) => {
        return new WizardAttackGoal(e, 0.3, 45) // Parameters: entity, movement speed modifier, cast interval
            .setSpells(
                [Spell.of('traveloptics:vigor_siphon'), Spell.of('irons_spellbooks:ray_of_siphoning'), Spell.of('irons_spellbooks:devour'), Spell.of('traveloptics:ashen_breath')],
                [Spell.of('irons_spellbooks:ray_of_siphoning')],
                [Spell.of('irons_spellbooks:devour')],
                [Spell.of('traveloptics:ashen_breath')]
            ).setSpellQuality(3, 3)
    })
})

EntityJSEvents.addGoalSelectors('cataclysm:deepling_brute', event => {
    const entity = event.getEntity();
    if (!entity || !entity.getTags().contains('spawn_by_nightguard')) {
        return;
    }
    event.arbitraryGoal(1, (e) => {
        return new WizardAttackGoal(e, 0.3, 45) // Parameters: entity, movement speed modifier, cast interval
            .setSpells(
                [Spell.of('traveloptics:coral_barrage'), Spell.of('traveloptics:rainfall'), Spell.of('traveloptics:tidal_grasp'), Spell.of('irons_spellbooks:ray_of_frost')],
                [Spell.of('traveloptics:rainfall')],
                [Spell.of('traveloptics:tidal_grasp')],
                [Spell.of('irons_spellbooks:ray_of_frost')]
            ).setSpellQuality(3, 3)
    })
})

EntityJSEvents.addGoalSelectors('graveyard:skeleton_creeper', event => {
    const entity = event.getEntity();
    if (!entity || !entity.getTags().contains('spawn_by_nightguard')) {
        return;
    }
    event.arbitraryGoal(1, (e) => {
        return new WizardAttackGoal(e, 0.3, 45) // Parameters: entity, movement speed modifier, cast interval
            .setSpells(
                [Spell.of('irons_spellbooks:chain_creeper'), Spell.of('irons_spellbooks:firecracker'), Spell.of('irons_spellbooks:electrocute'), Spell.of('alshanex_familiars:explosion_melody')],
                [Spell.of('irons_spellbooks:firecracker')],
                [Spell.of('irons_spellbooks:electrocute')],
                [Spell.of('alshanex_familiars:explosion_melody')]
            ).setSpellQuality(3, 3)
    })
})

function SpawnEntity(server, boss, level, id, name) {
    let entity = level.createEntity(id)
    entity.x = boss.x
    entity.y = boss.y
    entity.z = boss.z
    entity.maxHealth = 350
    entity.health = entity.maxHealth
    let nbt = entity.getNbt()
    nbt.putByte("IsBaby", 0)
    nbt.putString("DeathLootTable", "entities/empty")
    entity.setNbt(nbt)
    entity.setCustomName(Component.lightPurple(name))
    entity.addTag('spawn_by_nightguard')
    level.addFreshEntity(entity)
}
