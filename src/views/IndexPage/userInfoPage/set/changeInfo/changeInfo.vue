<style scoped lang="less">
    @import "../../../../../utils/css/mixin";

    .change-title {
        .title;
    }

    .change-con {
        @height: 1.5rem;
        height: @height;
        .change-item {
            background-color: @bgColor;
            height: @height;
            padding-left: 0.8rem;
            width: 100%;
            line-height: @height;
            font-size: 0.5rem;
            text-align: left;
            outline: none;
        }
    }

    .confirm-btn {
        @height: 1.3rem;
        height:  @height;
        width: 80%;
        line-height: @height;
        background-color: #238FFF;
        font-size: 0.4rem;
        text-align: center;
        border-radius: 1.08rem;
        margin: 0.5rem auto auto;
        color: white;
    }


</style>

<template>
    <div class="changeinfo-container">
        <div class="change-title">
            编辑个人信息
        </div>
        <div class="change-con">
            <input class="change-item" v-model="value" value="value">
        </div>
        <div class="confirm-btn" @click="submit">确定</div>
    </div>
</template>

<script>
    import {loginModules} from "@/utils/apiManager/loginApi";

    export default {
        name: 'changeInfo',

        data() {
            return {
                value: this.$route.query.value,
                module: this.$route.query.module
            }
        },

        mounted() {

        },

        methods: {
            submit() {
                loginModules.changeUserInfo(this.formatData()).then(res => {
                    if (res.code == 1) {
                        let newValue = {}
                        newValue[this.module] = this.value
                        this.$store.default.commit('updateUserState', newValue)
                    }
                })
            },
            formatData() {
                //nickname:"笔名",
                //signature:"签名",
                //city:"广东省广州市",
                //mail":"123@qq.com"
                let data = {}
                data[this.module] = this.value
                switch (this.module) {
                    case 'nickname': {
                        return data
                    }
                    case 'signature': {
                        return data
                    }
                    case 'city': {
                        return data
                    }
                    case 'mail': {
                        return data
                    }
                }
            }
        }
    }
</script>


