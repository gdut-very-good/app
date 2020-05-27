<style scoped lang="less">
    @import "../../../../utils/css/mixin";

    .writeLetter-title {
        .title;

        .save-image {
            position: absolute;
            height: 0.5rem;
            width: 0.5rem;
            right: 0.5rem;
        }

        .envelope-image {
            position: absolute;
            height: 1rem;
            width: 1rem;
            right: 1.5rem;
        }
    }

    .bottom-con {
        position: relative;
        width: 85%;
        margin: auto;

        .show-envelope-btn {
            position: absolute;
            height: 0.6rem;
            width: 30%;
            left: 35%;
            opacity: 0.7;
            top: 0.2rem;
        }
    }

    .letter-title {
        @letter_height: 1.5rem;
        line-height: @letter_height;
        height: @letter_height;
        font-size: 0.5rem;
        border-bottom: 1px solid black;
    }

    .letter-content {
        height: 5rem;
    }

    .choose-envelope-con {

    }

</style>

<template>
    <div class="letter-container">
        <div class="writeLetter-title">
            <text>写信</text>
            <image
                    class="save-image" src="http://printer.noerror.xyz/appImage/gou.png"
                    @click="submit">
            </image>
            <image
                    class="envelope-image"
                    src="http://printer.noerror.xyz/appImage/envelope1.png"
                    @click="route('envelope')"
            >
            </image>
        </div>
        <div class="bottom-con">
            <!--            <image class="show-envelope-btn" src="http://printer.noerror.xyz/appImage/xiala.png"></image>-->
            <div class="choose-envelope-con"></div>
            <input class="letter-title" placeholder="信件标题" style="outline: none" v-model="title">
            <textarea name="" id="" cols="30" rows="10" class="letter-content" placeholder="写点东西" v-model="content"></textarea>
        </div>
    </div>
</template>

<script>
    import {loginModules} from "@/utils/apiManager/loginApi";

    export default {
        name: 'letter',
        data() {
            return {
                title: '',
                content: ''
            }
        },

        watch: {
            'title': function(value) {
                this.$store.default.commit('updateLetterState', {header: value})
            },
            'content': function (value) {
                this.$store.default.commit('updateLetterState', {content: value})
            }
        },

        mounted() {

        },

        methods: {
            route(module) {
                this.$router.push({
                    name: module
                })
            }
        }


    }
</script>


