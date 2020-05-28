<template>
    <div class="wrapper PostDetailView">
        <div class="post-box">
            <div class="avatar-container">
                <div class="left">
                    <div class="avatar-box">
                        <image :src="userInfo.photo" class="avatar"/>
                        <p class="name">Tom</p>
                    </div>
                </div>
                <div class="right">
                    <button class="comment-button">+</button>
                </div>
            </div>
            <div class="content">
                {{postDetail.content}}
            </div>
        </div>
        <div class="comment-box" v-show="inputVisibility">
            <div class="comment" v-for="(comment, index) in commentData" :key="index">
                <div class="avatar-box">
                    <img :src="this.avatar" alt="" class="avatar"/>
                </div>
                <div class="content">
                    <div class="top">
                        <p class="name"></p>
                        <button class="reply">回复</button>
                    </div>
                    <div class="bottom">
                        <p>{{comment.content}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="input-box">
            <input placeholder="写评论" v-model="inputVal" @focus="onInputFocus" v-show="inputVisibility"/>
        </div>
        <div class="rua-box" v-show="!inputVisibility" style="margin-top: 20px; ">
            <div class="rua">
                <div class="top">
                    <div class="box">
                        <span class="span" @click="inputVisibility = true">×</span>
                        <span class="span">发表评论</span>
                    </div>
                    <button class="button" @click="post">发布</button>
                </div>
                <textarea rows="8" placeholder="写下你的想法" style="padding: 0 16px; box-sizing: border-box; font-size: 32px"></textarea>
            </div>
        </div>
    </div>

</template>

<script lang="js">
    import Api from "@/utils/apiManager/Api";

	export default {
    	name : "postDetail",
        data() {
    		return {
				inputVal : "",
                inputVisibility : true,
                postDetail : {},
                userInfo : {},
				commentData : []
            }
        },
        props : {
    		avatar : {
    			default : "https://img.moegirl.org/common/c/c5/Winner-amethyst-2018.png"
            }
        },
        methods : {
			onInputFocus() {
                this.inputVisibility = false;
            },
			post() {
				this.inputVisibility = true;
            }
        },
        mounted() {
    		let posterId = this.$route.query.postId;
    		Api.get(`/post/${posterId}`).then((data) => {
    			this.postDetail = data;
    			Api.get(`/user/${data.userId}`).then((data) => {
                    this.userInfo = data;
                });
                Api.get(`/reply/post/${posterId}`).then((data) => {
                    this.commentData = data;
                });
            });
		}
	}
</script>

<style scoped lang="less">
    @import "PostDetail";
</style>
