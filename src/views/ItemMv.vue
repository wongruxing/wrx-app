<template>
    <MvItemTop :mvurl="state.mvurl" :mvdata="state.mvdata" />
    <MvItemFooter :mvurl="state.mvurl" :mvdata="state.mvdata" />
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { getMvVideo, getMvdetail } from "@/request/api/item.js"
import MvItemTop from "@/components/item/MvItemTop.vue";
import MvItemFooter from "@/components/item/MvItemFooter.vue";
export default {
    setup() {
        const state = reactive({
            mvurl: '', //获取地址
            mvdata: [],
            // mvdata1: []
        });

        onMounted(async () => {
            let id = useRoute().query.id;
            console.log(id);
            //   获取Mv页
            let result = await getMvVideo(id);
            console.log(result);
            state.mvurl = result.data.data.url
            //   获取歌单的歌曲
            // let res = await getMvdetail()
            // console.log(res);
            // state.mvdata = res.data.data
            // console.log(e.currentTarget.data.data.index)
            // state.mvdata1 = res.data.data.cover
            //   防止页面刷新，数据丢失，将数据保存到sessionStorage中
            sessionStorage.setItem("itemDetail", JSON.stringify(state));
        })
        return { state };
    },
    // methods: {
    //     playVideo: function (e) {
    //         console.log(e.currentTarget.data.data.index);
    //         const index = e.currentTarget.data.data.index
    //         const mid = this.data.musiclist[index].id
    //         this.info(mid)
    //     },
    // },
    components: {
        MvItemTop,
        MvItemFooter,
    },
}
</script>