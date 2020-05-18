<template>
    <div class="wrapper IslandDetailView">
        <Title text="海岛"/>
        <div class="header" v-show="!ruaVisibility">
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
        <div class="body" v-show="!ruaVisibility">
            <Post/>
            <Post/>
            <Post/>
        </div>
        <div class="pos" @click="ruaVisibility = true" v-show="!ruaVisibility" style="width: 100px;height: 100px; position: fixed;
            z-index: 1; bottom: 150px; right: 20px;
            background: #ffffff; display: flex;
            flex-direction: row; justify-content: center; align-items: center;
            border-radius: 50%;
            ">
            <image src="https://s1.ax1x.com/2020/05/17/YRITQU.png" style="width: 100%; height: 100%"/>
        </div>
        <div class="rua-box" v-show="ruaVisibility" style="margin-top: 20px; ">
            <div class="rua">
                <div class="top">
                    <div class="box">
                        <span class="span" @click="ruaVisibility = false">×</span>
                        <span class="span">发布动态</span>
                    </div>
                    <button class="button" @click="post">发布</button>
                </div>
                <textarea rows="8" placeholder="写下你的想法" style="padding: 0 16px; box-sizing: border-box; font-size: 32px"></textarea>
            </div>
        </div>
    </div>


</template>

<script lang="js">
    import Post from "../../../../components/post/Post.vue";
	import Title from "@/components/title/Title";
	// import addIcon from "../../../../images/icon/add-post.png";
    export default {
        name : "IslandDetail",
        components: {Title, Post},
        data() {
        	return {
                bg : "https://300img.rcywl.com/300data/res/ui/hero/233.bmp!300patch",
                avatar : "https://img.nga.178.com/attachments/mon_201801/29/3gQ5-icl2Z1fT3cSm8-m8.jpg",
				ruaVisibility : true
            }
        },
        methods : {
        	post() {

            }
        }
    }
</script>

<style scoped lang="less">
    @import "IslandDetailView";
</style>

<style lang="less">
    #blockbyte-bs-indicator {
        display: none!important;
    }

</style>
