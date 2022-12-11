<template>
  <div class="wrap">
    <img src="../assets/log.png" alt="">
    <input type="text" placeholder="请输入帐号" v-model="data.phone">
    <input type="password" placeholder="请输入密码" v-model="data.password">
    <div class="loginbtn" @click="login">登录</div>
    <p><router-link to="register">去注册</router-link></p>
  </div>
</template>
<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from '@/request/index'
const Login = () => {
  const router = useRouter()
  // 定义了data数据
  const data = reactive({ phone: '', password: '' })
  const login = async () => {
    // 非空验证
    if (!data.phone || !data.password) {
      alert("请输入完整信息")
    }
    const res = await axios({
      method: 'post',
      url: "/login/cellphone",
      data: 'phone=' + data.phone + '&password=' + data.password,
      // headers: { "Content-Type": 'application/json; charset=utf-8' }
    })
    console.log(res);
    console.log(res.data.code);
    if (res.data.code === 200) {
      // 登录状态的纪录
      localStorage.islogin = true
      localStorage.token = res.data.token
      localStorage.userid = res.data.account.id
      // 跳转路由 跳转到首页
      router.push("infouser")
    }
    if (res.data.code === 400) {
      alert(res.data.message)
    }
  }
  return { login, data }
}

export default {
  // data() {
  //   return {
  //     phone: '',
  //     password: ''
  //   }
  // },
  // methods: {
  //   Login: async function () {
  //     let res = await this.$store.dispatch('getLogin', { phone: this.phone, password: this.password })
  //     console.log(res);
  //     if (res.data.code === 200) {//如果返回的code等于200，说明登录成功，就跳转个人中心页面
  //       this.$store.commit('updateIsLogin', true)
  //       this.$store.commit('updateToken', res.data.token)
  //       let result = await getLoginUser(res.data.account.id)
  //       console.log(result);
  //       this.$store.commit('updateUser', result)
  //       this.$router.push('/infoUser')
  //     } else {
  //       alert("手机号码或者密码错误")
  //       this.password = ''
  //     }
  //   }
  // }
  setup() {
    name: 'login'
    const { login, data } = Login()
    return { login, data }
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

  p {
    font-size: .3rem;

    a {
      color: #666;
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