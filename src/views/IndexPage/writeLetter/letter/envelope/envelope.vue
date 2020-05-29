<style scoped lang="less">
    @import "../../../../../utils/css/mixin";
    .writeLetter-title {
        .title;

        .save-image {
            position: absolute;
            height: 0.5rem;
            width: 0.5rem;
            right: 0.5rem;
        }
    }

    .style-con {
        height: 1.5rem;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        .style-content {
            height: 100%;
            width: 15%;
            border: 1px solid black;
            text-align: center;
            line-height: 1.5rem;
            margin-right: 0.3rem;
            font-size: 0.4rem;
        }
    }

    .envelope {
        height: 10rem;
        width: 90%;
        margin: auto;
        border: 1px solid black;
        font-size: 0.6rem;
    }


</style>

<template>
    <div class="letter-container">
        <div class="writeLetter-title">
            <text>信纸选择</text>
            <image
                    class="save-image" src="http://printer.noerror.xyz/appImage/gou.png"
                    @click="confirm">
            </image>
        </div>
        <div class="bottom-con">
            <div class="style-con">
                <div class="style-content" v-for="item in styleList" @click="submitId(item.paper)">{{item.styleName}}</div>
            </div>
            <div class="envelope">信封图片</div>
<!--            <div class="style-con">-->
<!--                <div class="style-content" v-for="item in stampList" @click="submitId(item.stampName)">{{item.styleName}}</div>-->
<!--            </div>-->
<!--            <div class="envelope">邮票图片</div>-->
        </div>
    </div>
</template>

<script>
    import {stamp} from "@/utils/stampStyle/stampStyle";

    export default {
        name: 'envelope',
        data() {
            return {
                styleList: [
                    {
                        styleName: '样式1',
                        paper: '大巴黎'
                    },
                    {
                        styleName: '样式2',
                        paper: '大巴黎2'
                    },
                    {
                        styleName: '样式3',
                        paper: '大巴黎3'
                    },
                ],
                stampList: []

            }
        },


        mounted() {
            this.stampList = stamp
        },

        methods: {
            confirm() {
                this.$router.push({
                    name: 'submitEnvelope'
                })

            },
            submitId(paper) {
                this.$store.default.commit('updateLetterState',{sendTime: paper})
            }

        }


    }
</script>


