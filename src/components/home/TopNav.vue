<template>
  <div class="topNav">
    <div class="topLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao1"></use>
      </svg>
    </div>
    <div class="topContent">
      <span @click="$router.push('/infouser')">我的</span>
      <span class="active" @click="$router.push('/find')">发现</span>
      <span>云村</span>
      <span @click="$router.push('/mv')">视频</span>
    </div>
    <div class="topRight">
      <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
        <use xlink:href="#icon-sousuo2"></use>
      </svg>
    </div>
  </div>
</template>
<style lang="less" scoped>
.topNav {
  width: 100%;
  height: 1rem;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .topContent {
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 0.36rem;
    color: #6980e7;

    .active {
      font-weight: 900;
    }
  }
}
</style>>