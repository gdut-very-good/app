<template>
    <div class="wrapper IslandPageView">
        <Title text="海岛"/>
        <div class="header-box">
            <input type="text" placeholder="搜索海岛">
            <button>漂流</button>
        </div>
        <div class="container">
            <islandItem/>
            <islandItem/>
            <islandItem/>
            <islandItem/>
        </div>
    </div>

</template>

<script lang="js">
    import Title from "@/components/title/Title";
	import IslandItem from "@/components/islandItem/IslandItem";
	export default {
    	name : "IslandPage",
		components: {IslandItem, Title}
	}
</script>

<style scoped lang="less">
    @import "IslandPage";
</style>
