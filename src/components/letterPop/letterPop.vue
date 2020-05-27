<style scoped lang="less">
    @import "../../utils/css/mixin";

    .contact-con {
        height: 10rem;
        width: 80%;
        margin: auto;
        border: 1px solid black;
        border-radius: 10px;
        background-color: white;

        .contact-title {
            @titleHeight: 1.5rem;
            height: @titleHeight;
            line-height: @titleHeight;
            text-align: center;
            font-size: 0.5rem;
        }

        .contact-list {
            max-height: 6rem;
            overflow: scroll;

            .list-item {
                height: 1rem;
                line-height: 1rem;
                text-align: center;
            }
        }
    }

    .btn-con {
        height: 1rem;
        flex-direction: row;
        display: flex;
        justify-content: center;

        .confirm-btn {
            height: 100%;
            line-height: 1rem;
            width: 30%;
            text-align: center;
            border: 1px solid black;
            border-radius: 10px;
            margin: 0 0.3rem 0 0.3rem;
        }
    }
</style>

<template>
    <layer :style="isShow?'display:flex':'display:none'">
        <div class="contact-con">
            <div class="contact-title">邮票</div>
            <div class="contact-list">
                <div
                        class="list-item"
                        v-for="item in list"
                        @click="chooseItem(item.stampName)"
                        :style="item.stampName===chooseStamp.stampName?'color:#238FFF':'color:black'"
                >
                    {{item.stampName}}
                </div>
            </div>
            <div class="btn-con">
                <div class="confirm-btn" @click="cancel('cancel')">取消</div>
                <div class="confirm-btn" @click="cancel('sure')">确认</div>
            </div>
        </div>
    </layer>
</template>

<script>
    import layer from "@/components/layer/layer";
    import {stamp, matchId} from "@/utils/stampStyle/stampStyle";

    export default {
        name: 'letterPop',

        props: ['letterShow'],

        components: {
            layer
        },

        watch: {
            'letterShow': function (value) {
                this.isShow = this.letterShow
            }
        },

        data() {
            return {
                list: stamp,
                isShow: this.letterShow,
                chooseStamp: stamp[0]
            }
        },

        methods: {
            chooseItem(stampName) {
                this.$store.default.commit('updateLetterState', {stampId: stampName})
                this.chooseStamp = matchId(stampName)
            },

            cancel(option) {
                console.log(option)
                if (option === 'sure') {
                    this.$emit('closeStamp', {
                        url: this.chooseStamp.url
                    })
                } else {
                    this.$emit('closeStamp',{
                        url: null
                    })
                }
            }

        }

    }
</script>


