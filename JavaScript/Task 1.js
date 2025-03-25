function reverseNumber(num) {
    const revStr = num.toString().split('').reverse().join('');
    const revNum = parseInt(revStr);
    return revNum;
}

const x = 32243;
const rev = revNum(x);
console.log(`Original number: ${x}`);
console.log(`Reversed number: ${rev}`);
