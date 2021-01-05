<template>
    <div class="home">
        <Portrait v-bind:heroName="'beth.jpg'" v-bind:path="'3star'"/>
        <Portrait v-bind:heroName="'garam.jpg'" v-bind:path="'3star'"/>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
// @ is an alias to /src
import Portrait from '@/components/Portrait.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        Portrait,
        HelloWorld
    }
}
</script>
