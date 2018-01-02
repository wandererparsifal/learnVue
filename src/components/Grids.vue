<template>
  <div class="grids">
    <el-row :style="styleElRow" :gutter="20" type="flex" v-for="(rowArr, index) in gridItems" :key="index" justify="center">
      <el-col :span="6" v-for="item in rowArr" :key="item.date">
        <el-card :body-style="{ padding: '0px' }">
          <img v-on:click="clickCard(item.date)"
               src="/api/images?name=sss.jpg"
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
      clickCard(number) {
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
        gridItems: [],
        currentDate: getTimeStrByTime(new Date()),
      };
    },
    created() {
      const size = [];
      size.push(window.innerWidth - 20);
      size.push('px');
      this.styleElRow.width = size.join('');

      const row1 = [];
      row1.push({ img: 'a', date: '0' });
      row1.push({ img: 'b', date: '1' });
      this.gridItems.push(row1);
      const row2 = [];
      row2.push({ img: 'c', date: '2' });
      row2.push({ img: 'd', date: '3' });
      this.gridItems.push(row2);
      const row3 = [];
      row3.push({ img: 'e', date: '4' });
      row3.push({ img: 'f', date: '5' });
      this.gridItems.push(row3);
      const row4 = [];
      row4.push({ img: 'g', date: '6' });
      row4.push({ img: 'h', date: '7' });
      this.gridItems.push(row4);
      const row5 = [];
      row5.push({ img: 'i', date: '8' });
      row5.push({ img: 'j', date: '9' });
      this.gridItems.push(row5);
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
    content: '';
  }

  .clearfix:after {
    clear: both
  }
</style>
