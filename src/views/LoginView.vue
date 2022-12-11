<template>
    <div class="wrap">
        <input type="text" placeholder="请输入帐号" v-model="data.phone">
        <input type="password" placeholder="请输入密码" v-model="data.password">
        <input type="text" placeholder="请输入验证码" v-model="data.captcha">
        <input type="text" placeholder="请输入昵称" v-model="data.nickname">
        <div class="loginbtn" @click="register">立即注册</div>
        <p><router-link to="login">已有账号去登录</router-link></p>
    </div>
</template> 
<script>
import { reactive } from 'vue';
// import axios from 'axios';
import axios from "@/request/index";
import { useRouter } from 'vue-router';

const Register = () => {
    const router = useRouter()
    // 定义了data数据
    const data = reactive({ phone: '', password: '', captcha: '', nickname: '' })
    const register = async () => {
        if (!data.phone || !data.password || !data.captcha || !data.nickname) {
            alert("表单未输入完整，请检查是否都已填完")
        }
        const res = await axios({
            method: "post",
            url: "/register/cellphone",
            data: 'phone=' + data.phone + '&password=' + data.password + '&captcha=' + data.captcha + '&nickname=' + data.nickname,
            // headers: { "Content-Type": 'application/x-www-form-urlencoded' }
        })
        console.log(res);
        // 注册成功
        if (res.data.code === 200) {
            router.push("login")
        }
        // 注册失败
        if (res.data.code === 400) {
            alert(res.data.message)
        }
    }
    return { register, data }
}
export default {
    name: "registerView",
    setup() {
        const { register, data } = Register()
        return { register, data }
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