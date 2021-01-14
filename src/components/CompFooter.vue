<template>
    <v-footer dark padless>
        <v-card class="flex" flat tile>
            <v-card-text class="py-2 white--text text-center">
                {{ new Date().getFullYear() }} —
                <strong>Shopping Cart</strong> -
                <router-link :to="{ name: 'About' }">
                    About
                </router-link>
            </v-card-text>
        </v-card>
    </v-footer>
</template>
