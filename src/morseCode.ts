const promptSync = require('prompt-sync')({sigint: true});

let input : string | null = promptSync("Enter a string to convert to Morse Code: ");

const morseCodeMap : any = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    '!': '-.-.--',
    '-': '-....-',
    '/': '-..-.',
    '@': '.--.-.',
    '(': '-.--.',
    ')': '-.--.-',
    '=': '-...-',
    '+': '.-.-.',
    '\'': '.----.',
    '"': '.-..-.',
    ':': '---...',
    ';': '-.-.-.',
    '_': '..--.-',
    '$': '...-..-',
    ' ': '/'
};

const strgToMorse = (strg: string | null) => {
    if (strg) {
        let morseCode = '';
        for (let i = 0; i < strg.length; i++) {
            let char = strg[i].toLowerCase();
            if (morseCodeMap[char]) {
                morseCode += morseCodeMap[char];
                morseCode += ' ';
            }
        }
        return morseCode.trim();
    } else {
        return 'No input provided';
    }
}

const morseCode = strgToMorse(input);

console.log(input);
console.log(morseCode);
