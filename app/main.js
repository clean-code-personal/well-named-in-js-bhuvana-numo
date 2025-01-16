import { getColorFromPairNumber, getPairNumberFromColor } from './colorMapping.js';
import { printReferenceManual } from './referenceManual.js';

function test() {
    let pairNumber = 4;
    let testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber}, [Out] Colors: ${JSON.stringify(testPair1)}`);
    console.assert(testPair1.majorColor === "WHITE");
    console.assert(testPair1.minorColor === "BROWN");

    pairNumber = 5;
    testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber}, [Out] Colors: ${JSON.stringify(testPair1)}`);
    console.assert(testPair1.majorColor === "WHITE");
    console.assert(testPair1.minorColor === "SLATE");

    let testPair2 = { majorColor: "YELLOW", minorColor: "GREEN" };
    pairNumber = getPairNumberFromColor(testPair2);
    console.log(`[In]Colors: ${JSON.stringify(testPair2)}, [Out] Pair Number: ${pairNumber}`);
    console.assert(pairNumber === 18);

    console.log("\nReference Manual:");
    printReferenceManual();
}

test();

