<style scoped lang="less">
    @import "../../../../utils/css/mixin";

    .stamp-container {
        height: 100vh;
    }

    .stamp-title {
        .title;
    }

    .bottom-con {
        background-color: @bgColor;
        padding: 0 0.5rem 0 0.5rem;

        .stamp-con {
            display: flex;
            flex-direction:row;

            .stamp-style {
                @rectangleHeight: 5rem;
                @rectangleWidth: 40%;
                margin: 0.5rem 5% 0 5%;
                height: @rectangleHeight;
                width: @rectangleWidth;
            }

        }
    }




</style>

<template>
    <div class="stamp-container">
        <div class="stamp-title">我的邮票</div>
        <div class="bottom-con">
            <div class="stamp-con" v-for="item in listItem">
                <image
                        v-for="list in item.data"
                        class="stamp-style"
                       :src="list.url" >
                </image>
            </div>
        </div>
    </div>
</template>

<script>
    import {myApi} from "@/utils/apiManager/myApi";
    import {errorCode} from "@/utils/errorCode/errorCode";
    import {matchStamp} from "@/utils/stampStyle/stampStyle";

    export default {
        name: 'stamp',

        data() {
            return {
                listItem: [],
            }
        },

        mounted() {
            this.getApi()
        },

        methods: {
            getApi() {
                myApi.getStamp().then(res => {
                    if (res.code == 1) {
                        this.listItem = this.showFormat(matchStamp(this.reformat(res.data.records)))
                    } else {
                        errorCode()
                    }
                })
            },

            reformat(stampList) {
                const list = []
                for (let i = 0; i < stampList.length; i++) {
                    list.push(stampList[i].stampName)
                }
                return list
            },

            showFormat(database) {
                let index = 0, tag = 0
                const len = Math.floor(database.length)
                const format = []
                if (!len) {
                    return
                }
                while (tag < len) {
                    if (tag === 0) {
                        format.push({
                            data: []
                        })
                        format[index].data.push(database[tag])
                    } else {
                        if (!(tag % 2)) {
                            format.push({
                                data: []
                            })
                            index++
                        }
                        format[index].data.push(database[tag])
                    }
                    tag++
                }
                return format
            }

        }
    }
</script>


