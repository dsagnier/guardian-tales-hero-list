<template>
    <div class="star-rating">
        <div class="star-level" v-for="rating_level in ratings_level" :key="rating_level" v-on:click="setLevel(rating_level)" v-on:mouseover="star_over_level(rating_level)" v-on:mouseout="star_out_level">
            <i class="bi bi-star-fill" :class="{'is-selected-level': ((value_level >= rating_level) && value_level != null), 'is-disabled': disabled}"></i>
        </div><br/>
        <div class="star-limit-break" v-for="rating_limit_break in ratings_limit_break" :key="rating_limit_break" v-on:click="setLimitBreak(rating_limit_break)" v-on:mouseover="star_over_limit_break(rating_limit_break)" v-on:mouseout="star_out_limit_break">
            <i class="bi bi-star-fill" :class="{'is-selected-limit-break': ((value_limit_break >= rating_limit_break) && value_limit_break != null), 'is-disabled': disabled}"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'star-rating',
    props: {
        'disabled': Boolean,
        'default_value': null
    },
    data: function() {
        return {
            temp_value_level: null,
            value_level: this.default_value,
            ratings_level: [1, 2, 3, 4, 5],
            temp_value_limit_break: null,
            value_limit_break: 0,
            ratings_limit_break: [1, 2, 3, 4, 5]
        }
    },
    methods: {

        star_over_level: function(index) {

            if (!this.disabled) {
                this.temp_value_limit_break = this.value_limit_break;
                this.value_limit_break = 0;
                this.temp_value_level = this.value_level;
                return this.value_level = index;
            }

        },

        star_out_level: function() {

            if (!this.disabled) {
                this.value_limit_break = this.temp_value_limit_break;
                return this.value_level = this.temp_value_level;
            }
        },

        setLevel: function(value) {

            if (!this.disabled) {
                this.temp_value_limit_break = 0;
                this.value_limit_break = 0;
                this.temp_value_level = value;
                return this.value_level = value;
            }
        },

        star_over_limit_break: function(index) {

            if(!this.disabled) {
                this.temp_value_limit_break = this.value_limit_break;
                this.temp_value_level = this.value_level;
                this.value_level = 5;
                return this.value_limit_break = index;
            }
        },

        star_out_limit_break: function() {

            if(!this.disabled) {
                this.value_level = this.temp_value_level;
                return this.value_limit_break = this.temp_value_limit_break;
            }
        },

        setLimitBreak: function(value) {

            if (!this.disabled) {
                this.temp_value_level = 5;
                this.value_level = 5;
                this.temp_value_limit_break = value;
                return this.value_limit_break = value;
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.star-level {
    display: inline-block;
}
.star-limit-break {
    display: inline-block;
}
.is-selected-level {
    color: yellow;
}
.is-selected-limit-break {
    color: orange;
}
.is-disabled {
    color: grey;
}
</style>
