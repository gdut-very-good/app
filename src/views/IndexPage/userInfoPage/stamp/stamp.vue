<style scoped lang="less">
    @import "../../../../utils/css/mixin";

    .stamp-container {
        height: 100vh;
    }

    .stamp-title {
        .title;
    }

    .bottom-con {
        height: calc(100% - 1.5rem);
        background-color: @bgColor;
        padding: 0 1rem 0 1rem;

        .stamp-con {
            display: flex;
            flex-direction:row;

            .stamp-style {
                @rectangleHeight: 2.3rem;
                @rectangleWidth: 1.8rem;
                height: 0;
                width: 0;
                border-top: @rectangleHeight solid black;
                border-right: @rectangleWidth solid white;
                border-bottom: @rectangleHeight solid white;
                border-left: @rectangleWidth solid white;
            }

        }
    }




</style>

<template>
    <div class="stamp-container">
        <div class="stamp-title">我的邮票</div>
        <div class="bottom-con">
            <div class="stamp-con">
                <div class="stamp-style"></div>
                <div class="stamp-style"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'stamp',

        data() {
            return {
                listItem: [

                ]
            }
        },

        mounted() {

        }
    }
</script>


