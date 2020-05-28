<style scoped lang="less">
    @import "../../../../utils/css/mixin";

    .bottom-con {
        height: calc(100% - 1.5rem);
        width: 100%;

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
        <div class="bottom-con">
            <div class="pen-sort-con" v-for="item in boomFriend">
                <div class="letter-con">
                    <div class="inner">{{item.group}}</div>
                </div>
                <div class="user-info" v-for="listItem in item.data" @click="jump(listItem.userId)">
                    <div class="inner-user-info">
                        <image class="head-icon" :src="'http://island.hellochaos.cn/uploads/'+listItem.photo"></image>
                        <div class="user-name-region">
                            <div class="user-details">{{listItem.nickname}}</div>
                            <div class="user-details">
                                <image src="http://printer.noerror.xyz/appImage/postion.png" class="user-image"></image>
                                {{listItem.city}}
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
    import {py} from '@/utils/pingyin/pinyin';
    import {isNotNullTrim, checkNumber, moveArray} from "@/utils/utils";
    import {loginModules} from "@/utils/apiManager/loginApi";
    import user from "@/store/modules/user";
    const PinyinMatch = require('pinyin-match');

    export default {
        name: 'writeLetter',

        data() {
            return {
                //format {'group':, data: [{}]}
                boomFriend: []
            }
        },

        mounted() {
            letter.getBoomFriend().then(res => {
                if (res.code == 1) {
                    this.boomFriend = this.reFormat(res.data.records)
                }
            })

        },

        methods: {
            reFormat(data){
                const newData = []
                for (let i = 0, len = data.length; i < len ;i++) {
                    //判断第一个字符是不是数字,或者是空
                    let firstStr
                    if (data[i].nickname === null) {
                        firstStr = ['#']
                    } else {
                        firstStr = checkNumber(data[i].nickname.charAt(0)) ?
                            ['#'] : py(data[i].nickname.charAt(0))
                    }
                    //查看一下有没有这个分组，但是注意一下下表是0的情况
                    const has = this.hasGroup(firstStr[0], newData)
                    //the array has not this str group
                    if (has === 'none') {
                        newData.push({
                            group: firstStr[0],
                            data: []
                        })
                        newData[newData.length-1].data.push(data[i])
                    } else {
                        newData[has].data.push(data[i])
                    }
                }
                newData.sort((a, b) => {
                    return (a.group + '').localeCompare(b.group + '')
                })
                moveArray(newData, [0], newData.length-1, 1)
                return newData
            },

            hasGroup(str, arr) {
                for (let i = 0, len = arr.length; i < len; i++) {
                    if (arr[i].group === str) {
                        return i
                    }
                }
                return 'none'
            },

            jump(userId) {
                this.$router.push({
                    name: 'friendInfo',
                    query: {
                        userId: userId
                    }
                })
            }
        }
    }
</script>


