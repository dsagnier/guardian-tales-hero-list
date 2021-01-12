<template>
    <div class="home container">
        <HeroList/>
    </div>
</template>

<script>
// @ is an alias to /src
import HeroList from '@/components/HeroList.vue'

export default {
    name: 'Home',
    components: {
        HeroList
    }
}
</script>
