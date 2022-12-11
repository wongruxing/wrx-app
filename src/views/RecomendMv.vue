<template>
    <div class="title">
        <svg class="icon1" aria-hidden="true" @click="$router.push('/')">
            <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        推荐视频
    </div>
    <div class="mvlist">
        <div class="item" v-for="item in state.MvList" :key="item">
            <router-link :to="{ path: '/itemmv', query: { id: item.id } }">
                <div class="mvitem">
                    <div class="imgbox">
                        <img :src="item.picUrl" alt="" />
                        <div class="countbox">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-shipin2"></use>
                            </svg>
                            <div class="view"> {{ changeCount(item.playCount) }}</div>
                        </div>
                    </div>
                    <div class="txt">
                        {{ item.name }}
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import { getRecommendMv } from "@/request/api/item.js";
import { reactive, onMounted } from "vue";
export default {
    setup() {
        const state = reactive({
            MvList: [],
        });
        function changeCount(num) {
            if (num >= 100000000) {
                return (num / 100000000).toFixed(1) + "亿";
            } else if (num >= 10000) {
                return (num / 10000).toFixed(1) + "万";
            }
        }
        onMounted(async () => {
            let res = await getRecommendMv()
            console.log(res);
            state.MvList = res.data.result

        })
        return { state, changeCount };
    }
}
</script>
<style lang="less" scoped>
.title {
    width: 100%;
    font-size: .35rem;
    font-weight: bold;
    line-height: .8rem;
    color: #040621;
    position: relative;
    /* background-color: bisque; */
    text-indent: .4rem;
    align-items: center;

    .icon1 {
        width: .4rem;
        height: .4rem;
        fill: #3144C4;

    }
}



.title::after {
    content: " ";
    position: absolute;
    width: .2rem;
    height: 50%;
    background-color: #3144C4;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}

.mvlist {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .mvitem {
        width: 100%;
        /* background-color: slateblue; */
        position: relative;

        .imgbox {
            width: 100%;
            height: 2.2rem;
            position: relative;

            img {
                width: 100%;
                height: 92%;
                display: block;
                border-radius: .2rem;
            }

            .countbox {
                position: absolute;
                height: .5rem;
                display: flex;
                bottom: .2rem;
                left: .2rem;
                align-items: center;
                padding: .1rem;

                .icon {
                    width: 0.5rem;
                    height: 0.5rem;
                }

                .view {
                    font-size: .3rem;
                    color: white;

                }
            }

        }

        .txt {
            font-size: .3rem;
            color: #444;
            width: 3rem;
            /* background-color: skyblue; */
            display: -webkit-box;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-line-clamp: 4;
            padding: .12rem 0;
            box-sizing: border-box;
        }
    }
}
</style>
