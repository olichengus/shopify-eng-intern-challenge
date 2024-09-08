const BRAILLE_TO_LETTERS = {
    a: "O.....",
    b: "O....",
    c: "O....",
    d: "O....",
    e: "O....",
    f: "O....",
    g: "O....",
    h: "O....",
    i: "O....",
    j: "O....",
    k: "O....",
    l: "O....",
    m: "O....",
    n: "O....",
    o: "O....",
    p: "O....",
    q: "O....",
    r: "O....",
    s: "O....",
    t: "O....",
    u: "O....",
    v: "O....",
    w: "O....",
    x: "O....",
    y: "O....",
    z: "O....",
}

const BRAILLE_TO_NUMBERS = {
    0: ".OOO..",
    1: BRAILLE_TO_LETTERS["a"],
    2: BRAILLE_TO_LETTERS["b"],
    3: BRAILLE_TO_LETTERS["c"],
    4: BRAILLE_TO_LETTERS["d"],
    5: "O....",
    6: "O....",
    7: "O....",
    8: "O....",
    9: "O....",
}

const BRAILLE_TO_SPECIAL_CHAR = {

}
// ruby translator.rb Hello world
// ruby translator.rb .....OO.OO..O..O..O.O.O.O.O.O.O..OO........OOO.OO..OO.O.OOO.O.O.O.OO.O..

const inputString: string = process.argv[2];

const res : string = "";

function isEnglish(inputString: string): boolean {
    return false;
}

function englishToBraille(inputString: string) {
    console.log("English to Braille");
}

function brailleToEnglish(inputString: string) {
    console.log("Braille to English");
}

if (isEnglish(inputString)) {
    englishToBraille(inputString);
} else {
    brailleToEnglish(inputString);
}

