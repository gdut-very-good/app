<style scoped lang="less">
    @import "../../../../../utils/css/mixin";

    .writeLetter-title {
        .title;
    }

    .bottom-con {
        .envelope-con {
            position: relative;
            height: 6rem;
            width: 95%;
            border: 1px solid black;
            margin: 5rem auto auto;

            .contact-con {
                height: 0.8rem;
                width: 24%;
                margin: 0.3rem 0 0 0.2rem;
            }

            .wenzi {
                display: block;
                height: 100%;
                line-height: 0.8rem;
                text-align: center;
                font-size: 0.4rem;
            }

            .stamp {
                position: absolute;
                right: 0.2rem;
                top: 0.2rem;
                height: 2rem;
                width: 1.8rem;
                font-size: 0.4rem;
            }
        }

        .submit-btn {
            height: 1rem;
            width: 50%;
            line-height: 1rem;
            margin: 0.5rem auto auto;
            text-align: center;
            font-size: 0.4rem;
            background-color: #238FFF;
            border-radius: 6px;
            color: white;
        }
    }

</style>

<template>
    <div class="letter-container">
        <contact :contactList="contactList" :layerShow="isShow" @close="close"></contact>
        <letterPop :letterShow="stampShow" @closeStamp="closeStamp"></letterPop>
        <div class="writeLetter-title">
            <text>信件信息</text>
        </div>
        <div class="bottom-con">
            <div class="envelope-con">
                <image class="stamp" @click="showStamp" :src="stampUrl"></image>
                <div class="contact-con">
                    <text class="wenzi" @click="showList">{{friendName}}</text>
                </div>
            </div>
            <div class="submit-btn" @click="submit">投递</div>
        </div>
    </div>
</template>

<script>
    import {letter} from "@/utils/apiManager/letterApi";
    import {stamp} from "@/utils/stampStyle/stampStyle";
    import {formatDate} from "@/utils/date/date";
    import letterPop from "@/components/letterPop/letterPop";
    import {loginModules} from "@/utils/apiManager/loginApi";
    import contact from "@/components/contact/contact";

    export default {
        name: 'letter',

        components: {
            contact,
            letterPop
        },

        data() {
            return {
                contactList: null,
                isShow: false,
                stampShow: false,
                stampUrl: stamp[0].url,
                friendName: null
            }
        },

        mounted() {
            this.getContactList()
            // let data = {
            //     username: 'huange7',
            //     password: '123456'
            // }
            // loginModules.login(data).then(res => {
            //
            //     if (res.code == 1) {
            //
            //     }
            //     alert(res.message)
            // })
        },

        methods: {
            getContactList() {
                letter.getBoomFriend().then(res => {
                    this.contactList = res.data.records
                    this.friendName = res.data.records[0].nickname
                    this.$store.default.commit('updateLetterState', {
                        receiverId: res.data.records[0].userId,
                        stampId: stamp[0].stampId
                    })
                })
            },

            showList() {
                this.isShow = true
            },

            close(data) {
                this.isShow = false
                if (data.name) {
                    this.friendName = data.name
                }
            },

            closeStamp(data) {
                this.stampShow = false
                if (data.url) {
                    this.stampUrl = data.url
                }
            },

            showStamp() {
                this.stampShow = true
            },

            submit() {
                this.$store.default.commit('updateLetterState', {
                    sendTime: formatDate(),
                })
                const reqData = this.$store.default.state.letter
                console.log(reqData)
                letter.submitLetter(reqData).then(res => {
                    console.log(res)
                })
            }
        },
    }
</script>


