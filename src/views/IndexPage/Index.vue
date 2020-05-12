<template>
    <div>
        <navigator></navigator>
        <router-view></router-view>
    </div>
</template>

<script>
    import navigator from "@/components/navigator/navigator";
	export default {
		name: 'index',
        components: {
            navigator: navigator
        },
		data() {
			return {}
		},

		mounted() {

		}
	}
</script>

<style scoped lang="less">
    .IndexView {
        color: #00B4FF;
        p {
            color: #41B883;
        }
    }
</style>
