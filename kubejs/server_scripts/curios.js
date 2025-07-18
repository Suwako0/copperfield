let $CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi')

ItemEvents.foodEaten(event => {
    const player = event.player;
    const item = event.item;
    const foodId = item.getId();
    if (foodId === 'youkaishomecoming:seven_colored_yokan') {
        if ($CuriosApi.getSlotHelper().getSlotsForType(player, 'ring') < 10) {
            $CuriosApi.getSlotHelper().growSlotType('ring', 1, player)
            player.tell(Text.gold('[CopperfieldCore]你已经增加了一个戒指栏位!'));
        } else {
            player.tell(Text.red('[CopperfieldCore]戒指栏位已经上限了...'));
        }
    }
    if (foodId === 'youkaishomecoming:volcano_roll') {
        if ($CuriosApi.getSlotHelper().getSlotsForType(player, 'necklace') < 5) {
            $CuriosApi.getSlotHelper().growSlotType('necklace', 1, player)
            player.tell(Text.gold('[CopperfieldCore]你已经增加了一个项链栏位!'));
        } else {
            player.tell(Text.red('[CopperfieldCore]项链栏位已经上限了...'));
        }
    }
});

ServerEvents.loaded(event => {
    const server = event.server;
    server.runCommandSilent('/gamerule keepInventory true');
    server.runCommandSilent('/gamerule commandBlockOutput false');
});