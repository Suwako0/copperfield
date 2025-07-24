EntityEvents.hurt(event => {
    if (event.entity.type !== 'minecraft:player') {
        event.entity.attributes.getSyncableAttributes().forEach(instance => {
            const modifiers = instance.modifiers;
            modifiers.forEach(modifier => {
                //event.server.runCommand(`/say modifier name:${modifier.getName()}`);
                //硬编码修复傻逼史诗战斗崩溃
                if (modifier.getName()=== 'Armor modifier' || modifier.getName()=== 'epicfight:weapon_modifier' || modifier.getName()=== 'Weapon modifier') {
                    //event.server.runCommand(`/say delete modifier:${modifier.getName()}`);
                    instance.removeModifier(modifier.getId())
                }
                //instance.removeModifier(modifier.getId())
            })
        })
    }
})

EntityEvents.death(event => {
    if (event.entity.type === 'minecraft:zombie') {
        event.entity.attributes.getSyncableAttributes().forEach(instance => {
            const modifiers = instance.modifiers;
            modifiers.forEach(modifier => {
                instance.removeModifier(modifier.getId())
            })
        })
    }
})