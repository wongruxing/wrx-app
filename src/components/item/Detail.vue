<template>
    <div class="iconItem">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
            <use xlink:href="#icon-fanhui1"></use>
        </svg>
        <span>热门歌曲</span>
    </div>
</template>
<script>
import axios from '@/request/index.js';
import { ref } from 'vue'
import { useRoute } from "vue-router";
const GetDetail = () => {
    const Detaildata = ref([]);
    const Getdetail = async (id) => {
        const res = await axios({
            // url: '/artist/detail?id=' + id,
            url: '/artist/detail?id=' + id,
            method: "get",
        });
        console.log(res);
        Detaildata.value = res.data.data

    }
    return { Getdetail, Detaildata }
};
export default {
    // 获取歌手详情

    setup() {
        const Router = useRoute()
        console.log(Router.query.id);
        const id = Router.query.id
        const { Getdetail, Detaildata } = GetDetail();
        Getdetail(id);
        return { Detaildata }
    }
}
</script> 
<style lang="less" scoped>
.iconItem {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .2rem;
    position: relative;

    .icon {
        width: .8rem;
        height: .8rem;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        padding: .2rem;
        position: fixed;
        left: .05rem;
    }

    span {
        color: #9DC2FF;
        // box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
        padding: .2rem;
        font-size: .5rem;
        font-weight: 700;

    }


}
</style>
