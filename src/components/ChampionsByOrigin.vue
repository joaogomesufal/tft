<template>
    <v-layout row wrap>
        <v-flex  md3 sm4 lg2 mb-2 v-for="(champion, index) in getChampionsByOrigin()" v-bind:key="'c' + index">
            
            <div class="champion"  
                :style="getStyle(champion.key)">
                <div class="champion-avatar">
                    <img :src="'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/' + champion.key + '.png'" alt=""></img>
                </div>
                <div class="champion-content">
                    <h3>{{ champion.name }}</h3>
                    <img src="" alt="">
                    <h5>Atributos: </h5>
                    <v-chip color="green" dark>
                        Vida: {{champion.stats.defense.health}}
                    </v-chip>
                    <v-chip color="red" dark>
                        DPS.: {{champion.stats.offense.dps}}
                    </v-chip>
                    <hr>
                    <h5>Origem: </h5>
                    <v-chip dark v-for="(origin, index) in champion.origin" v-bind:key="'o' + index">
                        {{ origin }}
                    </v-chip>
                    <hr>
                    <h5>Classes: </h5>
                    <v-chip dark v-for="(champion_class, index) in champion.class" v-bind:key="'c' + index">
                        {{ champion_class }}
                    </v-chip>
                    <hr>
                    <h5>Itens: </h5>
                    <img class="item-image" :src="getItemImage(item)" v-for="(item, index) in champion.items" v-bind:key="'i' + index">
                    
                </div>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>

import champions_list from '../data/champions.js'
import items_list from '../data/items.js'

export default {
    props: ['origin'],
    data() {
        return {
            champions: champions_list,
            champions_result: [],
            items: items_list
        }
    },
    methods: {
        getStyle(name) {
            return { 
                'background':  `linear-gradient(to top, rgba(20,20, 20, 1), rgba(40, 40, 40, .8)), url('http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg')` 
            }
        },

        getItemImage(item_key) {
            var images = require.context('../assets/', false, /\.png$/)
            if(images('./' + item_key + ".png")) {
                return images('./' + item_key + ".png")
            }
        },

        getAvatarImage(champion) {
            var images = require.context('../assets/', false, /\.png$/)
            if(images('./' + item_key + ".png")) {
                return images('./' + item_key + ".png")
            }
        },

        getChampionsByOrigin() {
            const result = [];
            Object.keys(this.champions).forEach((key) => {
                let origins = this.champions[key].origin
                let status = false
                origins.forEach((origin) => {
                    if( origin.toLowerCase() == this.origin) {
                        status = true
                    }
                })
                if(status) {
                    result.push(this.champions[key])
                }
                
            });

            return result;
        }
    }
        
}
</script>

<style lang="css">
    .champion .item-image {
        width: 3em;
        height: 3em;
        margin: 2px;
        border-radius: 8px;
    }

    .champion-avatar {
        display: block;
        width: 100%;
        text-align: center;
        margin: 20px 0px 0px 0px;
    }

    .champion-avatar img {
        display: inline;
        border: 4px solid #4CAF50;
        border-radius: 50%;
    }

    .champion  {
        color: #fff;
        background-position: right top;
        background-repeat: no-repeat;
        margin: 4px;
        padding: 4px 10px;
        border-radius: 4px;
        position: relative;
        height: 100%;
    }

    .champion h3 {
        font-size: 24px;
        margin: 20px 0px 0px  0px;
        padding-left: 10px;
        border-left: 8px solid #4CAF50;
        background: rgba(40, 40, 40, .8);
    }

    .champion hr {
        display: block; height: 1px;
        border: 0; border-top: 1px dashed rgba(100, 100, 100, .8);
        margin: 1em 0; padding: 0;
    }

    .champion p {
        display: block;
        margin: 0.4em 0; padding: 0;
        font-size: 11px;
    }
</style>
