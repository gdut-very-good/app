<style scoped lang="less">
    @import "../../utils/css/mixin";

    .top-bar {
        @barHeight: 1rem;
        height: @barHeight;
        display: flex;
        flex-direction: row;


        .top-bar-list {
            @barNumber: 2;
            width: 100% / @barNumber;
            text-align: center;
            line-height: @barHeight;
            font-size: 0.45rem;
        }
    }

    .active {
        border-bottom: 1px solid black;
        color: #41B883;
    }

    .normal{
        border: 0;
        color: white;
    }



</style>

<template>
    <div class="top-bar">
        <div
                class="top-bar-list"
                :style="show ? 'color: #41B883;':'color: black;'"
                @click="switchTitle('writeLetter')"
        >
            信件
        </div>
        <div
                class="top-bar-list"
                :style="!show ? 'color: #41B883;':'color: black;'"
                @click="switchTitle('shudongList')"
        >
            树洞
        </div>
    </div>
</template>

<script>
    export default {
        name: 'letterNav',

        data() {
            return {
                show: true
            }
        },

        methods: {
            switchTitle (module) {
                this.show = !this.show
                this.$router.push({
                    name: module
                })
                this.$emit('test')
            }
        }
    }
</script>


