<style scoped lang="less">
    @import "../../../../../utils/css/mixin";
    input {
        outline: none;
    }

    .shudong-second-title {
        @height: 1.8rem;
        height: @height;
        line-height: @height;
        width: 95%;
        margin: auto;
        font-size: 1rem;
        border-bottom: 1px solid gainsboro;
    }

    .writeLetter-title {
        .title;
    }

    .text-area div{
        height: 50vh;
        width: 95%;
        margin: 0.3rem auto auto;
        font-size: 0.5rem;
    }

    .delete-btn {
        height: 1.3rem;
        width: 80%;
        margin: auto;
        background-color: red;
        line-height: 1.3rem;
        font-size: 0.5rem;
        color: white;
        border-radius: 6px;
        text-align: center;
    }

    .leaving-message {
        .message-content {
            height: 1rem;
            text-align: center;
            font-size: 0.5rem;
        }
    }


</style>

<template>
    <div>
        <div class="writeLetter-title">
            树洞详情
        </div>
        <div class="bottom-con">
            <div class="shudong-second-title">{{treeHole.title}}</div>
            <div class="text-area">
                <div>{{treeHole.content}}</div>
            </div>
            <div class="leaving-message">
                <div class="message-content"></div>
            </div>
            <div class="delete-btn" @click="deleteTree">删除</div>
        </div>
    </div>
</template>

<script>
    import {letter} from "@/utils/apiManager/letterApi";
    import {errorCode} from "@/utils/errorCode/errorCode";
    import {myApi} from "@/utils/apiManager/myApi";
    import {loginModules} from "@/utils/apiManager/loginApi";

    export default {
        name: 'singleTree',

        data() {
            return {
                treeHole: {}
            }
        },

        mounted() {

          this.getTreeInfo()
        },

        methods: {
            //获得树洞信息
            getTreeInfo() {
                myApi.getSingleTreeHole(this.$route.query.id).then(res => {
                    console.log(res.data)
                    this.treeHole = res.data.hole
                    if (!res.code) {
                        errorCode()
                    }
                })
            },

            deleteTree() {
                myApi.deleteTree(this.$route.query.id).then(res => {
                    alert(res.message)
                })
            }
        }

    }
</script>

