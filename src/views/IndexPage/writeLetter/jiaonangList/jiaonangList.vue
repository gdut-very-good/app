<style scoped lang="less">
    @import "../../../../utils/css/mixin";
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

        .save-image {
            position: absolute;
            height: 0.5rem;
            width: 0.5rem;
            right: 0.5rem;
        }
    }

    .text-area textarea{
        height: 50vh;
        width: 95%;
        margin: 0.3rem auto auto;
        font-size: 0.5rem;
    }


</style>

<template>
    <div>
        <div class="writeLetter-title">
            时间胶囊列表
            <image class="save-image" src="http://printer.noerror.xyz/appImage/gou.png" @click="submit"></image>
        </div>
        <div class="bottom-con">
            <div class="shudong-second-title">标题</div>
            <div class="text-area">
                <textarea placeholder="写下你想对明天的你说的话吧..." id="" cols="30" rows="10"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'jiaonangList',
        submit() {

        }

    }
</script>


