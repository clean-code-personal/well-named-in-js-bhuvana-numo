import { getColorFromPairNumber } from './colorMapping.js';

function printReferenceManual() {
    const minorSize = 5; // MinorColorNames.length
    const majorSize = 5; // MajorColorNames.length

    console.log("Pair Number | Major Color | Minor Color");
    console.log("----------------------------------------");

    for (let pairNumber = 1; pairNumber <= majorSize * minorSize; pairNumber++) {
        const { majorColor, minorColor } = getColorFromPairNumber(pairNumber);
        console.log(`${pairNumber.toString().padEnd(12)}| ${majorColor.padEnd(11)}| ${minorColor}`);
    }
}

export { printReferenceManual };
