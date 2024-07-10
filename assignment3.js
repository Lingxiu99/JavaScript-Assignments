// Task 1:
function boulevardsWithDe(arr) {
    return arr.filter(boulevard => boulevard.includes('de'));
}

const boulevardsInParis = [
    "Boulevards of Paris",
    "City walls of Paris",
    "Thiers wall",
    "Wall of Charles V",
    "Wall of Philip II Augustus",
    "City gates of Paris",
    "Haussmann's renovation of Paris",
    "Boulevards of the Marshals",
    "Boulevard Auguste-Blanqui",
    "Boulevard Barbès",
    "Boulevard Beaumarchais",
    "Boulevard de l'Amiral-Bruix",
    "Boulevard Mortier",
    "Boulevard Poniatowski",
    "Boulevard Soult",
    "Boulevard des Capucines",
    "Boulevard de la Chapelle",
    "Boulevard de Clichy",
    "Boulevard du Crime",
    "Boulevard du Général-d'Armée-Jean-Simon",
    "Boulevard Haussmann",
    "Boulevard de l'Hôpital",
    "Boulevard des Italiens",
    "Boulevard Lefebvre",
    "Boulevard de la Madeleine",
    "Boulevard de Magenta",
    "Boulevard Malesherbes",
    "Boulevard Marguerite-de-Rochechouart",
    "Boulevard Montmartre",
    "Boulevard du Montparnasse",
    "Boulevard Raspail",
    "Boulevard Richard-Lenoir",
    "Boulevard Saint-Germain",
    "Boulevard Saint-Michel",
    "Boulevard de Sébastopol",
    "Boulevard de Strasbourg",
    "Boulevard du Temple",
    "Boulevard Voltaire",
    "Boulevard de la Zone",
];

console.log(boulevardsWithDe(boulevardsInParis));

// Task 2:
function meanMedian(arr) {
    if (arr.length === 0) {
        return { mean: null, median: null };
    }

    const sum = arr.reduce((acc, num) => acc + num, 0);
    const mean = (sum / arr.length).toFixed(1);

    const sortedArr = arr.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedArr.length / 2);

    let median;
    if (sortedArr.length % 2 === 0) {
        median = ((sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2).toFixed(1);
    } else {
        median = sortedArr[middleIndex].toFixed(1);
    }

    return { mean: parseFloat(mean), median: parseFloat(median) };
}

const numbers = [2, 5, 3, 4, 1];
console.log(meanMedian(numbers)); 

const emptyArray = [];
console.log(meanMedian(emptyArray)); 
