const APPLE_CONST = 'Red Apples'
const addition = (...e) => {
    return e.reduce((acc, i) => {
        return acc + i
    })
}

const subtraction = (...e) => {
    return e.reduce((acc, i) => {
        return acc - i
    })
}
module.exports = { APPLE_CONST, addition, subtraction }