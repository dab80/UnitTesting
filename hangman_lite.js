function hangManVeryLite (guess, word) {
    // return (word.match(/$guess/g) || []).length
    return word.split(guess).length - 1;
}

// console.log(hangManVeryLite("", "IronYard"))

module.exports = hangManVeryLite;