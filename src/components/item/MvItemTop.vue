<template>
    <div class="i">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
            <use xlink:href="#icon-zuojiantou"></use>
        </svg>
    </div>
    <video class="mv_video" :src="mvurl" autoplay="true" controls loop="true"></video>
    <div class="mvdetail">
        <div class="name">{{ mvdata.name }}</div>
        <div class="artistName">{{ mvdata.artistName }}</div>
        <div class="con">{{ changeCount(mvdata.playCount) }}热门播放</div>
    </div>
</template>
<script>
export default {
    setup(props) {
        // console.log(props);
        // 通过props进行传值，判断如果数据拿不到，就获取sessionStorage中的
        // console.log(props);
        // props.mvdata.creator = ""
        function changeCount(num) {
            if (num >= 100000000) {
                return (num / 100000000).toFixed(1) + "亿";
            } else if (num >= 10000) {
                return (num / 10000).toFixed(1) + "万";
            }
        }
        return { changeCount }

    },
    props: ["mvurl", "mvdata"],
};
</script>
<style lang="less" scoped>
.i {
    width: 100%;
    background-color: #4E50C4;
    fill: #fff;
}

.mv_video {
    width: 100%;
}

.mvdetail {
    padding: 0 .2rem;
    box-sizing: border-box;

    .name {
        color: #333;
        font-size: .4rem;

    }

    .artistName {
        font-size: .28rem;
        color: #555;
    }

    .con {
        font-size: .28rem;
        color: #3144C4;

    }
}
</style>