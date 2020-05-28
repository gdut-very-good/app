<style scoped lang="less">
    @import "../../../utils/css/mixin";

    .userInfo-container {
        height: 100vh;
    }

    .userInfo-title {
        .title;
    }

    .bottom-con {
        height: calc(100% - 1.5rem);
        background-color: rgb(242,242,242);

        .head-con {
            @height: 2rem;
            height:  @height;
            background-color: white;
            flex-direction:row;

            .head-image {
                height: 2rem;
                width: 2rem;
            }

            .left-bar {
                line-height:  @height;
                width: 20%;
            }

            .middle-bar {
                @margin: 0.2rem;
                line-height:  @height;
                width: 70%;

                .user-name {
                    height: calc(50% - @margin);
                    width: 100%;
                    line-height: @height / 2;
                    font-size: 0.4rem;
                    margin-top: 0.2rem;
                }

                .user-letter {
                    height: calc(50% - @margin);
                    width: 100%;
                    line-height: @height / 2;
                    font-size: 0.4rem;
                    margin-bottom: 0.2rem;
                }
            }

            .right-bar {
                line-height:  @height;
                width: 20%;

                .right-arrow {
                    height: 0.6rem;
                    width: 0.6rem;
                    margin-top: 0.7rem;
                }
            }
        }

        .list-item-info {
            @height: 1.5rem;
            height:  @height;
            background-color: white;
            flex-direction:row;
            margin-top: 0.3rem;

            .head-image {
                height:  1rem;
                width:  1rem;
                margin: 0.25rem auto;
            }

            .left-bar {
                line-height:  @height;
                width: 20%;
            }

            .middle-bar {
                line-height:  @height;
                width: 70%;

                .content {
                    height: 100%;
                    width: 100%;
                    line-height: @height;
                    font-size: 0.4rem;
                }
            }

            .right-bar {
                line-height:  @height;
                width: 10%;

                .right-arrow {
                    height: 0.6rem;
                    width: 0.6rem;
                    margin-top: 0.45rem;
                }
            }
        }
    }


</style>

<template>
    <div class="userInfo-container">
        <div class="userInfo-title">我的</div>
        <div class="bottom-con">
            <div class="head-con" @click="jump('set')">
                <div class="left-bar">
                    <image src="http://printer.noerror.xyz/appImage/head-icon.png" class="head-image"></image>
                </div>
                <div class="middle-bar">
                    <div class="user-name">{{name}}</div>
                    <div class="user-letter">今天写信了吗</div>
                </div>
                <div class="right-bar">
                    <image src="http://printer.noerror.xyz/appImage/right_arrow.png" class="right-arrow"></image>
                </div>
            </div>

            <div class="list-item-info"
                 v-for="item in listItem"
                 :key="item.name"
                 @click="jump(item.module)"
            >
                <div class="left-bar">
                    <image :src="item.imageUrl" class="head-image"></image>
                </div>
                <div class="middle-bar">
                    <div class="content">{{item.name}}</div>
                </div>
                <div class="right-bar">
                    <image src="http://printer.noerror.xyz/appImage/right_arrow.png" class="right-arrow"></image>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {loginModules} from "@/utils/apiManager/loginApi";

    export default {
        name: 'userInfo',

        computed: {
            name() {
                return this.$store.default.state.user.username
            }


        },

        data() {
            return {
                listItem: [
                    {
                        name: '消息',
                        module: 'message',
                        imageUrl: 'http://printer.noerror.xyz/appImage/message.png'
                    },
                    {
                        name: '我的邮票',
                        module: 'stamp',
                        imageUrl: 'http://printer.noerror.xyz/appImage/data.png'
                    },
                    {
                        name: '树洞管理',
                        module: 'managerTree',
                        imageUrl: 'http://printer.noerror.xyz/appImage/tree.png'
                    },
                    {
                        name: '注销',
                        module: '',
                        imageUrl: 'http://printer.noerror.xyz/appImage/zhuxiao.png'
                    },
                ]
            }
        },

        mounted() {
            this.$store.default.state.count =  2
        },

        methods: {
            jump(moduleName) {
                this.$router.push({
                    name: moduleName
                })
            }
        }


    }
</script>


