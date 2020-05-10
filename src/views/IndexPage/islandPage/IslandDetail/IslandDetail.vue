<template>
    <div class="wrapper IslandDetailView">
        <Title text="海岛"/>
        <div class="header">
            <div class="bg" :style="{
            	backgroundImage : `url(${this.bg})`,
            	backgroundSize : 'cover'
            }"></div>
            <div class="container">
                <div class="avatar-box">
                    <image :src="avatar" alt="" class="avatar"/>
                    <p class="name">me</p>
                </div>
                <div class="content">
                    海岛描述就是这样子的啦
                </div>
            </div>
        </div>
        <div class="body">
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>

</template>

<script lang="js">
    import Post from "../../../../components/post/Post.vue";
	import Title from "@/components/title/Title";
    export default {
        name : "IslandDetail",
        components: {Title, Post},
        data() {
        	return {
                bg : "https://300img.rcywl.com/300data/res/ui/hero/233.bmp!300patch",
                avatar : "https://img.nga.178.com/attachments/mon_201801/29/3gQ5-icl2Z1fT3cSm8-m8.jpg"
            }
        }
    }
</script>

<style scoped lang="less">
    @import "IslandDetailView";
</style>
