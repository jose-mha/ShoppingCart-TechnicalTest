<template>
    <v-app>
        <v-main>
            <comp-header />
            <router-view />
        </v-main>
        <comp-footer />
    </v-app>
</template>

<script>
import CompHeader from '@/components/CompHeader'
import CompFooter from '@/components/CompFooter'

export default {
    name: 'App',

    components: {
        CompHeader,
        CompFooter
    }
}
</script>
