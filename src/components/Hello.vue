<template>
  <div class="hello">
    <carousel></carousel>
    <h1>{{ msg }}</h1>
    <!--<music></music>-->
    <grids id="grids"></grids>
    <div id="pageBlock">
      <el-pagination
        id="pagination"
        v-on:current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        layout="prev, pager, next, jumper"
        :page-size="1"
        :total="50">
      </el-pagination>
      <hr id="partingLine"/>
    </div>
  </div>
</template>

<script>
  import Carousel from './Carousel';
  import Grids from './Grids';
  import Music from './Music';
  import EventBus from '../eventBus';

  export default {
    components: { Carousel, Grids, Music },
    name: 'hello',
    methods: {
      handleCurrentChange() {
        EventBus.$emit('event_page_changed', this.currentPage);
      },
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        icon: 'el-icon-edit',
        currentPage: 1,
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  #grids {
    margin-bottom: 50px;
  }

  #pageBlock {
    margin-bottom: 100px;
  }

  #pagination {
    margin-bottom: 50px
  }

  #partingLine {
    border: 0;
    background-color: #D3D3D3;
    height: 1px;
  }
</style>
