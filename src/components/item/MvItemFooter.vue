<template>
    <!-- 推荐mv -->
    <div class="title">推荐视频</div>
    <div class="mvlist">

        <div v-for="(item, i ) in mvdata" :key="i">
            <div class="item">
                <img :src="item.cover" alt="" />
                <div class="conbox">
                    <div class="name">{{ item.artistName }}</div>
                    <div class="txt">{{ item.name }}</div>
                </div>
            </div>

        </div>

    </div>
</template>
<script>

export default {
    setup(props) {
        // console.log(props);
        // 通过props进行传值，判断如果数据拿不到，就获取sessionStorage中的
        // console.log(props);
        props.mvdata.creator = ""

    },
    props: ["mvdata", "mvurl"],

};
</script>
<style lang="less" scoped>
.title {
    font-size: .32rem;
    color: #333;
    text-indent: .2rem;
}

.mvlist {
    padding: .2rem;

    div {
        .item {
            display: flex;
            align-items: center;
            margin-bottom: .16rem;

            img {
                width: 2.4rem;
                height: 1.34rem;
                margin-right: .3rem;
                display: block;
            }

            .conbox {
                .name {
                    font-size: .38rem;
                    color: #444;
                }

                .txt {
                    font-size: 30rpx;
                    color: rgb(133, 133, 133);
                }
            }
        }
    }

}
</style>