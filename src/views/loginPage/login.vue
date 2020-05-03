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
    }

    .backgroundImage {
        .absolute(100%,100%);
        filter: blur(3px);
    }

    .register-notice {
        .absolute(auto, 50%);
        bottom: 50px;
        text-align: center;
        color: white;
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
                    <input type="text" placeholder="username">
                </div>
            </div>
            <div class="username-con">
                <image src="http://printer.noerror.xyz/appImage/password.png" class="user-icon"></image>
                <div>
                    <input type="text" placeholder="password">
                </div>
            </div>
            <div class="submit" @click="toIndex">Log in</div>
        </div>
        <div class="register-con" v-if="!logShow">
            <div class="username-con">
                <image src="http://printer.noerror.xyz/appImage/username.png" class="user-icon"></image>
                <div>
                    <input type="text" placeholder="username">
                </div>
            </div>
            <div class="username-con">
                <image src="http://printer.noerror.xyz/appImage/password.png" class="user-icon"></image>
                <div>
                    <input type="text" placeholder="password">
                </div>
            </div>
            <div class="username-con">
                <image src="http://printer.noerror.xyz/appImage/password.png" class="user-icon"></image>
                <div>
                    <input type="text" placeholder="confirmPassword">
                </div>
            </div>
            <div class="sign-up">Sign Up</div>
        </div>
        <div class="register-notice" @click="logShow=!logShow">New here?Sign Up</div>
    </div>
</template>

<script>
    export default {
        name: 'login',

        data() {
            return {
                logShow: true
            }
        },

        mounted() {

        },

        methods: {
            toIndex() {
                console.log(this.$router)
                console.log('niaho')
                this.$router.push({ name: "userInfoPage" });
            }
        }
    }
</script>


