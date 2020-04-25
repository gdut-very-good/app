<style scoped>
    .register-login-con {
        height: 100vh;
        background-color: red;
        background-image: url("http://printer.noerror.xyz/appImage/username.png");
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .login-con {
        width: 80%;
        margin-left: 10%;
        margin-top: 54%;
    }

    .username-con {
        height: 100px;
        width: 80%;
        margin-left: 10%;
        margin-bottom: 30px;
    }

    .username-con input {
        display: inline-block;
        vertical-align: top;
        height: 100%;
        width: 100%;
        text-align: center;
        border: 0;
        outline: none;
        font-size: 40px;
        background-color: transparent;
        border-bottom: 1px solid #f2e2e2;
        color: white;
    }

    .submit {
        height: 100px;
        width: 60%;
        border-radius: 80px;
        margin-left: 20%;
        margin-top: 100px;
        background-color: rgb(234,204,32);
        line-height: 100px;
        text-align: center;
        font-size: 40px;
        color: white;
    }

    .background-image {
        position: absolute;
        height: 100%;
        width: 100%;
    }

    .app-logo {
        position: absolute;
        height: 200px;
        width: 200px;
        top: 10%;
        border-radius: 50%;
        background-color: #00B4FF;
        left: calc(50% - 100px);
    }

    .register-notice {
        position: absolute;
        bottom: 100px;
        height: 30px;
        width: 100%;
        text-align: center;
        font-size: 40px;
        color: #bcb0b0;
    }



</style>

<template>
    <div class="register-login-con">
        <image class="background-image" src="http://printer.noerror.xyz/appImage/background.png"></image>
        <div class="app-logo"></div>
        <div class="login-con">
            <image src="http://printer.noerror.xyz/appImage/background.png"></image>
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


