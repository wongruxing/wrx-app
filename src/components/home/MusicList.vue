<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe :loop="false" :width="150" class="my-swipe" :show-indicators="false">
        <van-swipe-item v-for="item in state.musicList" :key="item">
          <router-link :to="{ path: '/itemMusic', query: { id: item.id } }">
            <img :src="item.picUrl" alt="" />
            <span class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gf-play1"></use>
              </svg>
              {{ changeCount(item.playCount) }}
            </span>
            <span class="name">{{ item.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import { getMusicList } from "@/request/api/home.js";
import { reactive, onMounted } from "vue";
export default {
  //Vue2
  // data() {
  //   return {
  //     musicList: [],
  //   };
  // },
  // methods: {
  //   async getGnedan() {
  //     let res = await getMusicList();
  //     console.log(res);
  //     this.musicList = res.data.result;
  //   },
  //   changeCount: function (num) {
  //     if (num >= 100000000) {
  //       return (num / 100000000).toFixed(1) + "亿";
  //     } else if (num >= 10000) {
  //       return (num / 10000).toFixed(1) + "万";
  //     }
  //   },
  // },
  // mounted() {
  //   this.getGnedan();
  // },
  // Vue3
  setup() {
    const state = reactive({
      musicList: [],
    });
    function changeCount(num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    }
    onMounted(async () => {
      let res = await getMusicList();
      console.log(res);
      state.musicList = res.data.result;
    });
    return { state, changeCount };
  },
};
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

    .more {
      // border: 0.02rem solid #e72216;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
      background-color: #6168e7;
      color: white;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
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

      .playCount {
        position: absolute;
        z-index: 100;
        right: 0.3rem;
        color: white;
        margin-top: 0.06rem;

        .icon {
          width: 0.3rem;
          height: 0.3rem;
        }
      }

      .name {
        bottom: 0px;
      }
    }
  }
}
</style>