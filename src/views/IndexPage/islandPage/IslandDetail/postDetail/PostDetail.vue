<template>
    <div class="wrapper PostDetailView">
        <div class="post-box">
            <div class="avatar-container">
                <div class="left">
                    <div class="avatar-box">
                        <image :src="this.avatar" class="avatar"/>
                        <p class="name">Tom</p>
                    </div>
                </div>
                <div class="right">
                    <button class="comment-button">+</button>
                </div>
            </div>
            <div class="content">
                这是我写的一个帖子这是我写的一个帖子这是我写的一个帖子
                这是我写的一个帖子这是我写的一个帖子这是我写的一个帖子
                这是我写的一个帖子这是我写的一个帖子这是我写的一个帖子
                这是我写的一个帖子这是我写的一个帖子这是我写的一个帖子
            </div>
        </div>
        <div class="comment-box">
            <div class="comment" v-for="(comment, index) in [1,2,3]" :key="index">
                <div class="avatar-box">
                    <img :src="this.avatar" alt="" class="avatar"/>
                </div>
                <div class="content">
                    <div class="top">
                        <p class="name">tom</p>
                        <button class="reply">回复</button>
                    </div>
                    <div class="bottom">
                        <p>我评论了一下这个动态我评论了一下这个动态我评论了一下这个动态我评论了一下这个动态我评论了一下这个动态我评论了一下这个动态</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="js">
    export default {
    	name : "postDetail",
        data() {
    		return {

            }
        },
        props : {
    		avatar : {
    			default : "https://img.moegirl.org/common/c/c5/Winner-amethyst-2018.png"
            }

        }
    }
</script>

<style scoped lang="less">
    @import "PostDetail";
</style>
