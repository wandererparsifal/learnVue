<template>
  <div>
    <el-carousel :interval="5000" indicator-position="none">
      <el-carousel-item v-for="item in images" :key="item">
        <div style="position:relative;">
          　　<img :src="item"/>
          <h3 style="position:absolute; z-index:2; ; left: 0; top: 0; right: 0; bottom: 0; margin: auto;">{{item}}</h3>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'carousel',
    data() {
      return {
        images: ['../static/spring.jpg', '../static/summer.jpg', '../static/autumn.jpg', '../static/winter.jpg'],
      };
    },
  };
</script>

<style>
  .el-carousel__item h3 {
    color: #ffffff;
    font-size: 42px;
    opacity: 1;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
