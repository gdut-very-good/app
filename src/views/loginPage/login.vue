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
        background-color: white;
    }

    .username-con {
        height: 100px;
        width: 80%;
        margin-left: 10%;
        margin-bottom: 30px;
        background-color: #00B4FF;
    }

    .username-con input {
        display: inline-block;
        vertical-align: top;
        height: 100%;
        width: 100%;
        text-align: center;
        border: 0;
        outline: none;
    }


</style>

<template>
    <div class="register-login-con">
        <div class="login-con">
            <div class="username-con">
                <input placeholder="username" type="text">
            </div>
            <div class="username-con">
                <input placeholder="password" type="text">
            </div>
        </div>
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


