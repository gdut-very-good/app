<template>
    <div class="wrapper PostView">
        <div class="content">{{introduce}}</div>
        <div class="box">
            <p class="time">{{time}}</p>
            <p class="reply">{{reply}}</p>
        </div>
    </div>

</template>

<script lang="js">
    export default {
        name : "Post",
        props : {
        	introduce : {
        		default : "这是我写的一个帖子，帖子内容是这样的帖子内容是这样的帖子内容是这样的帖子内容是这样的帖子内容是这样的帖子内容是这样的"
            },
            time : {
        		default: "00:00"
            },
            reply : {
        		default : "12"
            }
        }
    }
</script>

<style scoped lang="less">
    @px2rem : 1 / 54rem;
    .PostView {
        margin-top: 10 * @px2rem;
        padding: 0 10 * @px2rem;
        border: #222210 solid 2 * @px2rem;
        .content {
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp : 3;
            -webkit-box-orient: vertical;
            max-height: 200 * @px2rem;
            font: inherit;
            line-height: 1.5em;
        }
        .box {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .time {
                margin-top: 18 * @px2rem;
                font-size: 25 * @px2rem;
                margin-bottom: 10 * @px2rem;
            }
            .reply {
                margin-top: 18 * @px2rem;
                font-size: 25 * @px2rem;
                margin-bottom: 10 * @px2rem;
            }
        }
    }
</style>
