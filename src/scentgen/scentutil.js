const scentTypes = {
    "noun": 1,
    "adjective": 2
}

const scents = {
    "Fireside": [scentTypes.noun, scentTypes.adjective],
    "Marshmallow": [scentTypes.noun, scentTypes.adjective],
    "Pumpkin": [scentTypes.noun, scentTypes.adjective],
    "Spice": [scentTypes.noun],
    "Chestnut": [scentTypes.noun, scentTypes.adjective],
    "Clove": [scentTypes.noun],
    "Leaves": [scentTypes.noun],
    "Autumn": [scentTypes.noun, scentTypes.adjective],
    "Glow": [scentTypes.noun],
    "Glowing": [scentTypes.adjective],
    "Warm": [scentTypes.adjective],
    "Sweater": [scentTypes.noun, scentTypes.adjective],
    "Weather": [scentTypes.noun],
    "Cocoa": [scentTypes.noun],
    "Salted": [scentTypes.adjective],
    "Caramel": [scentTypes.noun, scentTypes.adjective],
    "Hot": [scentTypes.adjective],
    "Woods": [scentTypes.noun, scentTypes.adjective],
    "Forest": [scentTypes.noun, scentTypes.adjective],
    "Latte": [scentTypes.noun],
    "Coffee": [scentTypes.noun, scentTypes.adjective],
    "Cozy": [scentTypes.adjective],
    "Sunlight": [scentTypes.noun],
    "Sunlit": [scentTypes.adjective],
    "Apple": [scentTypes.noun, scentTypes.adjective],
    "Sweet": [scentTypes.adjective],
    "Cinnamon": [scentTypes.noun, scentTypes.adjective],
    "Crisp": [scentTypes.noun, scentTypes.adjective],
    "Morning": [scentTypes.noun, scentTypes.adjective],
    "Afternoon": [scentTypes.noun, scentTypes.adjective],
    "Orchard": [scentTypes.noun, scentTypes.adjective],
    "Fall": [scentTypes.noun, scentTypes.adjective],
    "Vanilla": [scentTypes.noun, scentTypes.adjective],
    "Moon": [scentTypes.noun, scentTypes.adjective],
    "Pie": [scentTypes.noun],
    "Cider": [scentTypes.noun, scentTypes.adjective],
    "Acorn": [scentTypes.noun, scentTypes.adjective],
    "Flannel": [scentTypes.noun, scentTypes.adjective],
    "Harvest": [scentTypes.noun, scentTypes.adjective],
    "Golden": [scentTypes.adjective],
    "Moonlit": [scentTypes.adjective],
    "Moonlight": [scentTypes.noun],
    "Gathering": [scentTypes.noun],
    "Wreath": [scentTypes.noun],
    "Night": [scentTypes.noun],
    "Perfect": [scentTypes.adjective],
    "Farmstand": [scentTypes.noun, scentTypes.adjective],
    "Pecan": [scentTypes.noun, scentTypes.adjective],
    "Waffles": [scentTypes.noun],
    "Gathering": [scentTypes.noun],
    "Cream": [scentTypes.noun, scentTypes.adjective],
    "Blessed": [scentTypes.adjective],
    "Fig": [scentTypes.adjective, scentTypes.noun],
    "Wreath": [scentTypes.noun],
    "Amber": [scentTypes.adjective],
    "Patchouli": [scentTypes.adjective],
    "McIntosh": [scentTypes.adjective],
    "Home": [scentTypes.noun],
    "Bonfire": [scentTypes.noun],
    "Toasted": [scentTypes.adjective],
    "Cozy": [scentTypes.adjective],
    "Mulled": [scentTypes.adjective],
    "Maple": [scentTypes.adjective],
    "Pancakes": [scentTypes.noun],
    "Fresh": [scentTypes.adjective],
    "Foliage": [scentTypes.noun],
    "Sunset": [scentTypes.noun],
    "Feast": [scentTypes.noun],
    "Embers": [scentTypes.noun],
    "Buttered": [scentTypes.adjective],
    "Smore": [scentTypes.noun],
    "Donut": [scentTypes.noun],
    "Homesick": [scentTypes.adjective],
    "Cranberry": [scentTypes.adjective, scentTypes.noun]
};

export const adjectives = Object.keys(scents).reduce((accumulator, scent) => {
    if (scents[scent].includes(scentTypes.adjective)) {
        accumulator.push(scent);
    }
    return accumulator;
}, []);

export const nouns = Object.keys(scents).reduce((accumulator, scent) => {
    if (scents[scent].includes(scentTypes.noun)) {
        accumulator.push(scent);
    }
    return accumulator;
}, []);

function randomAdjective(exclude = null) {
    if (exclude) {
        let generated = exclude;
        while (generated === exclude)
        {
            generated = adjectives[Math.floor(Math.random() * adjectives.length)];
        }
        return generated;
    }
    else {
        return adjectives[Math.floor(Math.random() * adjectives.length)];
    }
}

function randomNoun() {
    return nouns[Math.floor(Math.random() * nouns.length)];
}

export function generateScent() {
    const adj1 = randomAdjective();
    const adj2 = randomAdjective(adj1);
    const noun = randomNoun();
    return `${randomAdjective()} ${randomAdjective()} ${randomNoun()}`;
}