
const { getColorFromPairNumber, getPairNumberFromColor, ColorPair } = require('./colorPair');

function test() {
    let pairNumber = 4;
    let testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber}, [Out] Colors: ${testPair1}`);
    console.assert(testPair1.majorColor === "WHITE");
    console.assert(testPair1.minorColor === "BROWN");

    pairNumber = 5;
    testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber}, [Out] Colors: ${testPair1}`);
    console.assert(testPair1.majorColor === "WHITE");
    console.assert(testPair1.minorColor === "SLATE");

    let testPair2 = new ColorPair();
    testPair2.majorColor = "YELLOW";
    testPair2.minorColor = "GREEN";
    pairNumber = getPairNumberFromColor(testPair2);
    console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
    console.assert(pairNumber === 18);
}

test();
