<script setup>
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js"
import { onMounted, ref } from "vue";
import {useRouter} from "vue-router"


const router = useRouter();
const products = ref([])

const loadNotes = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    products.value = querySnapshot.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    })
    console.log(products.value)
}

onMounted(() => {
    loadNotes();
})

const navigateToDetails = (id) => {
    router.push(`/product/uugu`)
}

</script>

<template>
    <v-card v-for="product in products" variant="outlined" width="25%" height="290px" class="card" @click="navigateToDetails(product.id)">

        <div>

            <v-img :src="product.images[0]" max-height="180px" height="200px"></v-img>
        </div>
        <v-card-actions>
            <v-btn prepend-icon="mdi-vuetify" variant="tonal">
                Button
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<style scoped>

.card {
  margin: 1%;
}
</style>