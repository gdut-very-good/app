<template>
    <div class="wrapper IslandItemView" :style="{
    	color : 'red',
    	width : this.widthStyle,
    	marginBottom : this.verticalSpace + 'px'
    }">
        <div class="container" :style="{
            	backgroundImage : `url(${this.bg})`,
            	backgroundSize : 'cover'
            }">
            <div class="content">
                {{introduce}}
            </div>
        </div>
        <div class="name">
            {{name}}
        </div>
    </div>

</template>

<script lang="js">
    export default {
        name : 'IslandItem',
        props : {
        	countInLine : {
                default : 2
            },
			horizontalSpace : {
                default : 17
            },
			verticalSpace : {
                default : 22
            },
            name : {
                default : "Tom的海岛"
            },
            introduce : {
                default: "海岛描述就是这个样子啦海岛描述就是这个样子啦"
            },
            bg : {
                default : "https://steamuserimages-a.akamaihd.net/ugc/918046970938426905/741086CE39C3AA0AD09AED02FF67D1285C066C07/?imw=1024&imh=577&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
            }
        },
        computed : {
        	widthStyle() {
        		let str = `calc((100% - ${(this.countInLine - 1) * this.horizontalSpace}px) / ${this.countInLine})`
                return str;
            }
        },
        mounted() {
        	console.log(this.widthStyle);
		}
	}
</script>

<style scoped lang="less">
    @px2rem : 1 / 54rem;
    .IslandItemView {
        border: #000 2px solid;
        .container {
            height: 150 * @px2rem;
            box-sizing: border-box;

            .content {
                box-sizing: border-box;
                padding: 0 10 * @px2rem;
                height: 100%;
                color: #ffffff;
                font: inherit;
                line-height: 1.5em;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                background-color: rgba(0,0,0, 0.3);
            }
        }
        .name {
            height: 90 * @px2rem;
            font-size: 32 * @px2rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
