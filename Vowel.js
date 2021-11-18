const Vowel = require('.');


console.log('Vowel retorna true para input "a"');
if (Vowel('a') === true) {
    console.log('OK');
} else {
    console.error('FAIL');

}

console.log('Vowel retorna false para input "c"');
if (Vowel('c') === false) {
    console.log('OK');
} else {
    console.error('FAIL');

}