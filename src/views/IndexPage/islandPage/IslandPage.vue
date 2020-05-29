<template>
    <div class="wrapper IslandPageView">
        <Title text="海岛"/>
        <div class="header-box">
            <input type="text" placeholder="搜索海岛" @focus="inputFocus" @blur="inputBlur">
            <button>{{buttonMsg}}</button>
        </div>
        <div class="container-box" style="">
            <div class="avatar-box">
                <image :src="this.$store.default.state.imageBaseUrl + myInfo.photo" class="avatar"></image>
            </div>
            <div class="rua-box" @click="toIsland(myInfo.userId)">
                <p class="first">我的海岛</p>
                <p class="second">{{myInfo.signature}}</p>
            </div>
        </div>
        <div class="container">
            <islandItem v-for="(data, index) in starIsland" v-bind="data"/>
        </div>
    </div>


</template>

<script lang="js">
    import Title from "@/components/title/Title";
	import IslandItem from "@/components/islandItem/IslandItem";
	import Api from "@/utils/apiManager/Api";
	export default {
    	name : "IslandPage",
		components: {
    		IslandItem, Title
        },
        data() {
    		return {
    			buttonMsg : '漂流',
                myInfo : {},
                starIsland : []
            }
        },
        methods : {
			inputFocus() {
				this.buttonMsg = '搜索'
            },
            inputBlur() {
				this.buttonMsg = '漂流'
            },
            toIsland(userId) {
				this.$router.push({
					name : 'detail',
					query : {
						userId
					}
				})
            }
        },
        mounted() {
    		Api.get(`/user/${1}`).then((data) => {
    			this.myInfo = data;
            });
    		Api.get("/star").then((data) => {
    			console.log(data);
                this.starIsland = data.records;
			});
		}
	}
</script>

<style scoped lang="less">
    @import "IslandPage";
</style>
