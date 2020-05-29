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
        }
    }
</style>

<template>
    <div>
        <div class="writeLetter-title">
            树洞管理
        </div>
        <div class="bottom-con">
            <div
                    class="message-card"
                    v-for="tree in treeList"
                    @click="single(tree.treeHoleId)"
            >
                <div class="message-title">
                    <text class="message-title-inner">{{tree.title}}</text>
                    <div style="font-size: 0.4rem">{{tree.createTime}}</div>
                </div>
                <div class="message-content">{{tree.content}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {myApi} from "@/utils/apiManager/myApi";
    import {loginModules} from "@/utils/apiManager/loginApi";

    export default {
        name: 'managerTree',

        data() {
            return {
                treeList: [

                ]
            }
        },

        mounted() {
            this.getTreeList()
        },

        methods: {
            single(id) {
                this.$router.push({
                    name: 'singleTree',
                    query: {
                        id: id
                    }
                })
            },

            getTreeList() {
                myApi.getMyTreeHole().then(res => {
                    this.treeList = res.data
                })
            }

        }
    }
</script>

