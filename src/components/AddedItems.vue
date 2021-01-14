<template>
    <v-row class="text-center">
        <v-col cols="12">
            <v-item-group>
                <v-container v-if="quantityItems > 0">
                    <v-row no-gutters>
                        <template>
                            <v-col>
                                <div
                                    class="d-flex justify-start subtitle-1"
                                ></div>
                            </v-col>
                            <v-col class="d-flex justify-end">
                                <div width="240" class="blue darken-1 ">
                                    <h1 class="white--text">
                                        Total: {{ total | price$ }}
                                    </h1>
                                </div>
                            </v-col>
                        </template>
                    </v-row>
                    <v-row>
                        <v-col
                            v-for="item in items"
                            :key="item.id"
                            cols="12"
                            md="3"
                        >
                            <v-item>
                                <individual-item
                                    :item="item"
                                    :itIsAdded="true"
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
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'AddedItems',
    data: () => ({}),
    components: {
        IndividualItem
    },
    computed: {
        ...mapState(['items']),
        ...mapGetters(['total', 'quantityItems'])
    },
    inject: {
        theme: {
            default: { isDark: false }
        }
    }
}
</script>
