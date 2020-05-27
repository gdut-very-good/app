<style scoped lang="less">
    @import "../../../../utils/css/mixin";

    .writeLetter-title {
        .title;
    }

    .bottom-con {
        .message-card {
            @messageBox: 2.5rem;
            @item: 2;
            height: 2.5rem;
            font-size: 0.3rem;
            border-bottom: 1px solid @bgColor;
            border-top: 1px solid @bgColor;
            margin-bottom: 1rem;

            .message-title {
                display: flex;
                flex-direction: row;
                align-items: center;
                height: 50%;
                line-height: @messageBox / @item;
            }

            .message-title-inner {
                font-size: 0.45rem;
                height: 100%;
                text-align: left;
                line-height: @messageBox / @item;
                width: 55%;
            }

            .message-content {
                height: 50%;
                font-size: 0.4rem;
                line-height: @messageBox / @item;
            }

            .isRead {
                height: 1rem;
                line-height: 1rem;
                text-align: right;
                font-size: 0.4rem;
            }
        }
    }


</style>

<template>
    <div class="message-container">
        <div class="writeLetter-title">
            消息盒子
        </div>
        <div class="bottom-con">
            <div class="message-card" v-for="message in messageList">
                <div class="message-title">
                    <text class="message-title-inner">{{message.title}}</text>
                    <div>{{message.time}}</div>
                </div>
                <div class="message-content">{{message.content}}</div>
                <div class="isRead" :style="message.isRead ? 'color: green' : 'color: red'">{{message.isRead ? '已读' :
                    '未读'}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapGetters} from "vuex";
    import {myApi} from "@/utils/apiManager/myApi";
    import {errorCode} from "@/utils/errorCode/errorCode";
    import {loginModules} from "@/utils/apiManager/loginApi";

    export default {
        name: 'message',

        computed: {},

        data() {
            return {
                messageList: []

            }
        },

        mounted() {
            this.getNotice()
        },

        methods: {
            getNotice() {
                myApi.getNotice().then(res => {
                    if (res.code == 1) {
                        this.messageList = res.data
                    } else {
                        errorCode()
                    }
                })
            }
        }


    }
</script>


