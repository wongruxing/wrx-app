<template>
    <div class="wrap">
        <!-- 等录图片必须assets里的 -->
        <img src="../assets/logo.png" alt="">
        <input type="text" placeholder="请输入帐号" v-model="data.phone">
        <input type="password" placeholder="请输入密码" v-model="data.password">
        <svg class="icon" aria-hidden="true" @click="captcha">
            <use xlink:href="#icon-huoquyanzhengma"></use>
        </svg>
        <input type="text" placeholder="请输入验证码">
        <input type="text" placeholder="请输入昵称" v-model="data.nickname">
        <div class="loginbtn" @click="register">登录</div>
        <p><router-link to="login">账号登录</router-link></p>
    </div>
</template> 
<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from '@/request/index'

// 获取验证码
const Captcha = () => {
    const router = useRouter()
    const data = reactive({ phone: '' })
    const captcha = async () => {
        const res = await axios({
            method: "post",
            url: "/captcha/sent",
            data: 'phone=' + data.phone,
            // headers: { "Content-Type": "application/json; charset=utf-8" }
        })
        console.log(res);
        if (res.data.code === 200) {
            // 登录状态的纪录
            // 跳转路由 跳转到首页
            router.push("loginview")
        }
        if (res.data.code === 400) {
            alert(res.data.message)
        }

    }

    return { captcha, data }
}

export default {
    name: "registerView",
    setup() {
        const { captcha, data } = Captcha()
        return { captcha, data }
    }
}

</script>
  
<style lang="less" scoped>
.wrap {
    width: 100%;
    height: 100%;
    // background-color: #E3CF17;
    padding-top: 1.6rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;


    img {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        margin-top: 1rem;
        border: .1rem solid #3123C4;

    }

    input {
        width: 70%;
        height: 1rem;
        border: 0;
        margin-top: .3rem;
        font-size: .32rem;
        color: #666;
        border-radius: .4rem;
        background-color: #E0E0D2;
        text-indent: .2rem;

    }

    .icon {
        position: absolute;
        left: 3.8rem;
        top: 3.9rem;
        width: 3rem;
        height: 2rem;
    }

    p {
        font-size: .3rem;

        a {
            color: #888;
            margin-top: .16rem;
            text-decoration: none;
        }

    }

    .loginbtn {
        width: 70%;
        height: 1rem;
        margin-top: .2rem;
        color: white;
        background-color: #424EC4;
        text-align: center;
        font-size: .32rem;
        line-height: 1rem;
        border-radius: .4rem;
        margin-bottom: .4rem;

    }
}
</style>