<template>
  <div class="grids">
    <el-row :style="styleElRow" :gutter="20" type="flex" v-for="item in 5" :key="item" justify="center">
      <el-col :span="6" v-for="index in 2" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img v-on:click="clickCard(item, index)"
               src="/mock/image/sss.jpg"
               class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  function getTimeStrByTime(time) {
    const y = time.getFullYear();
    const M = time.getMonth() + 1;
    const d = time.getDate();
    const h = time.getHours();
    const m = time.getMinutes();
    const arr = [];
    arr.push(y);
    arr.push('年');
    if (M < 10) {
      arr.push('0');
    }
    arr.push(M);
    arr.push('月');
    if (d < 10) {
      arr.push('0');
    }
    arr.push(d);
    arr.push('日 ');
    if (h < 10) {
      arr.push('0');
    }
    arr.push(h);
    arr.push(':');
    if (m < 10) {
      arr.push('0');
    }
    arr.push(m);
    return arr.join('');
  }

  export default {
    name: 'grids',
    methods: {
      clickCard(row, col) {
        const number = (((row - 1) * 2) + col) - 1;
        console.log(number);
        // this.$router.push('/detail');
        this.$router.push({ name: 'Detail', params: { detailNumber: number } });
      },
    },
    data() {
      return {
        styleElRow: {
          width: '0px',
        },
        images: ['../static/spring.jpg', '../static/summer.jpg', '../static/autumn.jpg', '../static/winter.jpg'],
        currentDate: getTimeStrByTime(new Date()),
      };
    },
    created() {
      const size = [];
      size.push(window.innerWidth - 20);
      size.push('px');
      this.styleElRow.width = size.join('');
    },
    mounted() {
      window.onresize = () => {
        const size = [];
        size.push(window.innerWidth - 20);
        size.push('px');
        this.styleElRow.width = size.join('');
      };
    },
  };
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 12px;
    line-height: 12px;
  }

  .image {
    cursor: pointer;
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
