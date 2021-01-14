import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: [],
        total: 0,
        quantityItems: 0
    },
    mutations: {
        addItem(state, item = {}) {
            if (state.items.length > 0) {
                let salida = state.items.map(i => {
                    return i.id == item.id
                })

                if (salida.includes(true)) {
                    let index = state.items.findIndex(i => i.id === item.id)

                    if (index != -1) {
                        state.items[index].quantity += 1
                    }
                } else {
                    state.items.push({ ...item, quantity: 1 })
                }
            } else {
                state.items.push({ ...item, quantity: 1 })
            }
        },
        removeItem(state, item) {
            let index = state.items.findIndex(i => i.id === item.id)

            if (index != -1) {
                state.items.splice(index, 1)
            }
        }
    },
    getters: {
        total: state => {
            return state.items.reduce((acum, item) => {
                if (item.quantity > 1) {
                    return acum + item.price * item.quantity
                } else {
                    return acum + item.price
                }
            }, 0)
        },
        quantityItems: state => {
            return state.items.reduce((total, item) => {
                return total + item.quantity
            }, 0)
        }
    }
})
