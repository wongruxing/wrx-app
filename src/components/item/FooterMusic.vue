<template>
  <div class="FooterMusic">
    <div class="footerLeft" @click="updateDetailShow">
      <img :src="playList[playListIndex].al.picUrl" alt="" :class="{ active: !isbtnShow, pause: isbtnShow }" />
      <div class="text">
        <p>{{ playList[playListIndex].name }}</p>
        <span>横滑切换上下</span>
      </div>
    </div>
    <div class="footerRight">
      <svg class="icon bofang" aria-hidden="true" @click="play" v-if="isbtnShow">
        <use xlink:href="#icon-bofanganniu"></use>
      </svg>
      <svg class="icon bofang" aria-hidden="true" @click="play" v-else>
        <use xlink:href="#icon-weibiaoti--"></use>
      </svg>
      <svg class="icon liebiao" aria-hidden="true">
        <use xlink:href="#icon-danlieliebiao"></use>
      </svg>
    </div>
    <audio ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3 `"></audio>
    <van-popup v-model:show="detailShow" position="right" :style="{ height: '100%', width: '100%' }">
      <MusicDetail :musicList="playList[playListIndex]" :play="play" :isbtnShow="isbtnShow"
        :addDuration="addDuration" />
    </van-popup>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import MusicDetail from "@/components/item/MusicDetail.vue";
export default {
  data() {
    return {
      interVal: 0,
    };
  },
  computed: {
    ...mapState(["playList", "playListIndex", "isbtnShow", "detailShow"]),
  },
  mounted() {
    console.log(this.$refs);
    this.$store.dispatch("getLyric", this.playList[this.playListIndex].id);
    this.updateTime()
  },
  updated() {
    this.$store.dispatch("getLyric", this.playList[this.playListIndex].id);
    this.addDuration()
  },
  methods: {
    play: function () {
      // 判断音乐是否播放
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.updateIsbtnShow(false);
        this.updateTime(); //播放就调用函数进行传值
      } else {
        this.$refs.audio.pause();
        this.updateIsbtnShow(true);
        clearInterval(this.interVal); //暂停清除定时器
      }
    },
    addDuration: function () {
      this.updateDuration(this.$refs.audio.duration)
    },
    updateTime: function () {
      this.interVal = setInterval(() => {
        this.updateCurrentTime(this.$refs.audio.currentTime);
      }, 1000);
    },
    ...mapMutations([
      "updateIsbtnShow",
      "updateDetailShow",
      "updateCurrentTime",
      "updateDuration"
    ]),
  },
  watch: {
    playListIndex: function () {
      //监听如果下标发生了改变，就自动播放音乐
      this.$refs.audio.autoplay = true;
      if (this.$refs.audio.paused) {
        //如果是暂停状态，改变图标
        this.updateIsbtnShow(false);
      }
    },
    playList: function () {
      if (this.isbtnShow) {
        this.$refs.audio.autoplay = true;
        this.updateIsbtnShow(false);
      }
    },
  },
  components: {
    MusicDetail,
  },
};
</script>
<style lang="less" scoped>
.FooterMusic {
  width: 100%;
  height: 1.5rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  border-top: .02rem solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .2rem;

  .footerLeft {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-items: center;

    img {
      width: 1rem;
      height: 1rem;
      border: .13rem solid #0D111B;
      border-radius: 50%;
      box-shadow: .02rem .02rem .02rem rgba(0, 0, 0, 0.5);
      animation: rotates 10s linear infinite;
    }

    .text {
      font-size: .26rem;
      color: #444;
      width: 3rem;
      /* background-color: skyblue; */
      display: -webkit-box;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-line-clamp: 4;
      padding: .12rem 0;
      box-sizing: border-box;
    }

    .active {
      animation-play-state: running;
    }

    .pause {
      animation-play-state: paused;
    }

    @keyframes rotates {
      0% {
        -webkit-transform: rotate(0deg);
      }

      25% {
        -webkit-transform: rotate(90deg);
      }

      50% {
        -webkit-transform: rotate(180deg);
      }

      75% {
        -webkit-transform: rotate(270deg);
      }

      100% {
        -webkit-transform: rotate(360deg);
      }


    }

  }
}

.footerRight {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    width: .6rem;
    height: .6rem;
  }
}
</style>