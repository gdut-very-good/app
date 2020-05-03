<style scoped lang="less">
    @import "../../../utils/css/mixin";
    @fontSize: 0.4rem;

    .userInfo {
        height: 100vh;
    }

    .userInfo-container {
        .title;
    }

    .bottom-con {
        height: calc(100% - 1.5rem);
        background-color: rgb(242,242,242);
        .list-item {
            .list-item;
        }
    }


</style>

<template>
    <div class="userInfo">
        <div class="userInfo-container">我的资料</div>
        <div class="bottom-con">
            <!--头像信息-->
            <div class="list-item">
                <div class="left-bar">
                    <image src="http://printer.noerror.xyz/appImage/head-icon.png" class="head-image"></image>
                    <div class="left-bar-content">修改头像</div>
                </div>
                <div class="right-bar">
                    <image src="http://printer.noerror.xyz/appImage/right_arrow.png" class="right-arrow"></image>
                </div>
            </div>
            <!--个人信息-->
            <div class="list-item" v-for="item in listItem" v-key="index">
                <div class="left-bar">
                    <div class="left-bar-content" style="left: 0.4rem">{{item.name}}</div>
                </div>
                <div class="right-bar">
                    <div class="right-bar-content">{{item.content}}</div>
                    <image src="http://printer.noerror.xyz/appImage/right_arrow.png" class="right-arrow"></image>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'userInfoPage',

        data() {
            return {
                listItem: [
                    {
                        name: '笔名',
                        content: 'Célin',
                    },
                    {
                        name: '签名',
                        content: '这是一条个性签名',
                    },
                    {
                        name: 'ID',
                        content: '123456789',
                    },
                    {
                        name: '地区',
                        content: 'Guangdong,China',
                    },
                    {
                        name: '更换绑定邮箱',
                        content: '12345678901@gmail.com',
                    },
                ]
            }
        },

        mounted() {

        }
    }
</script>


