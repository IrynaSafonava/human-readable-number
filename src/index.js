module.exports = function toReadable (number) {
    const digits = ['zero','one','two','three','four',
    'five','six','seven','eight','nine']
    const teenths = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen',
    'seventeen','eighteen','nineteen']
    const dozens = ['','','twenty','thirty','forty','fifty',
    'sixty','seventy','eighty','ninety']
    const bignum = ['hundred', 'thousand','million', 'billion','trillion']

    let numberToStr = number.toString()
    let word = ""
    if (numberToStr.length === 3) {
        if (numberToStr.charAt(1) == 0 && numberToStr.charAt(2) == 0 ) {
            word = word + digits[numberToStr.charAt(0)] +' '+ bignum[0]
            return word.trimEnd() 
        } else if (numberToStr.charAt(1) == 0 ) {
            word = word + digits[numberToStr.charAt(0)] +' '+ bignum[0] + ' ' + digits[numberToStr.charAt(2)]
            return word.trimEnd() 
        } else if (numberToStr.charAt(1) == 1){
            word = word + digits[numberToStr.charAt(0)] +' '+ bignum[0] + ' ' + teenths[numberToStr.charAt(2)]
            return word.trimEnd() 
        } else if (numberToStr.charAt(2) == 0){
            word = word + digits[numberToStr.charAt(0)] +' '+ bignum[0] + ' ' + dozens[numberToStr.charAt(1)]
            return word.trimEnd()
        } else {
            word = word + digits[numberToStr.charAt(0)] +' '+ bignum[0] + ' ' 
                    + dozens[numberToStr.charAt(1)] + ' ' + digits[numberToStr.charAt(2)]
            return word.trimEnd()
        }
    }
    if (numberToStr.length === 2) {
        if (numberToStr.charAt(1) == 0 && numberToStr.charAt(0) != 1) {
            word = word + dozens[numberToStr.charAt(0)]
            return word.trimEnd()
        } else if (numberToStr.charAt(0) == 1){
            word = word + teenths[numberToStr.charAt(1)]
            return word.trimEnd()
        } else {
            word = word + dozens[numberToStr.charAt(0)] + ' ' + digits[numberToStr.charAt(1)]
            return word.trimEnd()
        }
    }
    if (numberToStr.length === 1) {
        word = word + digits[numberToStr.charAt(0)]
        return word.trimEnd() 
    }
}