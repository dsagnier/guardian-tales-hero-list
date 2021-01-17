<template>
    <div class="portrait d-flex flex-column">
        <div class="hero mx-auto" :style="{ backgroundImage: `url(${require('@/assets/heroes/'+hero.star+'star/' + hero.name +'.'+hero.formatImg)})`, border: '5px solid '+getElementColor(hero.element) }">
            <img class="role-icone" :src="require('@/assets/role/'+hero.role+'.png')" />
            <img class="element-icone" :src="require('@/assets/element/'+hero.element+'.png')" />
        </div>
        <star-rating default_value="3"></star-rating>
        <div class="hero-name" :style="{color: getElementColor(hero.element)}">{{hero.fullName}}</div>
    </div>
</template>

<script>
import starRating from '@/components/StarRating.vue'
export default {
    name: 'Portrait',
    props: ['hero'],
    components : {
        starRating
    },
    methods: {
        getElementColor(element) {
            if(element == "feu") {
                return '#cb3636';
            } else if(element == "eau") {
                return '#2d84bc';
            } else if(element == "terre") {
                return '#8f4f1a';
            } else if(element == "basique") {
                return '#bfbfbf';
            } else if(element == "lumiere") {
                return '#f5b800';
            } else if(element == "sombre") {
                return '#8005c7';
            } else {
                return '#ffffff';
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero {
    width: 80px;
    height: 80px;
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    display: block;
    border-radius: 50%;
    position: relative;
    // background-image: url('~@/assets/heroes/beth.jpg');
}
.role-icone {
    position: absolute;
    bottom: -5px;
    left: -5px;
    width: 25px;
}
.element-icone {
    position: absolute;
    bottom: -5px;
    right: -5px;
    width: 25px;
}
.hero-name {
    font: bold 1.1em "Arial";
}
</style>
