<template>
    <div class="wrapper TitleView">
        {{text}}
    </div>

</template>

<script lang="js">
    export default {
    	name : 'Title',
        props : {
    		text : {
    			type : String
            }
        }
    }
</script>

<style scoped lang="less">
    @px2rem : 1 / 54rem;
    .TitleView {
        font-size: 27 * @px2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 66 * @px2rem;
        margin-bottom: 4 * @px2rem;
        background: #ffffff;
        color: rgb(51, 51, 51);
    }
</style>
