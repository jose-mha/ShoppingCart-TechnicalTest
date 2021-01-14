<template>
    <v-container>
        <router-view />
        <added-items />
        <list-items :items="items" />
        <template>
            <div class="text-center">
                <v-snackbar v-model="snackbar" :timeout="timeout">
                    {{ text }}

                    <template v-slot:action="{ attrs }">
                        <v-btn
                            color="blue"
                            text
                            v-bind="attrs"
                            @click="snackbar = false"
                        >
                            Close
                        </v-btn>
                    </template>
                </v-snackbar>
            </div>
        </template>
    </v-container>
</template>

<script>
// @ is an alias to /src
import api from '@/api'
import AddedItems from '@/components/AddedItems'
import ListItems from '@/components/ListItems'

export default {
    name: 'Home',
    components: {
        AddedItems,
        ListItems
    },
    data() {
        return {
            items: [],
            snackbar: false,
            text: 'Error al conectarse con el servidor',
            timeout: 5000
        }
    },
    created() {
        api.getItems()
            .then(items => (this.items = items))
            .catch(error => {
                this.snackbar = true
                console.log('Request failed:', error)
            })

        this.snackbar = false
    }
}
</script>
