function alphabetizeString(str) {
    return str.split('').sort().join('');
}

// Example usage:
const exampleString = 'webmaster';
const sortedString = alphabetizeString(exampleString);
console.log(sortedString);
