EntityEvents.hurt(event => {
    // 由于怪物互殴也会崩溃，这里就不判断伤害来源是不是玩家了
    if (event.entity.type !== 'minecraft:player') {
        event.entity.attributes.getSyncableAttributes().forEach(instance => {
            const modifiers = instance.modifiers;
            modifiers.forEach(modifier => {
                //event.server.runCommand(`/say modifier name:${modifier.getName()}`);
                // 硬编码修复傻逼史诗战斗崩溃 移除史诗战斗重复添加的modifier
                if (modifier.getName()=== 'Armor modifier' || modifier.getName()=== 'epicfight:weapon_modifier' || modifier.getName()=== 'Weapon modifier') {
                    //event.server.runCommand(`/say delete modifier:${modifier.getName()}`);
                    instance.removeModifier(modifier.getId())
                }
            })
        })
    }
})

EntityEvents.death(event => {
    // 实体死亡的时候也兜底一下
    if (event.entity.type !== 'minecraft:player') {
        event.entity.attributes.getSyncableAttributes().forEach(instance => {
            const modifiers = instance.modifiers;
            modifiers.forEach(modifier => {
                if (modifier.getName()=== 'Armor modifier' || modifier.getName()=== 'epicfight:weapon_modifier' || modifier.getName()=== 'Weapon modifier') {
                    instance.removeModifier(modifier.getId())
                }
            })
        })
    }
})