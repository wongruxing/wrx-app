<template>
    <!-- 个人中心列表 -->
    <div class="musicList">
        <div class="musicTop">
            <div class="title">最近播放</div>
        </div>
        <div class="musicContent">
            <van-swipe :loop="false" :width="150" class="my-swipe" :show-indicators="false">
                <van-swipe-item v-for="item in userdata " :key="item">
                    <router-link :to="{ path: '/itemmusic', query: { id: item.song.id } }">
                        <img :src="item.song.al.picUrl" alt="" />
                    </router-link>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="cardList">
            <div class="card-item">
                <text class="title">我的音乐</text>
            </div>
            <div class="card-item">
                <text class="title">我的收藏</text>
            </div>
            <div class="card-item">
                <text class="title">我的电台</text>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from '@/request/index'
const GetUserData = () => {
    const userdata = ref([])
    const router = useRouter()
    const getuserdata = async () => {
        const { userid, token } = localStorage
        console.log(userid);
        if (!userid) {
            console.log("没登录");
            router.push('login')
            return
        }
        const res = await axios({
            // url:" http://localhost:8888/users/info?id="+userid,
            url: "/user/record?uid=" + userid,
            // headers: { "authorization": token }
        })
        console.log(res);
        userdata.value = res.data.allData

        // 登录过期
        if (res.data.code === 400) {
            console.log(res.data.message);
            localStorage.clear()
            router.push('login')
            return
        }
        // 获取成功
        if (res.data.code === 400) {
            console.log(res.data.info);
            userdata.value = res.data.info
        }

    }
    return { getuserdata, userdata }
}


export default {
    setup() {
        const { getuserdata, userdata } = GetUserData()
        getuserdata()
        // const { logout } = Logout()
        return { userdata }
    }
}
</script>
<style lang="less" scoped>
.musicList {
    width: 100%;
    height: 5rem;
    padding: 0.2rem;

    .musicTop {
        width: 100%;
        height: 0.6rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.2rem;
        position: relative;

        .title {
            font-size: 0.4rem;
            font-weight: 900;
            color: #1832e7;
            padding-left: .2rem;
        }

        .title::after {
            content: " ";
            position: absolute;
            width: .2rem;
            height: 50%;
            background-color: #878BC4;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }


    }

    .musicContent {
        width: 100%;
        height: 3.6rem;

        // background-color: #e72216;
        .van-swipe-item {
            position: relative;
            height: 3.8rem;
            padding-right: 0.2rem;

            img {
                width: 100%;
                height: 2.5rem;
                // padding: 0.1rem;
                border-radius: 0.2rem;
                box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
            }



        }
    }

    .cardList {
        margin-top: -0.4rem;
        // position: relative;

        .card-item {
            // border-top: .02rem solid #eee;
            height: .8rem;
            width: 100%;
            font-size: .26rem;
            padding: .2rem .3rem .3rem .3rem;
            color: #333;
            background-color: #4744C4;
            border-radius: .2rem;
            margin-top: .1rem;
            // position: absolute;

            .title {
                color: white;
                font-size: .3rem;
            }
        }
    }
}
</style>