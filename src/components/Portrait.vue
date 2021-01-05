<template>
    <div class="portrait">
        <div id="hero" :style="{ backgroundImage: `url(${require('@/assets/heroes/'+path+'/' + heroName)})` }">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Portrait',
    props: ['heroName', 'path'],
    data() {
        return {
            backgroundImage: "3star"
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#hero {
    width: 80px;
    height: 80px;
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    display: block;
    border-radius: 50%;
    border: 5px solid #8005c7;
    position: relative;
    // background-image: url('~@/assets/heroes/beth.jpg');
}
</style>
