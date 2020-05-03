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
                line-height:  @height;
                width: 70%;

                .user-name {
                    height: 50%;
                    width: 100%;
                    line-height: @height / 2;
                    font-size: 0.4rem;
                }

                .user-letter {
                    height: 50%;
                    width: 100%;
                    line-height: @height / 2;
                    font-size: 0.4rem;
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
            <div class="head-con">
                <div class="left-bar">
                    <image src="http://printer.noerror.xyz/appImage/head-icon.png" class="head-image"></image>
                </div>
                <div class="middle-bar">
                    <div class="user-name">李华</div>
                    <div class="user-letter">今天写信了吗</div>
                </div>
                <div class="right-bar">
                    <image src="http://printer.noerror.xyz/appImage/right_arrow.png" class="right-arrow"></image>
                </div>

            </div>

            <div class="list-item-info" v-for="item in listItem" v-key="index">
                <div class="left-bar">
                    <image src="http://printer.noerror.xyz/appImage/message.png" class="head-image"></image>
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
    export default {
        name: 'userInfo',

        data() {
            return {
                listItem: [
                    {
                        name: '消息',
                        imageUrl: 'http://printer.noerror.xyz/appImage/message.png'
                    },
                    {
                        name: '我的邮票',
                        imageUrl: 'http://printer.noerror.xyz/appImage/data.png'
                    },
                    {
                        name: '设置',
                        imageUrl: 'http://printer.noerror.xyz/appImage/set.png'
                    },
                ]
            }
        },

        mounted() {

        }
    }
</script>


