<template>
  <div class="searchTop">
    <svg class="icon liebiao" aria-hidden="true" @click="$router.go(-1)">
      <use xlink:href="#icon-zuojiantou"></use>
    </svg>
    <input type="text" placeholder="王力宏" v-model="searchKey" @keydown.enter="enterKey">
  </div>
  <div class="searchHistory">
    <span class="searchspan">历史</span>
    <span v-for="item in  keyWorldList" :key="item" class="spankey" @click="searchHistory(item)">{{ item }}</span>
    <svg class="icon liebiao" aria-hidden="true" @click="delHistory">
      <use xlink:href="#icon-shanchu"></use>
    </svg>
  </div>
  <div class="itemList">
    <div class="item" v-for="(item, i) in searchList" :key="i">
      <div class="itemLeft" @click="updateIndex(item, i)">
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
</template>
<script>
import { getSearchMusic } from "@/request/api/home.js";
export default {
  data() {
    return {
      keyWorldList: [],
      searchKey: "",
      searchList: [],
      // mvid: ''
    };
  },
  mounted() {
    this.keyWorldList = JSON.parse(localStorage.getItem("keyWorldList"))
      ? JSON.parse(localStorage.getItem("keyWorldList"))
      : [];
  },
  methods: {
    enterKey: async function () {
      if (this.searchKey !== "") {
        this.keyWorldList.unshift(this.searchKey);
        //   去重
        this.keyWorldList = [...new Set(this.keyWorldList)];
        // 固定长度
        if (this.keyWorldList.length > 10) {
          this.keyWorldList.splice(this.keyWorldList.length - 1, 1);
        }
        localStorage.setItem("keyWorldList", JSON.stringify(this.keyWorldList));
        let res = await getSearchMusic(this.searchKey);
        // console.log(res);
        this.searchList = res.data.result.songs;
        this.searchKey = "";
        // this.mvid = res.data.result.songs.mv;
      }
    },
    delHistory: function () {
      localStorage.removeItem("keyWorldList");
      this.keyWorldList = [];
    },
    searchHistory: async function (item) {
      let res = await getSearchMusic(item);
      console.log(res);
      this.searchList = res.data.result.songs;
    },
    updateIndex: function (item) {
      item.al = item.al
      item.al.picUrl = item.al.picUrl
      this.$store.commit("pushPlayList", item)
      this.$store.commit("updatePlayListIndex", this.$store.state.playList.length - 1)

    }
  },
};
</script>
<style lang="less" scoped>
.searchTop {
  width: 100%;
  height: 1rem;
  padding: .2rem .2rem;
  display: flex;
  align-items: center;

  input {
    margin-left: .2rem;
    border: none;
    border-radius: .3rem;
    width: 90%;
    height: 100%;
    text-indent: .4rem;
    background-color: #BFC0C4;
  }
}

.searchHistory {
  width: 100%;
  padding: 0.2rem;
  position: relative;

  .searchspan {
    font-weight: 700;
  }

  .spankey {
    padding: .1rem .2rem;
    background-color: rgb(186, 169, 169);
    border-radius: .4rem;
    margin: 0.1rem .2rem;
    display: inline-block;

  }

  .icon {
    width: 0.3rem;
    height: 0.3rem;
    position: absolute;
    right: .2rem;
  }
}

.itemList {
  width: 100%;
  padding: .2rem;

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
</style>