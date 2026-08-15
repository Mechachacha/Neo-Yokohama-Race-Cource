ServerEvents.recipes(neoyoko => {
    neoyoko.remove({id: /mekmm:compat\/appflux.*/})
    neoyoko.remove({id: /mekmm:compat\/advanced_ae.*/})
    neoyoko.remove({id: /mekmm:compat\/ae2.*/})
    neoyoko.remove({id: /mekmm:compat\/extendedae.*/})
    neoyoko.remove({id: /mekmm:compat\/megacells.*/})

    neoyoko.remove({input: 'mysticalagriculture:rubber_essence'})
    neoyoko.shaped('4x industrialforegoing:dryrubber', ['   ', 'AAA', '   '], {
        A: 'mysticalagriculture:rubber_essence'
    })

    neoyoko.custom({
        type: 'mysticalagriculture:infusion',
        input: { item: "mysticalagriculture:prosperity_seed_base" },
        ingredients: [
            { item: "industrialforegoing:dryrubber" },
            { item: "mysticalagriculture:prudentium_essence" },
            { item: "industrialforegoing:dryrubber" },
            { item: "mysticalagriculture:prudentium_essence" },
            { item: "industrialforegoing:dryrubber" },
            { item: "mysticalagriculture:prudentium_essence" },
            { item: "industrialforegoing:dryrubber" },
            { item: "mysticalagriculture:prudentium_essence" }
        ],
        result: { id: "mysticalagriculture:rubber_seeds" }
    })

    function essenceCircle(result, essenceType) {
        neoyoko.shaped(result, ['aaa', 'a a', 'aaa'], { a: `mysticalagriculture:${essenceType}_essence` })
    }

    essenceCircle('6x silentgear:azure_silver_ingot', 'azure_silver')
    essenceCircle('6x silentgear:crimson_iron_ingot', 'crimson_iron')
    essenceCircle('3x extendedae:entro_crystal', 'entro')

    /**
      * XyCraft Extractor レシピを登録する
      *
      * output   : 出力アイテム
      * target   : Extractorの対象ブロック
      * adjacent : 対象ブロックの周囲に必要なブロック
      * catalyst  : 触媒
      * ticks     : 処理時間
      * id        : 同じ出力のレシピを区別するためのID
      * directions: 有効な方向
      */
    function extractor({
        output,
        target,
        adjacent = [],
        catalyst,
        ticks,
        id,
        directions
    }) {
        const recipe = {
            type: "xycraft_machines:extractor",

            target: blockRule(target),

            adjacent: adjacent.map(block => blockRule(block)),

            output: {
                id: output,
                count: 1
            },

            ticks: ticks
        }

        if (catalyst) {
            recipe.catalyst = catalyst
        }

        if (directions) {
            recipe.valid_directions = directions
        }

        const recipeName = id
            ? `${output.split(":").pop()}_${id}`
            : output.split(":").pop()

        neoyoko.custom(recipe)
            .id(`kubejs:xycraft/extractor/${recipeName}`)
    }


    /**
      * 通常のブロックを対象にするルール
      */
    function blockRule(block) {
        return {
            predicate_type: "xycraft_core:block_rule",
            block: block
        }
    }


    /**
      * 液体の種類を対象にするルール
      */
    function fluidTypeRule(fluid) {
        return {
            predicate_type: "xycraft_core:fluid_type_rule",
            fluid_type: fluid
        }
    }


    // ============================================================
    // Xychorium Gem
    // ============================================================

    // Blue Xychorium Gem
    extractor({
        output: "xycraft_world:xychorium_gem_blue",

        target: "minecraft:obsidian",

        adjacent: [
            "xycraft_world:xychorium_storage_blue",
            "xycraft_world:xychorium_storage_blue",
            "xycraft_world:xychorium_storage_blue",
            "xycraft_world:xychorium_storage_blue"
        ],

        catalyst: fluidTypeRule("minecraft:lava"),

        ticks: 10
    })


    // Green Xychorium Gem
    extractor({
        output: "xycraft_world:xychorium_gem_green",

        target: "minecraft:obsidian",

        adjacent: [
            "xycraft_world:xychorium_storage_green",
            "xycraft_world:xychorium_storage_green",
            "xycraft_world:xychorium_storage_green",
            "xycraft_world:xychorium_storage_green"
        ],

        catalyst: fluidTypeRule("minecraft:lava"),

        ticks: 10
    })


    // Red Xychorium Gem
    extractor({
        output: "xycraft_world:xychorium_gem_red",

        target: "minecraft:obsidian",

        adjacent: [
            "xycraft_world:xychorium_storage_red",
            "xycraft_world:xychorium_storage_red",
            "xycraft_world:xychorium_storage_red",
            "xycraft_world:xychorium_storage_red"
        ],

        catalyst: fluidTypeRule("minecraft:lava"),

        ticks: 10
    })


    // Dark Xychorium Gem
    extractor({
        output: "xycraft_world:xychorium_gem_dark",

        target: "minecraft:obsidian",

        adjacent: [
            "xycraft_world:xychorium_storage_dark",
            "xycraft_world:xychorium_storage_dark",
            "xycraft_world:xychorium_storage_dark",
            "xycraft_world:xychorium_storage_dark"
        ],

        catalyst: fluidTypeRule("minecraft:lava"),

        ticks: 10
    })


    // Light Xychorium Gem
    extractor({
        output: "xycraft_world:xychorium_gem_light",

        target: "minecraft:obsidian",

        adjacent: [
            "xycraft_world:xychorium_storage_light",
            "xycraft_world:xychorium_storage_light",
            "xycraft_world:xychorium_storage_light",
            "xycraft_world:xychorium_storage_light"
        ],

        catalyst: fluidTypeRule("minecraft:lava"),

        ticks: 10
    })


    // ============================================================
    // Flux Dust
    // ============================================================

    // Flux Dust - Flux Block
    extractor({
        output: "fluxnetworks:flux_dust",

        target: "appflux:charged_redstone_block",

        adjacent: [
            "minecraft:obsidian",
            "minecraft:obsidian",
            "minecraft:obsidian",
            "minecraft:obsidian"
        ],

        catalyst: blockRule("fluxnetworks:flux_block"),

        ticks: 5
    })


    // Flux Dust - Bedrock
    extractor({
        output: "fluxnetworks:flux_dust",

        id: "bedrock",

        target: "appflux:charged_redstone_block",

        adjacent: [
            "minecraft:obsidian",
            "minecraft:obsidian",
            "minecraft:obsidian",
            "minecraft:obsidian"
        ],

        catalyst: blockRule("minecraft:bedrock"),

        ticks: 5
    })


    // ============================================================
    // Mystical Agriculture
    // ============================================================

    // Soulstone Cobble
    extractor({
        output: "mysticalagriculture:soulstone_cobble",

        target: "mysticalagriculture:soulstone_cobble",

        catalyst: blockRule("mysticalagriculture:soulstone_smooth"),

        ticks: 30,

        directions: ["down"]
    })
})
