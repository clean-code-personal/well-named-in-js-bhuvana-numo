const MajorColorNames = ["WHITE", "RED", "BLACK", "YELLOW", "VIOLET"];
const MinorColorNames = ["BLUE", "ORANGE", "GREEN", "BROWN", "SLATE"];

function getColorFromPairNumber(pairNumber) {
    const minorSize = MinorColorNames.length;
    const majorSize = MajorColorNames.length;

    if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
        throw `Argument PairNumber:${pairNumber} is outside the allowed range`;
    }

    const zeroBasedPairNumber = pairNumber - 1;
    const majorIndex = Math.floor(zeroBasedPairNumber / minorSize);
    const minorIndex = zeroBasedPairNumber % minorSize;

    return {
        majorColor: MajorColorNames[majorIndex],
        minorColor: MinorColorNames[minorIndex]
    };
}

function getPairNumberFromColor(pair) {
    const majorIndex = MajorColorNames.indexOf(pair.majorColor);
    const minorIndex = MinorColorNames.indexOf(pair.minorColor);

    if (majorIndex === -1 || minorIndex === -1) {
        throw `Unknown Colors: MajorColor:${pair.majorColor}, MinorColor:${pair.minorColor}`;
    }

    return majorIndex * MinorColorNames.length + (minorIndex + 1);
}

export { getColorFromPairNumber, getPairNumberFromColor };
