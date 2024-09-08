const BRAILLE_TO_LETTERS = {
    "a": "O.....",
    "b": "O.O...",
    "c": "OO....",
    "d": "OO.O..",
    "e": "O..O..",
    "f": "OOO...",
    "g": "OOOO..",
    "h": "O.OO..",
    "i": ".OO...",
    "j": ".OOO..",
    "k": "O...O.",
    "l": "O.O.O.",
    "m": "OO..O.",
    "n": "OO.OO.",
    "o": "O..OO.",
    "p": "OOO.O.",
    "q": "OOOOO.",
    "r": "O.OOO.",
    "s": ".OO.O.",
    "t": ".OOOO.",
    "u": "O...OO",
    "v": "O.O.OO",
    "w": ".OOO.O",
    "x": "OO..OO",
    "y": "OO.OOO",
    "z": "O..OOO",
    // symbols
    ".": "..OO.O",
    ",": "..O...",
    "?": "..O.OO",
    "!": "..OOO.",
    ":": "..OO..",
    ";": "..O.O.",
    "-": "....OO",
    "/": ".O..O.",
    "<": ".OO..O",
    ">": "O..OO.",
    "(": "O.O..O",
    ")": ".O.OO.",
    " ": "......"
}

const BRAILLE_TO_NUMBERS = {
    "1": BRAILLE_TO_LETTERS["a"],
    "2": BRAILLE_TO_LETTERS["b"],
    "3": BRAILLE_TO_LETTERS["c"],
    "4": BRAILLE_TO_LETTERS["d"],
    "5": BRAILLE_TO_LETTERS["e"],
    "6": BRAILLE_TO_LETTERS["f"],
    "7": BRAILLE_TO_LETTERS["g"],
    "8": BRAILLE_TO_LETTERS["h"],
    "9": BRAILLE_TO_LETTERS["i"],
    "0": BRAILLE_TO_LETTERS["j"],
}

const BRAILLE_SPECIAL = {
    "capital_follows": ".....O",
    "decimal_follows": ".O...O",
    "number_follows": ".O.OOO"
}
// ruby translator.rb Hello world
// ruby translator.rb .....OO.OO..O..O..O.O.O.O.O.O.O..OO........OOO.OO..OO.O.OOO.O.O.O.OO.O..
const inputArgs: string[] = process.argv.slice(2);
const inputString: string = inputArgs.join(" ");
let res : string = "";
let capitalFlag = false;
let numberFlag = false;
let decimalFlag = false;

function isBraille(inputString: string): boolean {
    return inputString.length % 6 == 0 && /^[.O]*$/.test(inputString);
}

function handleLetterToBraille(char: string) {
    if (/[A-Z]/.test(char)) {
        res = res + BRAILLE_SPECIAL["capital_follows"];
        char = char.toLowerCase();
    }
    res = res + BRAILLE_TO_LETTERS[char as keyof typeof BRAILLE_TO_LETTERS];
}

function englishToBraille(inputString: string) {
    for (let char of inputString) {
        if (char == " "){
            numberFlag = false;
            res = res + BRAILLE_TO_LETTERS[" "];
        } else if (isNaN(Number(char)) || char == " "){
            handleLetterToBraille(char);
        } else {
            if (!numberFlag){
                res = res + BRAILLE_SPECIAL["number_follows"];
                numberFlag = true;
            }
            res = res + BRAILLE_TO_NUMBERS[char as keyof typeof BRAILLE_TO_NUMBERS];
        }
    }
    console.log(res);
}

function brailleToEnglish(inputString: string) {
    console.log("Braille to English");
}

if (!isBraille(inputString)) {
    englishToBraille(inputString);
} else {
    brailleToEnglish(inputString);
}

