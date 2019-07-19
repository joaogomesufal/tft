class Champion{
    constructor(id, key, name, origin, champion_class, cost, abilityStats, stats){
        this.id = id;
        this.key = key;
        this.name = name;
        this.origin = origin; 
        this.champion_class = champion_class;
        this.cost = cost;
        this.abilityStats = abilityStats;
        this.stats = stats;
        this.items = []
    }
}