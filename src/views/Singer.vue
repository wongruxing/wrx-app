<template>
    <div class="singer">
        <van-swipe :autoplay="3000">
            <van-swipe-item class="item" v-for="item in state.singerlist" :key="item">
                <div class="imgbox">
                    <router-link :to="{ path: '/singermusic', query: { id: item.id } }">
                        <img :src="item.picUrl" alt="" />
                        <text>{{ item.name }}</text>
                    </router-link>
                </div>
            </van-swipe-item>
        </van-swipe>
        <div class="return" @click="$router.push('/')">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fanhui1"></use>
            </svg>
        </div>
    </div>
</template>
<script>
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { getSinger } from "@/request/api/item.js";
export default {
    setup() {
        const state = reactive({
            itemlist: [],
            singerlist: [], //榜单的详情页

        });
        onMounted(async () => {
            let id = useRoute().query.id;
            console.log(id);
            // let result = await getItemList(id);
            // console.log(result);
            // state.singerlist = result.data.artists

            //   获取榜单单详情页
            let res = await getSinger();
            console.log(res);
            state.singerlist = res.data.artists
            // item.al.name = item.name
            // item.al.picUrl = item.picUrl
            // state.itemlist = result.data.songs
            //   防止页面刷新，数据丢失，将数据保存到sessionStorage中
            sessionStorage.setItem("itemDetail", JSON.stringify(state));
        });
        return { state };

    },

}
</script>
<style lang="less" scoped>
.singer {
    height: 100%;
    width: 100%;
    position: relative;

    .van-swipe {
        .van-swipe-item {
            display: flex;
            margin: .3rem 0;
            align-items: center;
            flex-direction: column;
            justify-content: space-around;

            .imgbox {
                width: 5.3rem;
                height: 5.3rem;
                border-radius: 50%;
                margin-right: .2rem;
                // padding: .2rem 0;
                position: relative;

                img {
                    display: block;
                    display: flex;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    border-radius: 50%;
                    justify-content: space-around;
                    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
                    border: .6rem solid #080707;
                }

                text {
                    width: 1.1rem;
                    position: absolute;
                    bottom: .8rem;
                    left: 2rem;
                    color: white;
                    font-size: .2rem;
                    border: .02rem solid #E60F3C;
                    border-radius: .16rem;
                    background-color: #E60F3C;
                    text-align: center;
                }
            }
        }
    }

    .return {
        width: 1rem;
        height: 1rem;
        background-color: #E4E6E5;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding-left: .3rem;
        box-sizing: border-box;
        // padding-top: .2rem;
        position: absolute;
        top: 1%;
        left: 1%;

        .icon {
            left: .15rem;
            bottom: .15rem;
            fill: #E4E6E5;
            display: flex;
            position: absolute;
            font-weight: bold;
            left: .2rem;
            top: .3rem;

        }
    }

}
</style>
