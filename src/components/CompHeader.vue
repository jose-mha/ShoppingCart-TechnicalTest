<template>
    <v-app-bar app color="primary" dark>
        <div class="d-flex align-center">
            <v-icon x-large class="fa fa-cart-plus fa-6" aria-hidden="true">
            </v-icon>
            <router-link :to="{ name: 'Home' }">
                <span class="white--text font-weight-medium"
                    >Shopping Cart</span
                >
            </router-link>
        </div>

        <v-spacer></v-spacer>

        <v-badge :content="quantityItems" color="green" overlap>
            <router-link :to="{ name: 'ShoppingCart' }">
                <v-icon
                    x-large
                    class="fa fa-shopping-cart"
                    aria-hidden="true"
                ></v-icon>
            </router-link>
        </v-badge>
    </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'CompHeader',
    computed: {
        ...mapGetters(['quantityItems'])
    },
    data() {
        return {}
    },
    created() {}
}
</script>
