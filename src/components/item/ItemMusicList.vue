<template>
  <div class="itemMusicList">
    <div class="itemListTop">
      <div class="listLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <span>播放全部
          <span>(共{{ itemList.length }}首)</span>
        </span>
      </div>
      <div class="listRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiahao"></use>
        </svg>
        <span>收藏({{ subscribedCount }}) </span>
      </div>
    </div>
    <div class="itemList">
      <div class="item" v-for="(item, i) in itemList" :key="i">
        <div class="itemLeft" @click="playMusic(i)">
          <span class="leftSpan">{{ i + 1 }}</span>
          <div>
            <p>{{ item.name }}</p>
            <span v-for="(item1, index) in item.ar" :key="index">{{ item1.name }}</span>
          </div>
        </div>
        <div class="itemRight">
          <router-link :to="{ path: '/itemmv', query: { id: item.mv } }">
            <svg class="icon bofang" aria-hidden="true">
              <use xlink:href="#icon-shipin2" v-if="item.mv != 0"></use>
            </svg>
          </router-link>
          <svg class="icon liebiao" aria-hidden="true">
            <use xlink:href="#icon-todo_list"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  setup(props) {
    console.log(props);
  },
  props: ["itemList", "subscribedCount"],
  methods: {
    playMusic: function (i) {
      this.updatePlayList(this.itemList)
      this.updatePlayListIndex(i)
    },
    ...mapMutations(['updatePlayList', 'updatePlayListIndex'])
  }
};
</script>
<style lang="less" scoped>
.itemMusicList {
  width: 100%;
  height: 100%;
  // background-color: #f4fffe;
  background-color: #fff;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;

  //   color: #7880ff;
  .itemListTop {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    // margin: 0.1rem;
    align-items: center;

    .listLeft {
      width: 3.5rem;
      height: 100%;
      display: flex;
      align-items: center;
      background-color: #adbfff;
      color: #fff;
      padding: 0.2rem;
      border-radius: 0.9rem;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);

      .icon {
        stroke: #fff;
        stroke-width: 20;
        fill: #fff;
        padding-right: 0.1rem;
      }

      span {
        font-weight: 700;

        span {
          font-weight: 400;
          font-size: 0.2rem;
          color: #fff;
        }
      }
    }

    .listRight {
      display: flex;
      align-items: center;
      background-color: #4247ff;
      padding: 0.2rem;
      border-radius: 0.4rem;
      color: #fff;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);

      .icon {
        width: 0.35rem;
        height: 0.35rem;
        fill: #fff;
        margin-left: 0.1rem;
        stroke: #fff;
        stroke-width: 50;
        padding-right: 0.05rem;
      }
    }
  }

  .itemList {
    width: 100%;

    .item {
      width: 100%;
      height: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .itemLeft {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;

        .leftSpan {
          display: inline-block;
          width: 0.2rem;
          text-align: center;
          padding-right: .1rem;
        }

        div {
          p {
            width: 4.54em;
            height: 0.4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
            font-weight: 700;
          }

          span {
            font-weight: 400;
            font-size: .24rem;
            color: #9999;
          }

          margin-left: .3rem;
        }
      }

      .itemRight {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;


        .bofang {
          position: absolute;
          left: 0;
        }

        .liebiao {
          position: absolute;
          right: 0;
        }
      }
    }
  }

}
</style>