const url = 'http://localhost:1337'

function getItems() {
    return fetch(`${url}/items`)
        .then(res => res.json())
        .then(res => res.catalog)
}

export default {
    getItems
}
