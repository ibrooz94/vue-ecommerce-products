import { createRouter, createWebHistory} from "vue-router";
import ProductsView from "../views/ProductsView.vue"
import ProductDetailView from "../views/ProductDetailView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: ProductsView
        },
        {
            path: "/product/:id",
            name: "product",
            component: ProductDetailView
        },
    ]
})

export default router