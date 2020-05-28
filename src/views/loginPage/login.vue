<style scoped lang="less">
    @import "../../utils/css/mixin";
    .register-login-con {
        height: 100vh;
    }
    .app-logo {
        .absolute(200px, 200px);
        border-radius: 50%;
        background-color: #00B4FF;
        top: 10%;
    }
    .login-con {
        width: 80%;
        margin-left: 10%;
        margin-top: 54%;
        .submit {
            height: 100px;
            width: 80%;
            margin: 40px 10% 0 10%;
            line-height: 100px;
            text-align: center;
            font-size: 40px;
            background-color: yellowgreen;
            border-radius: 100px;
            color: white;
        }
    }
    .register-con {
        width: 80%;
        margin-left: 10%;
        margin-top: 54%;
        .sign-up {
            height: 100px;
            width: 80%;
            margin: 40px 10% 0 10%;
            line-height: 100px;
            text-align: center;
            font-size: 40px;
            background-color: yellowgreen;
            border-radius: 100px;
            color: white;
        }
    }
    .username-con {
        position: relative;
        .placeholderColor(white);
        height: 100px;
        width: 80%;
        margin-left: 10%;
        margin-bottom: 30px;
        border-bottom: 1px solid #dcd5d5;
        font-size: 0;
        .user-icon {
            position: absolute;
            height: 70px;
            width: 70px;
            left: 0;
            bottom: 15px;
        }
        div {
            position: relative;
            height: 100%;
            width: calc(100% - 90px);
            padding-left: 90px;
        }
    }
    .username-con input {
        background-color: transparent;
        height: 100%;
        width: 100%;
        border: 0;
        outline: none;
        font-size: 0.5rem;
        color: white;
    }
    .backgroundImage {
        .absolute(100%,100%);
        filter: blur(3px);
    }
    .register-notice {
        .absolute(auto, 70%);
        bottom: 50px;
        text-align: center;
        color: white;
        font-size: 0.6rem;
    }
</style>

<template>
    <div class="register-login-con">
        <image class="backgroundImage" src="http://printer.noerror.xyz/appImage/background.png"></image>
        <div class="app-logo"></div>
        <div class="login-con" v-if="logShow">
            <div class="username-con">
                <image src="http://printer.noerror.xyz/appImage/username.png" class="user-icon"></image>
                <div>
                    <input type="text" placeholder="username" v-model="log.username">
                </div>
            </div>
            <div class="username-con">
                <image src="http://printer.noerror.xyz/appImage/password.png" class="user-icon"></image>
                <div>
                    <input type="text" placeholder="password" v-model="log.password">
                </div>
            </div>
            <div class="submit" @click="toIndex">Log in</div>
        </div>
        <div class="register-con" v-if="!logShow">
            <div class="username-con">
                <image src="http://printer.noerror.xyz/appImage/username.png" class="user-icon"></image>
                <div>
                    <input type="text" placeholder="username" v-model="sign.username">
                </div>
            </div>
            <div class="username-con">
                <image src="http://printer.noerror.xyz/appImage/password.png" class="user-icon"></image>
                <div>
                    <input type="text" placeholder="password" v-model="sign.password">
                </div>
            </div>
<!--            <div class="username-con">-->
<!--                <image src="http://printer.noerror.xyz/appImage/password.png" class="user-icon"></image>-->
<!--                <div>-->
<!--                    <input type="text" placeholder="confirmPassword" v-model="sign.confirm">-->
<!--                </div>-->
<!--            </div>-->
            <div class="sign-up" @click="signUp">Sign Up</div>
        </div>
        <div class="register-notice" @click="logShow=!logShow">New here?Sign Up</div>
    </div>
</template>

<script>
    import {loginModules} from "@/utils/apiManager/loginApi";
    export default {
        name: 'login',
        data() {
            return {
                logShow: true,
                log: {
                    username: 'huange7',
                    password: '123456'
                },
                sign: {
                    username: '',
                    password: '',
                    confirm: ''
                }
            }
        },
        mounted() {
        },
        methods: {
            toIndex() {
                let data = {
                    username: this.log.username,
                    password: this.log.password
                };
                loginModules.login(data).then(res => {
                    if (res.code == 1) {
                        this.$store.default.commit('updateUserState', res.data)
                        this.$router.push({
                            name: 'userInfo'
                        })
                    }
                    alert(res.message)
                })
            },
            signUp() {
                const data = {
                    "username":"jackson",
                    "password": this.sign.password,
                    "mail": this.sign.username,
                    "nickname":"你好",
                    "signature":"尽信书，不如无书",
                    "city":"广州市"
                };
                loginModules.register(data).then(res => {
                    if (res.code == 1) {
                        alert(res.message)
                    } else {
                        alert(res.message)
                    }
                })
            }
        }
    }
</script>
