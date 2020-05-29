<style scoped lang="less">
    @import "../../utils/css/mixin";
    .global-layer {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        z-index: 100;
    }
</style>

<template>
    <div class="global-layer">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'layer',

        data() {
            return {

            }
        },

    }
</script>


