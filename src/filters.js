import numeral from 'numeral'

const priceFilter = function(value) {
    if (!value) {
        return '$ 0'
    }

    return numeral(value).format('($ 0.00)')
}

export { priceFilter }
