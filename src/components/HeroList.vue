<template>
    <div class="herolist">
        <Portrait class="d-inline-flex p-2 bd-highlight" v-for="heros in heroes" v-bind:hero="heros" v-bind:key="heros.id"></Portrait>
    </div>
</template>

<script>

import Portrait from '@/components/Portrait.vue'

export default {
    name: 'HeroList',
    components : {
        Portrait
    },
    data() {
        return {
            heroes: [
                {
                    id: 1,
                    name: "plitvice",
                    fullName: "Plitvice",
                    formatImg: "jpg",
                    star: "3",
                    role: "guerrier",
                    element: "feu"
                },
                {
                    id: 2,
                    name: "lapice",
                    fullName: "Lapice",
                    formatImg: "jpg",
                    star: "3",
                    role: "guerrier",
                    element: "lumiere"
                },
                {
                    id: 3,
                    name: "marina",
                    fullName: "Marina",
                    formatImg: "jpg",
                    star: "3",
                    role: "tank",
                    element: "eau"
                },
                {
                    id: 4,
                    name: "arabelle",
                    fullName: "Arabelle",
                    formatImg: "jpg",
                    star: "3",
                    role: "distant",
                    element: "sombre"
                },
                {
                    id: 5,
                    name: "eva_idole",
                    fullName: "Eva Idole",
                    formatImg: "jpg",
                    star: "3",
                    role: "support",
                    element: "basique"
                },
                {
                    id: 6,
                    name: "bari",
                    fullName: "Bari",
                    formatImg: "jpg",
                    star: "3",
                    role: "distant",
                    element: "terre"
                },
                {
                    id: 7,
                    name: "lupina",
                    fullName: "Lupina",
                    formatImg: "jpg",
                    star: "3",
                    role: "guerrier",
                    element: "sombre"
                },
                {
                    id: 8,
                    name: "lahn",
                    fullName: "Lahn",
                    formatImg: "jpg",
                    star: "3",
                    role: "guerrier",
                    element: "basique"
                },
                {
                    id: 9,
                    name: "eugene",
                    fullName: "Eugene",
                    formatImg: "jpg",
                    star: "3",
                    role: "guerrier",
                    element: "lumiere"
                },
                {
                    id: 10,
                    name: "tinia",
                    fullName: "Tinia",
                    formatImg: "jpg",
                    star: "3",
                    role: "distant",
                    element: "terre"
                },
                {
                    id: 11,
                    name: "vishuvac",
                    fullName: "Vishuvac",
                    formatImg: "jpg",
                    star: "3",
                    role: "guerrier",
                    element: "feu"
                },
                {
                    id: 12,
                    name: "nari",
                    fullName: "Nari",
                    formatImg: "jpg",
                    star: "3",
                    role: "distant",
                    element: "basique"
                },
                {
                    id: 13,
                    name: "bianca",
                    fullName: "Bianca",
                    formatImg: "jpg",
                    star: "3",
                    role: "distant",
                    element: "eau"
                },
                {
                    id: 14,
                    name: "oghma",
                    fullName: "Oghma",
                    formatImg: "jpg",
                    star: "3",
                    role: "tank",
                    element: "sombre"
                },
                {
                    id: 15,
                    name: "alef",
                    fullName: "Alef",
                    formatImg: "jpg",
                    star: "3",
                    role: "guerrier",
                    element: "terre"
                },
                {
                    id: 16,
                    name: "miya",
                    fullName: "Miya",
                    formatImg: "jpg",
                    star: "3",
                    role: "support",
                    element: "feu"
                },
                {
                    id: 17,
                    name: "future_princesse",
                    fullName: "Princesse",
                    formatImg: "jpg",
                    star: "3",
                    role: "tank",
                    element: "lumiere"
                },
                {
                    id: 18,
                    name: "garam",
                    fullName: "Garam",
                    formatImg: "jpg",
                    star: "3",
                    role: "distant",
                    element: "eau"
                },
                {
                    id: 19,
                    name: "beth",
                    fullName: "Beth",
                    formatImg: "jpg",
                    star: "3",
                    role: "guerrier",
                    element: "sombre"
                },
                {
                    id: 20,
                    name: "rue",
                    fullName: "Rue",
                    formatImg: "jpg",
                    star: "3",
                    role: "guerrier",
                    element: "terre"
                },
                {
                    id: 21,
                    name: "gremory",
                    fullName: "Gremory",
                    formatImg: "jpg",
                    star: "2",
                    role: "distant",
                    element: "eau"
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
</style>
