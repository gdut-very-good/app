<style scoped lang="less">
    @import "../../../../../utils/css/mixin";
    .friend-con {
        height: 100vh;
        background-color: @bgColor;
    }

    .writeLetter-title {
        .title;
    }

    .bottom-con {
        @bottomHeight: 4rem;
        @itemNum: 4;
        height: @bottomHeight;
        background-color: white;
        display: flex;
        flex-direction: row;
        padding: 0.5rem 0 0.5rem 0;
        .head-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 30%;
            .icon {
                height: 2rem;
                width: 2rem;
                border-radius: 50%;
            }
        }
        .info-con {
            height: 100%;
            width: 70%;
            .item {
                height: 25%;
                font-size: 0.4rem;
                line-height: @bottomHeight/@itemNum;
            }
        }
    }

    .write-btn {
        line-height: 1.5rem;
        background-color: white;
        text-align: center;
        font-size: 0.5rem;
        margin-top: 0.5rem;
    }

</style>

<template>
    <div class="friend-con">
        <div class="writeLetter-title">
            笔友信息
        </div>
        <div class="bottom-con">
            <div class="head-icon">
                <image class="icon" :src="imageUrl"></image>
            </div>
            <div class="info-con">
                <div class="item" v-for="item in info">
                    {{item.name}}{{item.content}}
                </div>
            </div>
        </div>
        <div class="write-btn">写信</div>
    </div>
</template>

<script>
    import {letter} from "@/utils/apiManager/letterApi";
    import {errorCode} from "@/utils/errorCode/errorCode";

    export default {
        name: 'friendInfo',

        data() {
            return {
                imageUrl: '',
                info: [
                    {
                        name: '',
                        content: ''
                    },
                    {
                        name: '签名:',
                        content: ''
                    },
                    {
                        name: '位置:',
                        content: ''
                    },
                    {
                        name: '距离:',
                        content: '2000km'
                    },
                ]
            }
        },

        mounted() {
            this.getInfo()
        },

        methods: {
            getInfo() {
                letter.getSingleInfo(this.$route.query.userId).then(res => {
                    if (res.code == 1) {
                        this.initInfo(res.data)
                    } else {
                        errorCode()
                    }

                })
            },

            initInfo(res) {
                this.info[0].content = res.nickname
                this.info[1].content = res.signature
                this.info[2].content = res.city
                this.info[3].content = res.nickname
                this.imageUrl = 'http://island.hellochaos.cn/uploads/' + res.photo
            }
        }
    }
</script>

