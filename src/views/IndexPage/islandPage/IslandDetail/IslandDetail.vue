<template>
    <div class="wrapper IslandDetailView">
        <input type="file" ref="fileInput" @change="handleFileChange" style="display: none">
        <div class="header" v-show="!ruaVisibility">
            <div class="bg" :style="{
            	backgroundImage : `url(${this.userInfo.background ? this.$store.default.state.imageBaseUrl + this.userInfo.background : this.$store.default.state.defaultImageUrl})`,
            	backgroundSize : 'cover'
            }" @click="changeImage"></div>
            <div class="container">
                <div class="avatar-box">
                    <image :src="this.$store.default.state.imageBaseUrl + userInfo.photo" alt="" class="avatar"/>
                    <p class="name">{{userInfo.username}}</p>
                </div>
                <div class="content">
                    {{userInfo.signature}}
                </div>
            </div>
        </div>
        <div class="body" v-show="!ruaVisibility">
            <Post v-for="(data, index) in postList" v-bind="data"/>
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
	import Api from "@/utils/apiManager/Api";
	// import addIcon from "../../../../images/icon/add-post.png";
    export default {
        name : "IslandDetail",
        components: {Title, Post},
        data() {
        	return {
                bg : "https://300img.rcywl.com/300data/res/ui/hero/233.bmp!300patch",
                avatar : "https://img.nga.178.com/attachments/mon_201801/29/3gQ5-icl2Z1fT3cSm8-m8.jpg",
				ruaVisibility : false,
                userInfo : {},
                postList : [],
                userId : 0
            }
        },
        methods : {
        	post() {

            },
            handleFileChange(e) {
        		let file = e.target.files[0];
        		console.log(file);
        		Api.upload('/user/upload/background', {
					file
                }).then((res) => {
                    console.log(res);
                });
            },

			changeImage() {
        		console.log(this.$refs);
                this.$refs.fileInput.$el.click();

            }
        },
        mounted() {
        	this.userId = this.$route.query.userId;
        	Api.get(`/user/${this.userId}`, {

            }).then((data) => {
            	console.log(data);
        		this.userInfo = data;
            });
        	Api.get(`/post/all/${this.userId}`).then((data) => {
        		this.postList = data;
        		console.log(data)
            })
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
