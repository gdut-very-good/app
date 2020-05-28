<style scoped lang="less">
    @import "../../../../utils/css/mixin";

    @fontSize: 0.4rem;

    .userInfo {
        height: 100vh;
    }

    .userInfo-container {
        .title;
    }

    .bottom-con {
        height: calc(100% - 1.5rem);
        background-color: rgb(242, 242, 242);

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
            <div class="list-item" @click="upload">
                <div class="left-bar">
                    <image src="http://island.hellochaos.cn/uploads/9eb8b200-d164-43ad-9670-8f3e39db478c.png" class="head-image"></image>
                    <div class="left-bar-content">修改头像</div>
                </div>
                <div class="right-bar">
                    <image src="http://printer.noerror.xyz/appImage/right_arrow.png" class="right-arrow"></image>
                </div>
            </div>
            <!--个人信息-->
            <div
                    class="list-item"
                    v-for="item in listItem"
                    :key="item.name"
                    @click="jump(item.module, item.content)"
            >
                <div class="left-bar">
                    <div class="left-bar-content" style="left: 0.4rem">{{item.name}}</div>
                </div>
                <div class="right-bar">
                    <div class="right-bar-content">{{item.content}}</div>
                    <image src="http://printer.noerror.xyz/appImage/right_arrow.png" class="right-arrow"></image>
                </div>
            </div>
            <input
                    type="file"
                    class="upload"
                    name="avatar"
                    @change="changeHeadIcon($event)"
                    ref="avatar"
            >
        </div>
    </div>
</template>

<script>
    import {loginModules} from "@/utils/apiManager/loginApi";


    export default {
        name: 'set',

        data() {
            return {
                listItem: [
                    {
                        name: '笔名',
                        module: 'nickname',
                        content: this.$store.default.state.user.nickname,
                    },
                    {
                        name: '签名',
                        module: 'signature',
                        content: this.$store.default.state.user.signature,
                    },
                    {
                        name: 'ID',
                        module: 'userId',
                        content: this.$store.default.state.user.userId,
                    },
                    {
                        name: '地区',
                        module: 'city',
                        content: this.$store.default.state.user.city,
                    },
                    {
                        name: '更换绑定邮箱',
                        module: 'mail',
                        content: this.$store.default.state.user.mail,
                    },
                ]
            }
        },

        mounted() {
            let data = {
                username: 'huange7',
                password: '123456'
            }
        },

        methods: {
            jump(module, value) {
                this.$router.push({
                    name: 'changeInfo',
                    query: {
                        module: module,
                        value: value
                    }
                })
            },
            upload() {
                if (!!this.$refs.avatar.$el.files.length) {
                    let image = new FormData()
                    image.append('file', this.$refs.avatar.$el.files[0])
                    loginModules.uploadHeadIcon(image).then(res => {

                    })
                } else {
                    alert('未选择文件')
                }
            },
            changeHeadIcon() {
                let file = event.target.files[0];
                let name = file.name
            }
        }
    }
</script>


