EntityJSEvents.modifyEntity(event => {
    // 2. 只处理僵尸实体
    event.modify('minecraft:zombie', builder => {
        // 3. 添加实体加入世界时的初始化逻辑
        builder.onAddedToWorld(entity => {
            // 初始化持久化数据
            entity.persistentData.lastMainHand = entity.mainHandItem.id
            entity.persistentData.lastOffHand = entity.offHandItem.id
            entity.persistentData.cleanupCooldown = 0
        })
        
        // 4. 添加实体tick逻辑
        builder.onTick(entity => {
            // 5. 使用冷却机制减少性能开销
            if (entity.persistentData.cleanupCooldown > 0) {
                entity.persistentData.cleanupCooldown--
                return
            }
            
            // 6. 检查主手物品变更
            if (entity.mainHandItem.id !== entity.persistentData.lastMainHand) {
                cleanDuplicateModifiers(entity, 'mainhand')
                entity.persistentData.lastMainHand = entity.mainHandItem.id
            }
            
            // 7. 检查副手物品变更
            if (entity.offHandItem.id !== entity.persistentData.lastOffHand) {
                cleanDuplicateModifiers(entity, 'offhand')
                entity.persistentData.lastOffHand = entity.offHandItem.id
            }
            
            // 8. 设置冷却时间 (10 ticks = 0.5秒)
            entity.persistentData.cleanupCooldown = 10
        })
    })
})

// 9. 清理重复修饰符的函数
function cleanDuplicateModifiers(entity, slot) {
    const attributes = [
        'generic.attack_damage',
        'generic.attack_speed',
        'generic.armor',
        'generic.armor_toughness'
    ]
    
    attributes.forEach(attrId => {
        const attribute = entity.getAttribute(attrId)
        if (!attribute) return
        
        const modifiers = attribute.getModifiers()
        const uniqueIds = new Set()
        let duplicatesFound = false
        
        // 10. 查找并移除重复修饰符
        modifiers.forEach(mod => {
            const modId = mod.id.toString()
            if (uniqueIds.has(modId)) {
                attribute.removeModifier(mod.id)
                duplicatesFound = true
                console.log(`[修复] 从 ${entity} 移除重复属性修饰符: ${modId}`)
            } else {
                uniqueIds.add(modId)
            }
        })
        
        // 11. 调试信息
        if (duplicatesFound) {
            console.log(`[修复] 清理 ${entity} 的 ${attrId} 属性 (${slot})`)
        }
    })
}