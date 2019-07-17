<template>
    <v-container id="champions">
        <v-layout row wrap>
            <v-flex  md3 mb-2 v-for="(champion, index) in champions" v-bind:key="'c' + index">
                <img  alt="">
                <div class="champion"  
                    :style="getStyle(champion.key)">
                    <div class="champion-content">
                    
                        <h3>{{ champion.name }}</h3>
                       
                        <h5>Atributos: </h5>
                        <v-chip color="green" dark>
                            Vida: {{champion.stats.defense.health}}
                        </v-chip>

                        <v-chip color="red" dark>
                            DPS.: {{champion.stats.offense.dps}}
                        </v-chip>

                        <hr>
                        <h5>Origem: </h5>
                        <v-chip v-for="(origin, index) in champion.origin" v-bind:key="'o' + index">
                            {{ origin }}
                        </v-chip>
                        
                        <hr>
                        <h5>Classes: </h5>
                        <v-chip v-for="(champion_class, index) in champion.class" v-bind:key="'c' + index">
                            {{ champion_class }}
                        </v-chip>

                        <hr>
                        <h5>Itens: </h5>
                        <v-chip v-for="(item, index) in champion.items" v-bind:key="'i' + index">
                            {{ item }}
                        </v-chip>
                    </div>
                </div>
            </v-flex>
        </v-layout>
        
    </v-container>
</template>

<script>
    import champions from '../data/champions.js'
    export default {
        data() {
            return {
                champions: []
            }
        },

        created() {
            this.champions = champions
        },

        methods: {
            getStyle(name) {
                return { 
                    'background':  `linear-gradient(to top, rgba(50, 180, 120, .8), rgba(40, 40, 40, .8)), url('http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg')` 
                }
            },

            getChampionsByOrigin(origin) {

            }
        }
        


    }
</script>

<style lang="css">
    .champion  {
        color: #fff;
        background-position: right top;
        background-repeat: no-repeat;
        margin: 4px;
        padding: 4px 10px;
        border-radius: 4px;
    }

    .champion h3 {
        font-size: 24px;
        margin: 20px  0px;
        padding-left: 10px;
        border-left: 8px solid #4CAF50;
    }

    .champion hr {
        display: block; height: 1px;
        border: 0; border-top: 1px dashed rgba(255, 255, 255, .4);
        margin: 1em 0; padding: 0;
    }

    .champion p {
        display: block;
        margin: 0.4em 0; padding: 0;
        font-size: 11px;
    }
</style>
