import { timingSafeEqual } from "crypto";

class Item{
    constructor(key, image, name, type, bonus, tier, depth, itemStats){
        this.key = key;
        this.image = image;
        this.name = name;
        this.type = type;
        this.bonus = bonus;
        this.tier = tier;
        this.depth = depth;
        this.itemStats = itemStats;
    }
}

class ItemStats{
    constructor(name, title, amount){
        this.name = name;
        this.title = title;
        this.amount = amount;
    }
}