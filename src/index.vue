<style scoped>
</style>
<template>
    <div>
        <router-view/>
    </div>
</template>

<script>
    import navigator from "@/components/navigator/navigator";
	export default {
		name: 'App',
        components: {
            navigator: navigator
        },
		data() {
			return {

			}
		}
	}
</script>

