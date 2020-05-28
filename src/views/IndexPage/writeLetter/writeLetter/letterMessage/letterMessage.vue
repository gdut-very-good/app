<style scoped lang="less">
    @import "../../../../../utils/css/mixin";

    .letter-message {

    }

    .writeLetter-title {
        .title;
    }

    .bottom-con {
        width: 90%;
        margin: auto;

        .letter-card {
            position: relative;
            border: 1px solid black;

            .stamp {
                position: absolute;
                top: 0;
                right: 0;
                width: calc(30% - 0.4rem);
                height: 3rem;
                background-color: #41B883;
            }

            .letter-title {
                @titleHeight: 1.5rem;
                height: @titleHeight;
                width: 50%;
                padding-left: 0.4rem;
                line-height: @titleHeight;
                font-size: 0.6rem;
            }

            .letter-content {
                height: 2.5rem;
                width: 70%;
                font-size: 0.4rem;
                margin-left: 0.4rem;
                overflow: scroll;
            }

            .receiver-con {
                display: flex;
                flex-direction: row;
                height: 1rem;
                margin: 0 0.2rem 0 0.2rem;
                align-items: center;
                font-size: 0.4rem;

                .receiver-name {
                    line-height: 1rem;
                    height: 100%;
                    width: 50%;
                }

            }
        }
    }
</style>

<template>
    <div class="letter-message">
        <div class="writeLetter-title">
            Tom
        </div>
        <div class="bottom-con">
            <div  v-for="item in letterList" style="padding-top: 0.5rem">
                <div class="letter-card">
                    <image class="stamp"></image>
                    <div class="letter-title">{{item.paper}}</div>
                    <div class="letter-content">
                        {{item.content}}
                    </div>
                    <div class="receiver-con">
                        <div class="receiver-name">tom</div>
                        <div class="receiver-name" style="text-align: right">{{item.sendTime}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {letter} from "@/utils/apiManager/letterApi";
    import {errorCode} from "@/utils/errorCode/errorCode";
    import {matchId} from "@/utils/stampStyle/stampStyle";
    import {loginModules} from "@/utils/apiManager/loginApi";

    export default {
        name: 'letterMessage',

        data() {
            return {
                letterList: []
            }
        },

        mounted() {
            this.getLetterInfo()

        },

        methods: {
            getLetterInfo() {
                letter.getFriendLetter(1).then(res => {
                    if (res.code == 1) {
                        this.letterList = res.data.records
                        // this.reformat()
                    } else {
                        errorCode(res.code)
                    }


                })
            },

            reformat() {
                for(let i = 0; i < this.letterList.length; i++) {
                    this.letterList[i].stampId = matchId(this.letterList[i].stampId)
                }
            }
        }
    }
</script>

