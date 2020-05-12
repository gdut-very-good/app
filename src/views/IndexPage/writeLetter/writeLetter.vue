<style scoped lang="less">
    @import "../../../utils/css/mixin";

    .writeLetter-container {
        padding-bottom: 1.6rem;
    }

    .writeLetter-title {
        .title;
    }

    .bottom-con {
        height: calc(100% - 1.5rem);
        width: 100%;

        .top-bar {
            @barHeight: 1rem;
            height: @barHeight;
            display: flex;
            flex-direction: row;

            .top-bar-list {
                @barNumber: 3;
                width: 100% / @barNumber;
                text-align: center;
                line-height: @barHeight;
                font-size: 0.45rem;
            }

            .active {
                border-bottom: 1px solid black;
            }
        }

        .pen-friend {
            height: 0.6rem;
            width: 100%;
            background-color: white;
            line-height: 0.6rem;
            font-size: 0.45rem;
        }

        .inner {
            padding-left: 0.5rem;
            font-size: 0.4rem;
        }

        .pen-sort-con {
            .letter-con {
                height: 0.5rem;
                line-height: 0.5rem;
                background-color: @bgColor;
            }

            .user-info {
                @headWidth: 1.3rem;

                .inner-user-info {
                    padding-left: 0.5rem;
                    display: flex;
                    flex-direction: row;
                    background-color: white;
                }

                .head-icon {
                    height: @headWidth;
                    width: @headWidth;
                    margin: 0.3rem 0.2rem 0.3rem 0;
                    border: 1px solid black;
                    border-radius: 50%;
                }

                .user-name-region {
                    height: @headWidth;
                    margin: 0.3rem 0 0.3rem 0;
                    width: calc(100% - @headWidth);

                    .user-details {
                        height: 50%;
                        width: 100%;
                        line-height: @headWidth/2;
                        display: flex;
                        flex-direction: row;
                        font-size: 0.4rem;
                        .user-image {
                            width: 0.45rem;
                            height: 0.45rem;
                            margin: 0.05rem 0.1rem 0 0;
                        }
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="writeLetter-container">
        <div class="writeLetter-title">写点什么</div>
        <div class="bottom-con">
            <div class="top-bar">
                <div class="top-bar-list" v-for="item in topBar">{{item.name}}</div>
            </div>
            <div class="pen-friend">
                <div class="inner">我的笔友</div>
            </div>
            <div class="pen-sort-con" v-for="item in boomFriend" :key="item.userId">
                <div class="letter-con">
                    <div class="inner">A</div>
                </div>
                <div class="user-info">
                    <div class="inner-user-info">
                        <image class="head-icon" :src="'http://island.hellochaos.cn/uploads/'+item.photo"></image>
                        <div class="user-name-region">
                            <div class="user-details">{{item.username}}</div>
                            <div class="user-details">
                                <image src="http://printer.noerror.xyz/appImage/postion.png" class="user-image"></image>
                                {{item.city}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {letter} from "@/utils/apiManager/letterApi";
    import {loginModules} from "@/utils/apiManager/loginApi";
    const PinyinMatch = require('pinyin-match');

    export default {
        name: 'writeLetter',

        data() {
            return {
                topBar: [
                    {
                        name: '信件'
                    },
                    {
                        name: '树洞'
                    },
                    {
                        name: '时间胶囊'
                    }
                ],
                boomFriend: []
            }
        },

        mounted() {
            console.log(PinyinMatch.match('小余', '小'))

            letter.getBoomFriend().then(res => {
                console.log(res)
                if (res.code == 1) {
                    this.boomFriend = res.data.records
                    console.log(this.boomFriend)
                }
            })
        }
    }
</script>


