<style scoped lang="less">
    @import "../../../../utils/css/mixin";

    input {
      outline: none;
    }

    .shudong-second-title {
        @height: 1.8rem;
        height: @height;
        line-height: @height;
        width: 95%;
        margin: auto;
        font-size: 1rem;
        border-bottom: 1px solid gainsboro;
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

    .text-area textarea{
        height: 50vh;
        width: 95%;
        margin: 0.3rem auto auto;
        font-size: 0.5rem;
    }


</style>

<template>
    <div>
        <div class="writeLetter-title">
            创建树洞
            <image
                    class="save-image" src="http://printer.noerror.xyz/appImage/gou.png"
                    @click="submit">
            </image>
        </div>
        <div class="bottom-con">
            <input class="shudong-second-title"
                   type="text"
                   placeholder="树洞标题"
                   v-model="title"
            >
            <div class="text-area">
                <textarea
                        placeholder="写下你想对树洞大人说的吧..."
                        id=""
                        cols="30"
                        rows="10"
                        v-model="content"
                >
                </textarea>
            </div>
        </div>
    </div>
</template>

<script>
    import {letter} from "@/utils/apiManager/letterApi";
    import {errorCode} from "@/utils/errorCode/errorCode";

    export default {
        name: 'shudong',

        data() {
            return {
                title: '',
                content: ''
            }
        },

        methods: {
            submit() {
                const data = {
                    "content": this.content,
                    "title": this.title
                }
                letter.addTree(data).then(res => {
                    console.log(res)
                    if (res.code == 1) {

                    } else {
                        errorCode()
                    }
                })
            }
        }

    }
</script>


