<template>
    <v-container id="champions">
        <v-layout row>
            <v-flex md4 lg-2>
                <v-select
                :items="Object.keys(origins)"
                v-model="origin"
                label="Selecione uma origem"
                >
                </v-select>
            </v-flex>
        </v-layout>
        <champions-by-origin :origin="origin"></champions-by-origin>        
    </v-container>
</template>

<script>
    import champions_list from '../data/champions.js'
    import items_list from '../data/items.js'
    import origins_list from '../data/origins.js'
    import ChampionsByOrigin from './ChampionsByOrigin'

    export default {
        components: {
            ChampionsByOrigin
        },

        data() {
            return {
                champions: champions_list,
                origins: origins_list,
                items: items_list,
                champions_result: [],
                origin: 'wild'
            }
        },

    }
</script>

