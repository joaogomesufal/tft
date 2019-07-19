class Ability{
    constructor(name, description, type, manaCost, manaStart){
        this.name = name;
        this.description = description;
        this.type = type;
        this.manaCost = manaCost;
        this.manaStart = manaStart;
        this.abilityStats = abilityStats;

    }
}

class AbilityStats{
    constructor(type, value){
        this.type = type;
        this.value = value;
    }
}

