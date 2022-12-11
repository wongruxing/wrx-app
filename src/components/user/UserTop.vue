<template>
    <div class="personalContainer">
        <div class="user-section">
            <img :src="userdata.backgroundUrl" alt="" srcset="" class="img">
            <div class="user-info-box" @click="toLogin">
                <div class="portrait-box">
                    <img class="portrait" :src="userdata.avatarUrl ? userdata.avatarUrl : '/src/image/logo.png'">
                </div>
                <div class="info-box">
                    <text class="username">{{ userdata.nickname ? userdata.nickname : '游客' }}</text>
                </div>
            </div>

            <div class="vip-card-box">
                <img class="card-bg" :src="userdata.backgroundUrl" mode="">
                <div class="b-btn">
                    立即开通
                </div>
                <div class="tit">
                    <!-- 会员图标-->

                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-huangguan1"></use>
                    </svg>
                    音乐会员
                </div>
                <text class="e-m"></text>
                <text class="e-b">开通会员听歌</text>
            </div>
        </div>

        <!-- 个人中心导航 -->
        <div class="cover-container">
            <div class="nav-section">
                <div class="nav-item">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-wodexinxi"></use>
                    </svg>
                    <span>我的消息</span>
                </div>
                <div class="nav-item" @click="logout">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-zhuxiaodenglu"></use>
                    </svg>
                    <span>注销登录</span>
                </div>
                <div class="nav-item" @click="$router.push('/')">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-zhuye"></use>
                    </svg>
                    <span>个人主页</span>
                </div>
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
        if (!userid) {
            console.log("没登录");
            router.push('login')
            return
        }
        const res = await axios({
            // url:" http://localhost:8888/users/info?id="+userid,
            url: "/user/detail?uid=" + userid,
            // headers: { "authorization": token }
        })
        console.log(res.data.profile);
        userdata.value = res.data.profile
        // // 登录过期
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
// 注销登录功能
const Logout = () => {
    const router = useRouter()
    const logout = async () => {
        const { userid, token } = localStorage
        const res = await axios({
            // url:"http://localhost:8888/users/logout?id="+userid,
            url: "/logout",
            // headers: { "authorization": token }
        })
        console.log(res.data);
        if (res.data.code === 200) {
            localStorage.clear()
            router.push('login')
        }

    }
    return { logout }
}
export default {
    setup() {
        const { getuserdata, userdata } = GetUserData()
        getuserdata()
        const { logout } = Logout()
        return { userdata, logout }
    }
}
</script>
<style lang="less">
/* pages/personal/personal.wxss */
.personalContainer {
    width: 100%;
    height: 100%;

    .user-section {
        height: 7.2rem;
        position: relative;
        padding: 1rem .6rem 0;
        // background-color: #3123C4;

        .img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0.9;
            filter: blur(.02rem);
            border-radius: 0 0 .2rem .2rem;
        }

        .user-info-box {
            height: 1.8rem;
            display: flex;
            align-items: center;
            position: relative;
            z-index: 1;

            .portrait-box {
                .portrait {
                    width: 1.3rem;
                    height: 1.3rem;
                    border: .1rem solid #fff;
                    border-radius: 50%;
                }
            }

            .info-box {
                .username {
                    font-size: 24;
                    color: #fff;
                    margin-left: .2rem;
                }
            }

        }

        .vip-card-box {
            position: relative;
            display: flex;
            flex-direction: column;
            /*  background: linear-gradient(left, red, black); */
            background: linear-gradient(to bottom right, white, #7478C4);
            height: 2.8rem;
            color: #f7d680;
            border-radius: .2rem;
            padding: .2rem .24rem;

            .card-bg {
                position: absolute;
                top: .2rem;
                right: .2rem;
                width: 4rem;
                height: 2.5rem;
                background: linear-gradient(to bottom right, white, #7478C4);
                border-radius: .3rem;
            }

            .b-btn {
                position: absolute;
                right: .3rem;
                top: .32rem;
                width: 1.5rem;
                height: .4rem;
                text-align: center;
                line-height: .4rem;
                font-size: .22rem;
                color: #36343c;
                border-radius: .2rem;
                background: #f7d680;
                z-index: 1;
            }

            .tit {
                font-size: .22rem;
                color: #fff;
                margin-bottom: .28rem;
                // text-align: center;
                // position: relative;


                .icon {
                    // color: #f6e5a3;
                    // position: absolute;
                    margin-right: .1rem;
                    // text-align: center;

                }
            }

            .e-m {
                font-size: .34rem;
                margin-top: .1rem;
            }

            .e-b {
                font-size: .24rem;
                color: #fff;
                margin-top: .1rem;
            }
        }
    }

    // .cover-container {
    //     margin-top: -1.2rem;
    //     padding: 0 .3rem;
    //     height: 25%;
    //     // background: #f5f5f5;
    //     background: linear-gradient(to bottom right, white, #413DC4);
    //     padding-bottom: .1rem;
    // 层级太深路由跳转无反应
    .nav-section {
        margin-top: .1rem;
        display: flex;
        // background: #fff;
        background: linear-gradient(to bottom right, white, #7478C4);
        height: 100%;
        padding: .1rem .2rem;
        border-radius: .2rem;
        justify-content: space-around;

        .nav-item {
            // width: 25%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            .icon {
                font-size: .5rem;
                line-height: .7rem;
            }

            span:last-child {
                font-size: .25rem;
                color: #fff;

            }
        }

    }
}

// }
</style>