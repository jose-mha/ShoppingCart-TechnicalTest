<template>
    <v-card class="mx-auto my-12" max-width="240">
        <v-img
            v-show="!isLoading"
            height="220"
            :src="`${item.imageURL}`"
        ></v-img>
        <v-progress-circular
            v-show="isLoading"
            :size="50"
            color="primary"
            indeterminate
        ></v-progress-circular>

        <v-card-title>
            {{ item.name }}
        </v-card-title>

        <v-divider class="mx-4"></v-divider>

        <v-card-text>
            <v-row no-gutters>
                <template>
                    <v-col>
                        <div class="d-flex justify-start subtitle-1">
                            {{ item.price | price$ }}
                        </div>
                    </v-col>
                    <v-col>
                        <div class="d-flex justify-end subtitle-1">
                            {{ item.quantity }}
                        </div>
                    </v-col>
                </template>
            </v-row>
        </v-card-text>

        <v-card-actions align="center">
            <v-btn
                v-if="!itIsAdded"
                @click="addItemToCart"
                class="white--text text-capitalize"
                color="blue darken-1"
                block
            >
                <i class="fa fa-plus" aria-hidden="true"></i>
                <span>item to cart</span>
            </v-btn>

            <v-btn
                v-else
                @click="removeItemToCart"
                class="white--text text-capitalize"
                color="red darken-2"
                block
            >
                <i class="fa fa-trash-o" aria-hidden="true"></i>
                <span>Remove item from cart</span>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
//import EventBus from '@/bus'

export default {
    name: 'IndividualItem',
    data() {
        return {
            isLoading: true
        }
    },
    props: {
        item: {
            type: Object,
            default: () => {}
        },
        itIsAdded: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        addItemToCart() {
            //EventBus.$emit('add-item', this.item)
            this.$store.commit('addItem', this.item)
        },
        removeItemToCart() {
            //EventBus.$emit('remove-item', this.item)
            this.$store.commit('removeItem', this.item)
        }
    },
    created() {
        this.isLoading = true
    },
    mounted() {
        this.isLoading = false
    }
}
</script>

<style scoped>
.v-progress-circular {
    margin: 1rem;
}
</style>
