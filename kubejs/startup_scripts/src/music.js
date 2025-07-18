StartupEvents.registry("sound_event", event => {
    event.create("copperfield:music.assumptions")
})

StartupEvents.registry("item", event => {
    event.create("copperfield:assumptions", "music_disc")
        .song("copperfield:music.assumptions", 218)
        .tag("music_discs")
        .texture('kubejs:item/assumptions')
        .maxStackSize(1)
})