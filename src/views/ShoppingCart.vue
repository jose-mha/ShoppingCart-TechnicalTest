<template>
    <v-container>
        <h1>Shopping Cart</h1>
        <added-items />
    </v-container>
</template>

<script>
// @ is an alias to /src
//import api from '@/api'
import AddedItems from '@/components/AddedItems'

export default {
    name: 'ShoppingCart',
    components: {
        AddedItems
    }
}
</script>
