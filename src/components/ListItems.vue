<template>
    <v-row class="text-center">
        <v-col cols="12">
            <v-item-group>
                <v-container>
                    <h1>Product List</h1>
                    <v-row v-if="items.length > 0">
                        <v-col
                            v-for="item in items"
                            :key="item.id"
                            cols="12"
                            md="3"
                        >
                            <v-item>
                                <individual-item
                                    :item="item"
                                    :itIsAdded="false"
                                />
                            </v-item>
                        </v-col>
                    </v-row>
                </v-container>
            </v-item-group>
        </v-col>
    </v-row>
</template>

<script>
import IndividualItem from '@/components/IndividualItem'

export default {
    name: 'ListItems',
    components: {
        IndividualItem
    },
    props: {
        items: {
            type: Array,
            default: () => []
        }
    }
}
</script>
