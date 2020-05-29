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
            @imageHeight: 0.8rem;
            height: 100%;
            width: 25%;
    
            .navigator-image {
                .image(@imageHeight, @imageHeight);
                margin: auto;
            }
    
            .navigator-content {
                height: @height - @imageHeight;
                text-align: center;
                font-size: 0.4rem;
            }
        }
    }




</style>

<template>
    <div class="navigator-container">
        <router-link
                class="navigator-item" v-for="item in navigatorItem"
                :key="item.name"
                :to="item.module"
        >
            <image :src="item.imageUrl" class="navigator-image"></image>
            <div class="navigator-content">{{item.name}}</div>
        </router-link>
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
                        module: '/index/letterIndex',
                        imageUrl: 'http://printer.noerror.xyz/appImage/envelope.png'
                    },
                    {
                        name: '草稿箱',
                        module: '/index/draft',
                        imageUrl: 'http://printer.noerror.xyz/appImage/draft.png'
                    },
                    {
                        name: '海岛',
                        module: '/index/island',
                        imageUrl: 'http://printer.noerror.xyz/appImage/land.png'
                    },
                    {
                        name: '我的',
                        module: '/index/userInfo',
                        imageUrl: 'http://printer.noerror.xyz/appImage/my.png'
                    },
                ]
            }
        },

        mounted() {
    
        }
    }
</script>


