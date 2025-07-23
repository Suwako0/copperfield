EntityJSEvents.attributes(event => {
    // 1. 修复僵尸实体的属性冲突
    event.modify('minecraft:zombie', attribute => {
        // 定义需要修复的属性列表
        const attributesToFix = [
            "minecraft:generic.attack_damage",
            "minecraft:generic.attack_speed",
            "minecraft:generic.armor",
            "minecraft:generic.armor_toughness"
        ];
        
        // 遍历每个需要修复的属性
        attributesToFix.forEach(attr => {
            
            // 添加一个固定值的属性修饰符（覆盖原有值）
            attribute.add(attr, getSafeValue(attr));
            
            // 调试信息
            console.log(`[修复] 僵尸属性 ${attr} 已设置为: ${getSafeValue(attr)}`);
        });
    });
    
    // 2. 可选：添加其他可能受影响的实体
    const affectedEntities = [
        'minecraft:skeleton',
        'minecraft:zombified_piglin',
        'minecraft:piglin',
        'minecraft:drowned'
    ];
    
    affectedEntities.forEach(entityType => {
        event.modify(entityType, attribute => {
            attribute.add("minecraft:generic.attack_damage", 2);
        });
    });
});

// 获取安全属性值函数
function getSafeValue(attributeName) {
    // 安全默认值映射
    const safeDefaults = {
        "minecraft:generic.attack_damage": 2.0,
        "minecraft:generic.attack_speed": 0.25,
        "minecraft:generic.armor": 0.0,
        "minecraft:generic.armor_toughness": 0.0
    };
    
    return safeDefaults[attributeName] || 0.0;
}