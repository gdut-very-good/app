<style scoped lang="less">
    @import "../../../utils/css/mixin";
    .writeLetter-container {
        padding-bottom: 1.6rem;
    }
    .writeLetter-title {
        .title;
        .save-image {
            position: absolute;
            height: 0.5rem;
            width: 0.5rem;
            right: 0.5rem;
        }
    }
    .bottom-con {
        height: calc(100% - 1.5rem);
        width: 100%;
    }
    .add-circle {
        right: 1rem;
        z-index: 100;
        @radius: 1.3rem;
        height: @radius;
        width: @radius;
        font-size: 1.5rem;
        text-align: center;
        line-height: @radius;
        background-color: rgb(203,176,68);
        border-radius: 50%;
        @radius: 1.4rem;
        position: absolute;
        bottom: 1.8rem;
        color: white;
    }
    .box {
       .publicBox;
        animation:circleRoate 1s ;
        animation-timing-function:linear;
        animation-fill-mode: forwards;
    }
    .box-jiaonang {
        .publicBox;
        animation:circleRoate_jiaonang 1s ;
        animation-timing-function:linear;
        animation-fill-mode: forwards;
    }
    .box-add {
        .publicBox;
    }
    .box-xiexin {
        .publicBox;
    }
    @keyframes circleRoate_jiaonang{
        from{transform: rotate(0deg);}
        to{transform: rotate(90deg);}
    }
    @keyframes circleRoate{
        from{transform: rotate(0deg);}
        to{transform: rotate(180deg);}
    }
    .other-item-shudong {
        .letter-button;
        transform: rotate(180deg);
    }
    .other-item-jiaonang {
        .letter-button;
        transform: rotate(-90deg);
    }
    .other-item-xiexin {
        .letter-button;
    }
</style>

<template>
    <div class="writeLetter-container">
        <div class="writeLetter-title">
            写点什么
        </div>
        <div class="box-add">
            <div class="add-circle" @click="openBtn">+</div>
        </div>
        <div class="box" v-if="show">
            <div class="other-item-shudong" @click="route('shudong')">树洞</div>
        </div>
        <div class="box-jiaonang" v-if="show">
            <div class="other-item-jiaonang" @click="route('jiaonang')">胶囊</div>
        </div>
        <div class="box-xiexin" v-if="show">
            <div class="other-item-xiexin" @click="route('writeLetter')">写信</div>
        </div>
        <div class="bottom-con">
            <letterNav></letterNav>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import letterNav from "@/components/letterNav/letterNav";
    import writeLetter from "@/views/IndexPage/writeLetter/writeLetter/writeLetter";
    import shudong from "@/views/IndexPage/writeLetter/shudong/shudong";
    import jiaonang from "@/views/IndexPage/writeLetter/jiaonang/jiaonang";
    export default {
        name: 'letterIndex',
        components: {
            letterNav: letterNav,
        },
        data() {
            return {
                title: '写点什么',
                module: this.$route.name,
                show: false
            }
        },
        mounted() {
        },
        methods: {
            test() {
            },
            route(module) {
                this.$router.push({
                    name: module
                })
            },
            openBtn() {
                this.show = true
            }
        }
    }
</script>
