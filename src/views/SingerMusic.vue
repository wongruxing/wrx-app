<template>
    <Detail />
    <ItemMusicList :itemList="state.itemList" />
</template>
<script>
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { getSingerSong } from "@/request/api/item.js";
import ItemMusicList from "@/components/item/ItemMusicList.vue";
import Detail from "@/components/item/Detail.vue"
export default {
    setup() {
        const state = reactive({
            // playlist: '', //歌单的详情页的数据
            itemList: [], //歌单的歌曲
        });
        onMounted(async () => {
            let id = useRoute().query.id;
            console.log(id);
            //   获取歌单的歌曲
            let result = await getSingerSong(id);
            console.log(result);
            state.itemList = result.data.songs
            //   获取歌单详情页
            // let res = await getSingerdetail(id)
            // console.log(res);
            // state.playlist = res.data.data;
            //   防止页面刷新，数据丢失，将数据保存到sessionStorage中
            sessionStorage.setItem("itemDetail", JSON.stringify(state));
        });
        return { state };
    },
    components: {
        ItemMusicList,
        Detail,

    },
};



</script>