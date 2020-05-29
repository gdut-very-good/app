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
            <div class="contact-title">联系人</div>
            <div class="contact-list">
                <div
                        class="list-item"
                        v-for="item in list"
                        :style="item.userId===chooseWhich.userId?'color:#238FFF':'color:black'"
                        @click="chooseItem(item.userId)"
                >
                    {{item.nickname}}
                </div>
            </div>
            <div class="btn-con">
                <div class="confirm-btn" @click="cancel">取消</div>
                <div class="confirm-btn" @click="cancel('sure')">确认</div>
            </div>
        </div>
    </layer>
</template>

<script>
    import layer from "@/components/layer/layer";
    export default {
        name: 'contact',

        props: ['contactList','layerShow'],

        components: {
            layer
        },

        watch: {
            'contactList': function (value) {
                this.list = this.contactList
                this.chooseWhich = this.contactList[0]
            },
            'layerShow': function (value) {
                this.isShow = value
            }
        },

        data() {
            return {
                list: null,
                isShow: this.layerShow,
                chooseWhich: null
            }
        },

        methods: {
            cancel(option) {
                if (option === 'sure') {
                    this.$emit('close', {
                        name: this.chooseWhich.nickname
                    })
                } else {
                    this.$emit('close', {
                        name: null
                    })
                }
            },

            chooseItem(userId) {
                this.$store.default.commit('updateLetterState', {receiverId: userId})
                this.chooseWhich = this.findFriend(userId)
                console.log(this.$store.default.state.letter)
            },

            //根据userID去匹配
            findFriend(userId) {
                for (let i = 0; i < this.list.length; i++) {
                    if (this.list[i].userId === userId) {
                        return this.list[i]
                    }
                }
            }
        }

    }
</script>


