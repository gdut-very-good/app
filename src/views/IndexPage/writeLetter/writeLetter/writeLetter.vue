<style scoped lang="less">
    @import "../../../../utils/css/mixin";
    .writeLetter-container {
        padding-bottom: 1.6rem;
    }
    .writeLetter-title {
        .title;
        .save-image {
            position: absolute;
            height: 0.5rem;
            width: 0.5rem;
            right: 0.5rem;
        }
    }
    .bottom-con {
        height: calc(100% - 1.5rem);
        width: 100%;
    }
    .add-circle {
        right: 1rem;
        z-index: 100;
        @radius: 1.3rem;
        height: @radius;
        width: @radius;
        font-size: 1.5rem;
        text-align: center;
        line-height: @radius;
        background-color: rgb(203,176,68);
        border-radius: 50%;
        @radius: 1.4rem;
        position: absolute;
        bottom: 1.8rem;
        color: white;
    }
    .box {
        .publicBox;
        animation:circleRoate 1s ;
        animation-timing-function:linear;
        animation-fill-mode: forwards;
    }
    .box-jiaonang {
        .publicBox;
        animation:circleRoate_jiaonang 1s ;
        animation-timing-function:linear;
        animation-fill-mode: forwards;
    }
    .box-add {
        .publicBox;
    }
    .box-xiexin {
        .publicBox;
    }
    @keyframes circleRoate_jiaonang{
        from{transform: rotate(0deg);}
        to{transform: rotate(90deg);}
    }
    @keyframes circleRoate{
        from{transform: rotate(0deg);}
        to{transform: rotate(180deg);}
    }
    .other-item-shudong {
        .letter-button;
        transform: rotate(180deg);
    }
    .other-item-jiaonang {
        .letter-button;
        transform: rotate(-90deg);
    }
    .other-item-xiexin {
        .letter-button;
    }
</style>

<template>
    <div class="writeLetter-container">
        <div class="writeLetter-title">
            写点什么
        </div>
        <div class="box-add">
            <div class="add-circle" @click="openBtn">+</div>
        </div>
        <div class="box" v-if="show">
            <div class="other-item-shudong" @click="route('shudong')">树洞</div>
        </div>
        <div class="box-jiaonang" v-if="show">
            <div class="other-item-jiaonang" @click="route('jiaonang')">胶囊</div>
        </div>
        <div class="box-xiexin" v-if="show">
            <div class="other-item-xiexin" @click="route('writeLetter')">写信</div>
        </div>
        <div class="bottom-con">
            <letterNav></letterNav>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
	import letterNav from "@/components/letterNav/letterNav";
	import writeLetter from "@/views/IndexPage/writeLetter/writeLetter/writeLetter";
	import shudong from "@/views/IndexPage/writeLetter/shudong/shudong";
	import jiaonang from "@/views/IndexPage/writeLetter/jiaonang/jiaonang";
	export default {
		name: 'letterIndex',
		components: {
			letterNav: letterNav,
		},
		data() {
			return {
				title: '写点什么',
				module: this.$route.name,
				show: false
			}
		},
		mounted() {
		},
		methods: {
			test() {
			},
			route(module) {
				this.$router.push({
					name: module
				})
			},
			openBtn() {
				this.show = true
			}
		}
	}
    import {letter} from "@/utils/apiManager/letterApi";
    import {py} from '@/utils/pingyin/pinyin';
    import {isNotNullTrim, checkNumber, moveArray} from "@/utils/utils";
    import {loginModules} from "@/utils/apiManager/loginApi";
    import user from "@/store/modules/user";
    const PinyinMatch = require('pinyin-match');

    export default {
        name: 'writeLetter',

        data() {
            return {
                //format {'group':, data: [{}]}
                boomFriend: []
            }
        },

        mounted() {
            letter.getBoomFriend().then(res => {
                if (res.code == 1) {
                    this.boomFriend = this.reFormat(res.data.records)
                }
            })

        },

        methods: {
            reFormat(data){
                const newData = []
                for (let i = 0, len = data.length; i < len ;i++) {
                    //判断第一个字符是不是数字,或者是空
                    let firstStr
                    if (data[i].nickname === null) {
                        firstStr = ['#']
                    } else {
                        firstStr = checkNumber(data[i].nickname.charAt(0)) ?
                            ['#'] : py(data[i].nickname.charAt(0))
                    }
                    //查看一下有没有这个分组，但是注意一下下表是0的情况
                    const has = this.hasGroup(firstStr[0], newData)
                    //the array has not this str group
                    if (has === 'none') {
                        newData.push({
                            group: firstStr[0],
                            data: []
                        })
                        newData[newData.length-1].data.push(data[i])
                    } else {
                        newData[has].data.push(data[i])
                    }
                }
                newData.sort((a, b) => {
                    return (a.group + '').localeCompare(b.group + '')
                })
                moveArray(newData, [0], newData.length-1, 1)
                return newData
            },

            hasGroup(str, arr) {
                for (let i = 0, len = arr.length; i < len; i++) {
                    if (arr[i].group === str) {
                        return i
                    }
                }
                return 'none'
            },

            jump(userId) {
                this.$router.push({
                    name: 'friendInfo',
                    query: {
                        userId: userId
                    }
                })
            }
        }
    }
</script>
