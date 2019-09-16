const scentTypes = {
    "noun": 1,
    "adjective": 2
}

const scents = {
    "Fireside": [scentTypes.noun, scentTypes.adjective],
    "Marshmallow": [scentTypes.noun, scentTypes.adjective],
    "Pumpkin": [scentTypes.noun, scentTypes.adjective],
    "Spice": [scentTypes.noun, scentTypes.adjective],
    "Chestnut": [scentTypes.noun, scentTypes.adjective],
    "Clove": [scentTypes.noun, scentTypes.adjective],
    "Leaves": [scentTypes.noun, scentTypes.adjective],
    "Autumn": [scentTypes.noun, scentTypes.adjective],
    "Glow": [scentTypes.noun, scentTypes.adjective],
    "Warm": [scentTypes.adjective],
    "Sweater": [scentTypes.noun, scentTypes.adjective],
    "Weather": [scentTypes.noun, scentTypes.adjective],
    "Cocoa": [scentTypes.noun, scentTypes.adjective],
    "Salted": [scentTypes.adjective],
    "Caramel": [scentTypes.noun, scentTypes.adjective],
    "Hot": [scentTypes.adjective],
    "Woods": [scentTypes.noun, scentTypes.adjective],
    "Forest": [scentTypes.noun, scentTypes.adjective],
    "Latte": [scentTypes.noun, scentTypes.adjective],
    "Coffee": [scentTypes.noun, scentTypes.adjective],
    "Cozy": [scentTypes.noun, scentTypes.adjective],
    "Sunlight": [scentTypes.noun, scentTypes.adjective],
    "Apple": [scentTypes.noun, scentTypes.adjective],
    "Sweet": [scentTypes.noun, scentTypes.adjective],
    "Cinnamon": [scentTypes.noun, scentTypes.adjective],
    "Crisp": [scentTypes.noun, scentTypes.adjective],
    "Morning": [scentTypes.noun, scentTypes.adjective],
    "Afternoon": [scentTypes.noun, scentTypes.adjective],
    "Orchard": [scentTypes.noun, scentTypes.adjective],
    "Fall": [scentTypes.noun, scentTypes.adjective],
    "Vanilla": [scentTypes.noun, scentTypes.adjective],
    "Moon": [scentTypes.noun, scentTypes.adjective],
    "Pie": [scentTypes.noun, scentTypes.adjective],
    "Cider": [scentTypes.noun, scentTypes.adjective],
    "Acorn": [scentTypes.noun, scentTypes.adjective],
    "Flannel": [scentTypes.noun, scentTypes.adjective],
    "Harvest": [scentTypes.noun, scentTypes.adjective],
    "Moonlit": [scentTypes.adjective],
    "Moonlight": [scentTypes.noun],
    "Gathering": [scentTypes.noun],
    "Wreath": [scentTypes.noun]
};

export const adjectives = Object.keys(scents).reduce((accumulator, scent) => {
    if (scents[scent].includes(scentTypes.adjective)){
        accumulator.push(scent);
    }
    return accumulator;
}, []);

export const nouns = Object.keys(scents).reduce((accumulator, scent) => {
    if (scents[scent].includes(scentTypes.noun)){
        accumulator.push(scent);
    }
    return accumulator;
}, []);

function randomAdjective() {
    return adjectives[Math.floor(Math.random() * adjectives.length)];
}

function randomNoun() {
    return nouns[Math.floor(Math.random() * nouns.length)];
}

export function generateScent() {
    return `${randomAdjective()} ${randomAdjective()} ${randomNoun()}`;
}