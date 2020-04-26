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
    }

    .username-con {
        .placeholderColor(white);
        height: 100px;
        width: 80%;
        margin-left: 10%;
        margin-bottom: 30px;
        border-bottom: 1px solid #dcd5d5;
        font-size: 0;

        .login-icon {
            float: left;
            height: 70px;
            width: 70px;
        }
    }

    .username-con input {
        background-color: transparent;
        height: 100%;
        width: 100%;
        text-align: center;
        border: 0;
        outline: none;
    }

    .backgroundImage {
        .absolute(100%,100%);
        filter: blur(5px);
    }

    .submit {
        .absolute(100px, 60%);
        line-height: 100px;
        text-align: center;
        font-size: 40px;
        top: 45%;
        background-color: yellowgreen;
        border-radius: 100px;
        color: white;
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
        <div class="login-con">
            <div class="username-con">
                <input type="text" placeholder="username">
            </div>
            <div class="username-con">
                <input type="text" placeholder="password">
            </div>
        </div>
        <div class="submit">Log in</div>
        <div class="register-notice">New here?Sign Up</div>
    </div>
</template>

<script>
    export default {
        name: 'login',

        data() {
            return {
                div_with: '200px'
            }
        },

        mounted() {

        }
    }
</script>


