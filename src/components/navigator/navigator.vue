<style scoped lang="less">
    @import "../../utils/css/mixin";

    .navigator-container {
        @height: 1.6rem;
        position: fixed;
        bottom: 0;
        height:  @height;
        width: 100%;
        z-index: 100;
        flex-direction:row;
        background-color: white;

        .navigator-item {
            @imageHeight: 1rem;
            height: 100%;
            width: 25%;

            .navigator-image {
                .image(@imageHeight, @imageHeight);
                margin: auto;
            }

            .navigator-content {
                height: @height - @imageHeight;
                text-align: center;
            }
        }
    }




</style>

<template>
    <div class="navigator-container">
        <div class="navigator-item" v-for="item in navigatorItem" v-key="index">
            <image src="http://printer.noerror.xyz/appImage/message.png" class="navigator-image"></image>
            <div class="navigator-content">{{item.name}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'navigator',

        data() {
            return {
                navigatorItem: [
                    {
                        name: '写信',
                        imageUrl: ''
                    },
                    {
                        name: '草稿箱',
                        imageUrl: ''
                    },
                    {
                        name: '海岛',
                        imageUrl: ''
                    },
                    {
                        name: '我的',
                        imageUrl: ''
                    },
                ]
            }
        },

        mounted() {

        }
    }
</script>


