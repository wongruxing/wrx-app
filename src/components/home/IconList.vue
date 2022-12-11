<template>
  <div class="iconList">
    <div class="iconItem" @click="$router.push('/iconone')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tuijian"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="iconItem" @click="$router.push('/singer')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-geshou"></use>
      </svg>
      <span>歌手</span>
    </div>
    <div class="iconItem" @click="$router.push('/recomendmv')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shipinzhibo"></use>
      </svg>
      <span>推荐视频</span>
    </div>
    <div class="iconItem" @click="$router.push('/toplist')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-diantaizhibo"></use>
      </svg>
      <span>电台</span>
    </div>
  </div>
</template>
<script>
export default {
}

</script>
<style lang="less" scoped>
.iconList {
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0.2rem;

  .iconItem {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon {
      width: 0.8rem;
      height: 0.8rem;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
      border-radius: 50%;
    }

    span {
      color: #1832e7;
      // box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
    }
  }
}
</style>